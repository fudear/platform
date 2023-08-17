import {
  DefiArgentinaWallets,
  TransactionType,
} from '@/models/transaction.model';
import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import { outgoingTransactionsState } from '@/states/outgoing-transactions.atom';
import {
  TableCell,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Network } from 'alchemy-sdk';
import { useRecoilState } from 'recoil';

interface TransactionsTableProps {
  transactionType: TransactionType;
}

const formatAddress = (address: string): string => {
  return DefiArgentinaWallets.includes(address)
    ? 'DeFi Argentina'
    : `${address.substring(0, 10)}...`;
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactionType,
}) => {
  const [incomingTxState, setIncomingTxState] = useRecoilState(
    incomingTransactionsState
  );

  const [outgoingTxState, setOutgoingTxState] = useRecoilState(
    outgoingTransactionsState
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Token</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>From</StyledTableCell>
              <StyledTableCell>To</StyledTableCell>
              <StyledTableCell>TimeStamp</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {(transactionType === TransactionType.Incoming
              ? incomingTxState
              : outgoingTxState
            ).map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  <Typography fontWeight={700}>{row.asset || ''}</Typography>
                  <Typography color="secondary">Ether</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography fontWeight={700}>$100</Typography>
                  <Typography>
                    {row.value || 0} {row.asset}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography
                    color={
                      transactionType === TransactionType.Incoming
                        ? '#008053'
                        : '#d32f2f'
                    }
                  >
                    {transactionType === TransactionType.Incoming
                      ? 'Donation'
                      : 'Cashout'}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>{formatAddress(row.from)}</StyledTableCell>
                <StyledTableCell>{formatAddress(row.to || '')}</StyledTableCell>
                <StyledTableCell>17/08/2023 10:56</StyledTableCell>
                <StyledTableCell>
                  {row.network === Network.MATIC_MAINNET ? (
                    <a
                      href={`https://polygonscan.com/tx/${row.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View more TX details
                    </a>
                  ) : (
                    <a
                      href={`https://etherscan.io/tx/${row.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View more TX details
                    </a>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h6.fontSize,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default TransactionsTable;

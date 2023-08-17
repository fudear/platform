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

interface TransactionsTableProps {}

const TransactionsTable: React.FC<TransactionsTableProps> = () => {
  const [incomingTxState, setIncomingTxState] = useRecoilState(
    incomingTransactionsState
  );

  const [outgoingTxState, setOutgoingTxState] = useRecoilState(
    outgoingTransactionsState
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Typography variant="h2" p="2rem" textAlign="center">
          Incoming Transactions
        </Typography>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Token</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Transaction Hash</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {incomingTxState.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.asset || ''}</StyledTableCell>
                <StyledTableCell>${row.value || 0}</StyledTableCell>
                <StyledTableCell>{row.from}</StyledTableCell>
                <StyledTableCell>{row.hash || ''}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
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
      <TableContainer component={Paper}>
        <Typography variant="h2" p="2rem" textAlign="center">
          Outgoing Transactions
        </Typography>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Token</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Transaction Hash</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {outgoingTxState.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.asset || ''}</StyledTableCell>
                <StyledTableCell>
                  <div className="flex">${row.value || 0}</div>
                </StyledTableCell>
                <StyledTableCell>{row.from}</StyledTableCell>
                <StyledTableCell>{row.hash || ''}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
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
    fontSize: theme.typography.h4.fontSize,
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

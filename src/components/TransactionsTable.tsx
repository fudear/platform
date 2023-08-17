import {
  DefiArgentinaWallets,
  TransactionType,
} from '@/models/transaction.model';
import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import { outgoingTransactionsState } from '@/states/outgoing-transactions.atom';
import Launch from '@mui/icons-material/Launch';
import AttachFile from '@mui/icons-material/AttachFile';
import {
  Box,
  Modal,
  Stack,
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
import { useState } from 'react';
import ImageForm from './ImageForm';

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
  const [imageModalOpened, setImageModalOpened] = useState(false);
  const [selectedTx, setSelectedTx] = useState('');

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
                      : 'Withdrawl'}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>{formatAddress(row.from)}</StyledTableCell>
                <StyledTableCell>{formatAddress(row.to || '')}</StyledTableCell>
                <StyledTableCell>17/08/2023 10:56</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" gap={4}>
                    <Box>
                      {row.network === Network.MATIC_MAINNET ? (
                        <a
                          href={`https://polygonscan.com/tx/${row.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Launch />
                        </a>
                      ) : (
                        <a
                          href={`https://etherscan.io/tx/${row.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Launch />
                        </a>
                      )}
                    </Box>

                    <AttachFile
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        setImageModalOpened(true);
                        setSelectedTx(row.hash || '');
                      }}
                    />
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        open={imageModalOpened}
        onClose={() => setImageModalOpened(false)}
      >
        <Paper sx={{ width: 'fit-content', padding: 6 }}>
          <Typography variant="h5" fontWeight={800} paddingBottom={4}>
            Upload withdrawl receipts
          </Typography>

          <ImageForm txHash={selectedTx} />
        </Paper>
      </Modal>
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

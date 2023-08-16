import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import { outgoingTransactionsState } from '@/states/outgoing-transactions.atom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
        <h2>Incoming Transactions</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Transaction Hash</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomingTxState.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.asset || ''}</TableCell>
                <TableCell>{row.value || 0}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.hash || ''}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <h2>Outgoing Transactions</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Transaction Hash</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outgoingTxState.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.asset || ''}</TableCell>
                <TableCell>{row.value || 0}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.hash || ''}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionsTable;

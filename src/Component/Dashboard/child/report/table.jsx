import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rows from "../../../../DataTable.json"
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({  status }) => ({

    [`&.${tableCellClasses.body}`]: {
        color: status === "Profit" ? "green" : "red",
    },
}));


export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="center">سود/زیان</TableCell>
                        <TableCell align="center">موجودی (ارزی)</TableCell>
                        <TableCell align="center">موجودی (ریالی)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right"><img src={row.icon}/>  {" "}  {row.name} {" "} </TableCell>

                            <TableCell component="th" scope="row">

                            </TableCell>
                            <StyledTableCell align="center" status={row.status}>{row.ProfitAndloss}</StyledTableCell>
                            <TableCell align="center">{row.balanceCurrency}</TableCell>
                            <TableCell align="center">{row.balanceRial}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

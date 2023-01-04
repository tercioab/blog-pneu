import Header from "../../components/Header";
import { useContext } from 'react';
import myContext from "../../context/context";
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
	  backgroundColor: theme.palette.common.black,
	  color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
	  fontSize: 14,
	},
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
}));

export default function CustoKm() {

    const { resultkm } = useContext(myContext);
    
    return (
        <>
			<Header />
			<Box sx={{ mt: 3, ml: 6, mr: 6 }}>
			<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Marca</StyledTableCell>
            <StyledTableCell align="right">Km</StyledTableCell>
            <StyledTableCell align="right">Preço</StyledTableCell>
            <StyledTableCell align="right">Valor por Km</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
            {resultkm
				.sort((a, b) => a.result - b.result)
				.map(
					({ result, marca, km, price }) =>
						price &&
						marca &&
						km && (
							<StyledTableRow key={marca}>
							<StyledTableCell component="th" scope="row">
							  {marca}
							</StyledTableCell>
							<StyledTableCell align="right">{km}</StyledTableCell>
							<StyledTableCell align="right">R${price}</StyledTableCell>
							<StyledTableCell align="right">{result}</StyledTableCell>
						  </StyledTableRow>
						),
				)}
         </TableBody>
      </Table>
				</TableContainer>
				</Box>
            </>
    )
}
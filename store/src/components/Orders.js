import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStyles from './Login-Register Pages/styles'
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'

const apiURL = "http://localhost:4000/";


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function Orders({ userInfo }) {

    const [orders, setOrders] = React.useState();

    const [rerender, setRerender] = React.useState(false);

    const allOrders = async () => {
        return await axios.get(apiURL + "orders/allorders", userInfo);
    }
    
    const handleCancelOrder = async (id) => {
        console.log(id);
        await axios.delete(apiURL + "orders/deleteorder", {data: {id: id}}).then(() => {
            setRerender(!rerender);
        });
    }

    React.useEffect(async () => {
        const res = await allOrders();
        if (res) {
            setOrders(res.data);
        }
    }, [rerender])

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">ZIP / Postal Code</TableCell>
                            <TableCell align="right">Order ID</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders ? orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.zip}</TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        onClick={()=>handleCancelOrder(row._id)}
                                        color="inherit"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : ""}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}
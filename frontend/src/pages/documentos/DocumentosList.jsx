import { Button, Grid } from "@mui/material";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from '../../data'
import { Link } from "react-router-dom";


export default function DocumentosList() {

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
            item
            style={{ height: '100vh', width: '100vw' }}
        >
            {/* <Button
                variant="contained"
                component="label"
                style={{marginTop: '25px'}}
                >
                Upload File
                <input
                    type="file"
                    hidden
                    />
            </Button> */}

            <Link to='/base/documentos/create'>
                <Button
                    style={{ marginTop: '25px' }}
                    variant="contained"

                >Agregar</Button>
            </Link>

            <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ marginTop: '25px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                            <TableCell align="right">Tipo</TableCell>
                            <TableCell align="right">Owner</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow
                                key={row.nombre}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.nombre}
                                </TableCell>
                                <TableCell align="right">{row.fecha}</TableCell>
                                <TableCell align="right">{row.tipo}</TableCell>
                                <TableCell align="right">{row.owner}</TableCell>
                                <TableCell align="right"><Button>Descargar</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
import CustomForm from '../components/CustomForm'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { Card, Typography, Grid, CardContent, Box } from '@mui/material'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Loading from '../components/Loading'
import { createOwnerAsync, editOwnerAsync, deleteOwnerAsync, listOwnerAsync } from '../features/ownerSlice'
import { Link } from 'react-router-dom'

export default function Owners() {


    const dispatch = useDispatch()

    const { owners, loading } = useSelector(state => state.ownerReducer)

    const handleDelete = (id) => {
        // dispatch(deleteOwner(id))
    }

    const initialValues = {
        nombre: '',
    }

    useEffect(() => {
        dispatch(listOwnerAsync())
    }, [])


    console.log(owners)
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', minWidth: '100%' }}
        >


            <h1 style={{ marginBottom: '30px' }}>Owners</h1>

            <CustomForm
                name='nombre'
                label='nombre'
                type='text'
                actionDispatch={createOwnerAsync}
                initialValues={initialValues}
            />

            {
                loading
                    ? <Loading />
                    : <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            owners
                                ? owners.map(item =>
                                    <Card
                                        sx={{ minWidth: 200, bgcolor: 'text.disabled' }}
                                        key={item.nombre}
                                        style={{ margin: '15px', cursor: 'pointer' }}
                                    >
                                        <CardContent
                                            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
                                        >
                                            <Typography variant='h5' color="primary">
                                                {item.nombre}
                                            </Typography>
                                            <Link to={"/api/base/owner/" + item.id}>
                                                <FaEdit
                                                    onClick={() => dispatch(listOwnerDetailAsync(item.id))}
                                                />
                                            </Link>
                                            <FaRegTrashAlt
                                                onClick={() => dispatch(deleteOwnerAsync(item.id))}
                                            />
                                        </CardContent>
                                    </Card>
                                )
                                : null
                        }

                    </Box>
            }
        </Grid>
    )
}
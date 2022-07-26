import CustomForm from '../components/CustomForm'
import { deleteUser, listUserAsync, createUserAsync } from '../features/userSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { Card, Typography, Grid, CardContent, Box } from '@mui/material'
import Loading from '../components/Loading'


export default function Users() {


    const dispatch = useDispatch()


    const initialValues = {
        user_name: '',
        password: '',
        password2: '',
    }

    useEffect(() => {
        dispatch(listUserAsync())
    }, [])
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', minWidth: '100%' }}
        >
            <h1 style={{ marginBottom: '30px', marginTop: '50px' }}>Users</h1>
            <CustomForm
                initialValues={initialValues}
                actionDispatch={createUserAsync}
            />            
        </Grid>
    )
}
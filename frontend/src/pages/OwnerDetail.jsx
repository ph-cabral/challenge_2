import CustomForm from '../components/CustomForm'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Loading from '../components/Loading'
import { listOwnerDetailAsync } from '../features/ownerDetailSlice'
import { useParams } from 'react-router-dom';

export default function OwnerDetail() {

    const params = useParams()

    const dispatch = useDispatch()

    const { owner, loading } = useSelector(state => state.ownerDetailReducer)

    const initialValues = {
        nombre: owner.nombre || ''
    }

    useEffect(() => {
        dispatch(listOwnerDetailAsync())
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
            <h1 style={{ marginBottom: '30px' }}>Owners</h1>
            {
                loading
                    ? <Loading />
                    : <CustomForm
                        name='nombre'
                        label='nombre'
                        type='text'
                        // actionDispatch={createOwnerAsync}
                        initialValues={initialValues}
                    />
            }

        </Grid>
    )
}
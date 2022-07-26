import Inputs from './Inputs'
import { Formik, Form } from 'formik'
import { useDispatch } from "react-redux"
import { Grid, Button } from '@mui/material';
import { createUserAsync } from '../features/userSlice'
import { string, object } from 'yup'



export default function CustomForm({ initialValues, actionDispatch }) {

    const dispatch = useDispatch()

    const validationSchema = object({
        user_name: string().required("Obligatorio"),
        password: string().required("Obligatorio"),
    })

    const handleSubmit = (value) => {
        dispatch(actionDispatch(value))
        console.log(value)
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justify='center'
                    item
                >
                    <Inputs name='user_name' label='nombre' type='text' />
                    <Inputs name='password' label='password' type='password' />
                    <Button style={{ margin: 'auto' }} variant="contained" color="primary" type="submit" >
                        Aceptar
                    </Button>
                </Grid>
            </Form>
        </Formik>

    )
}
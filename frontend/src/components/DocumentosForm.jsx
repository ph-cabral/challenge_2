import Inputs from './Inputs'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from "react-redux"
import { Grid, Button } from '@mui/material';
import { createUserAsync } from '../features/userSlice'
import { string, number, object } from 'yup'
import { TextareaAutosize } from '@mui/material';


const inputs = [{'inputselect': true, 'name':'nombre', 'label': 'Elegir Tipo', 'campos': ['Público', 'Privado','Draft']}
]
export default function DocumentosForm({ title, initialValues, actionDispatch }) {



    const dispatch = useDispatch()

    const { owners, loading } = useSelector(state => state.ownerReducer)

    const validationSchema = object({
        nombre: string().required("Obligatorio"),
        password: string().required("Obligatorio"),
        owner: string().required("Obligatorio"),
        tipo: string().typeError('Elegir opcion').required("Obligatorio"),

    })

    const handleSubmit = (value) => {
        dispatch(actionDispatch(value))
        console.log(value)
    }
    return (
        <Grid container alignItems="center" justify="center" direction="column" sx={{ mt: 5 }}>
            <h1>{title}</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <Grid
                        sx={{ mt: 2 }}
                        container
                        direction='column'
                        alignItems='center'
                        justify='center'
                        item
                    >
                        <Inputs values={inputs} loading={loading} />
                        {/* <Inputs name='user_name' label='Nombre' type='text' campos={['Público', 'Privado', 'Draft']} inputselect />
                        <Inputs name='tipo' label='Elegir un tipo' type='text' campos={['owner1', 'owner2', 'owner3']} inputselect />
                        <Inputs name='password' label='Password' type='password' />
                        <Inputs name='owner' label='Owner' type='text' sx={{ minHeight: 80 }} />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Minimum 3 rows"
                            style={{ width: 235 }}
                        /> */}
                        <Button  variant="contained" color="primary" type="submit" sx={{ mt: 4 }}>
                            Aceptar
                        </Button>
                    </Grid>
                </Form>
            </Formik>
        </Grid>

    )
}
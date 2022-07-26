import { useField } from "formik";
import styled from "styled-components";
import { TextField, Grid, FormControl, Select, MenuItem } from '@mui/material'
import ValidationMessage from "./ValidationMessage";
import { InputLabel } from "@mui/material";
import Loading from "./Loading";




const InputContainer = styled.div`
    position: relative;
`

const ValidationMessageContainer = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
`


export default function Inputs({ loading, values, campos, label, type, ...props }) {
    console.log(values)
    const [field, meta] = useField(props)

    return (
        <InputContainer>
            <Grid container alignItems="center" justify="center" direction="column">
                {
                    loading
                        ? <Loading />
                        : values
                            ? values.map(items => {
                                items.inputselect
                                    ? <Grid item >
                                        <FormControl sx={{ m: 1, minWidth: 235 }}>
                                            <InputLabel id={items.label}>{items.label}</InputLabel>
                                            <Select
                                                labelId={items.label}
                                                id="demo-simple-select"
                                                label={items.label}
                                                name={items.name}

                                            >
                                                {
                                                    items.campos.map(row => (
                                                        <MenuItem key={row} value={row}>
                                                            {row}
                                                        </MenuItem>

                                                    ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    : <Loading />

                                // <Grid item>
                                //     <TextField
                                //         id="name-input"
                                //         name="name"
                                //         label={label}
                                //         type={type}
                                //         {...field}{...props}
                                //         style={{ margin: '15px' }}
                                //     />
                                // </Grid>
                            }
                            )
                            : <Loading />}
                {/* {
                    inputselect
                        ? <Grid item>
                            <FormControl sx={{ m: 1, minWidth: 235 }}>
                                <InputLabel id="select-label">{label}</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="demo-simple-select"
                                    label="Elegir un tipo"

                                >
                                    {
                                        campos.map(row => (
                                            <MenuItem key={row} value={row}>
                                                {row}
                                            </MenuItem>

                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Grid>
                        : <Grid item>
                            <TextField
                                id="name-input"
                                name="name"
                                label={label}
                                type={type}
                                {...field}{...props}
                                style={{ margin: '15px' }}
                            />
                        </Grid>
                } */}
                {
                    meta.touched && meta.error
                        ? (
                            <ValidationMessageContainer>
                                <ValidationMessage
                                    onlyIcon
                                >{meta.error}</ValidationMessage>
                            </ValidationMessageContainer>
                        )
                        : null
                }
            </Grid>
        </InputContainer >
    )
}

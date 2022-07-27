import styled from 'styled-components'

import Loader from '../components/Loading'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40vh;
`

export default function Home() {
  
    return (
        <Container>
            <h1>
                Bienvenidos 
            </h1>
        </Container>
    )
}



import React, { useEffect } from 'react'
import styled from 'styled-components'

import Loader from '../components/Loading'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40vh;
`

export default function Home() {
    // const dispatch = useDispatch()
    // const productList = useSelector(state => state.productList)
    // const { error, loading, products, page, pages } = productList

    // let keyword = history.location.search

    // useEffect(() => {
    //     dispatch(listProducts(keyword))

    // }, [dispatch, keyword])

    return (
        <Container>
            <h1>
                Bienvenidos 
            </h1>
        </Container>
    )
}



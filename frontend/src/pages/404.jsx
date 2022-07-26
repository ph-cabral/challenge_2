import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const IMAGE = styled.div`
    background-image: url(https://salesianas.org/wp-content/uploads/2018/01/construccion.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
`
const Fail = () => {
  return (<>
    <Link to='/'>
      <IMAGE />
    </Link>

  </>
  )
}

export default Fail
import React from 'react'
import styled from 'styled-components'
import * as IoIcons from 'react-icons/io5'

const Container = styled.div`
    display: flex;    
    align-items: center;
    color: #b12323;
    z-index: 1;
`

const AlertIconContainer = styled.div`
    font-size: 20px;
`
const AlertTextContainer = styled.div`
    margin: 0 0 -.3rem .3rem;
    transition: all 0.5s ease-in-out;

    @media (max-width: 500px) {
        font-size: 0;
        transition: all 0.5s ease-in-out;
    }
`

const ValidationMessage = ({ children, onlyIcon }) => {
    return (
        <Container>
            <AlertIconContainer>
                <IoIcons.IoAlertCircleSharp />
            </AlertIconContainer>
            {!onlyIcon &&
                <AlertTextContainer>
                    {children}
                </AlertTextContainer>
            }
        </Container>
    )
}

export default ValidationMessage

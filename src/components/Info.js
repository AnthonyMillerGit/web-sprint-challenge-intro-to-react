import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const InfoCard = styled.div`
    border: 1px solid black;
    background-color:black;
    color:white;
    margin:1rem;
    padding:2%;

`




const Info = props => {
    
    const {stats} = props

    return (
        <InfoCard>
            <p>Name:{stats.name}</p>
            <p>Height:{stats.height}</p>
            <p>Mass:{stats.mass}</p>
        </InfoCard>
    )
}



export default Info
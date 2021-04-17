import React from 'react'
import styled from 'styled-components'
import Character from './Character'


const CardDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const Cards = (props) => {
    
    const {swCharacters} = props
    console.log(swCharacters)
    return (
        <CardDiv>
            {swCharacters.map(whatever => {
                return (
                    <Character
                        key={whatever.id}
                        person={whatever}
                    />
                )
            })}
        </CardDiv>
    )
}


export default Cards
import React from 'react'
import styled from 'styled-components'
import Character from './Character'


const Cards = (props) => {
    
    const {swCharacters} = props
    console.log(swCharacters)
    return (
        <div>
            {swCharacters.map(whatever => {
                return (
                    <Character
                        key={whatever.id}
                        person={whatever}
                    />
                )
            })}
        </div>
    )
}


export default Cards
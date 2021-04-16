// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Info from '../components/Info'

const Character = (props) => {

    const {person} = props

    return (
        <div>
            <h1>Hello World i am {person.name}</h1>
            <p>i was born on {person.birth_year}</p>
                <Info stats={person}/>
        </div>
    )
}


export default Character
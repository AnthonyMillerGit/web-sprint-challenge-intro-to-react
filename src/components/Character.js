// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Info from '../components/Info'

const CharDiv = styled.div`
    border:1px dashed black;
    width:25%;
    margin:1rem;
    padding:1rem;
`
const HelloWorld = styled.h1`
    border:1px solid purple;
    background-color:cadetblue;
`
const Birth = styled.p`
    background-color:#fad586;
    &:hover {
        background-color:#96bb7c;
    }
`



const Character = (props) => {

    const {person} = props

    return (
        <CharDiv>
            <HelloWorld>Hello World i am {person.name} </HelloWorld>
            <Birth>i was born on {person.birth_year}</Birth>
                <Info stats={person}/>
        </CharDiv>
    )
}


export default Character
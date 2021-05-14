// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Info from '../components/Info'

const CharDiv = styled.div`
    border:3px solid black;
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
            <HelloWorld>Hello World I Am {person.name} </HelloWorld>
            <Birth>I Was Born On {person.birth_year}</Birth>
                <Info stats={person}/>
        </CharDiv>
    )
}


export default Character
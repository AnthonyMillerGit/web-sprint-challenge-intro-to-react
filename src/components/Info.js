import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Info = props => {
    
    const {stats} = props

    return (
        <div>
            <p>Name:{}</p>
            <p>Height:{}</p>
            <p>Mass:{}</p>
        </div>
    )
}



export default Info
import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Info = props => {
    
    const {stats} = props

    return (
        <div>
            <p>Name:{stats.name}</p>
            <p>Height:{stats.height}</p>
            <p>Mass:{stats.mass}</p>
        </div>
    )
}



export default Info
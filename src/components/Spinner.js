import React from 'react'
import loadingGif from '../spinner.gif'

export default function Spinner() {
    return (
        <div>
            <img src={loadingGif} alt="...loading"/>
        </div>
    )
}

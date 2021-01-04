import React from 'react'
import Player from './Player'
function Drumset({keys , data , isDark}) {
    return (
        <div className='drumset'>
            {
                keys.map( key => {
                    return (
                       <Player keyStroke = {key} data = {data} code = {data[key].data_key} isDark = {isDark} key = {data[key].data_key}/>
                    )
                })
            }
        </div>
    )
}

export default Drumset

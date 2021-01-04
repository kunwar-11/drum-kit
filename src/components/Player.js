import React , {useRef , useEffect}from 'react'

function Player({keyStroke , data , code , isDark}) {
    const audioRef = useRef(null);
    const  audioPlayHandler = async () => {
        audioRef.current.currentTime = 0
        await audioRef.current.play()
    }
    const keyPressHandler = async (e) => {
        if(e.keyCode === code) {
           
            audioRef.current.currentTime = 0
            await audioRef.current.play()
        }
        if(e.key.toUpperCase() === keyStroke) {
            audioRef.current.currentTime = 0
            await audioRef.current.play()
        }
    }
    useEffect(() => {
        window.addEventListener('keypress',keyPressHandler)
    })
    
    return (

            <div className = {`${isDark ? 'playerDark' : 'player'}`} onClick = {audioPlayHandler} >{keyStroke}
            <audio src={data[keyStroke].audio} ref = {audioRef}></audio>
            </div>

        
    )
}

export default Player

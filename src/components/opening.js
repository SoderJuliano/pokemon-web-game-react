import sample from '../media/pkmvideo.mp4';
import '../App.css'
import React, { useState } from 'react';
import {GoUnmute} from "react-icons/go"
import {GoMute} from 'react-icons/go'

const Abertura = () =>{

    const [muted, unmute] = useState(true)

    const main = ()=>{
        
        const mute = () =>{
            if(muted===true){
                return (<GoMute  
                        onClick={()=>{unmute(false)}}
                        size='40px'
                        className='unmute-opening'
                        />)
            }else{
                return ( 
                    <GoUnmute
                    onClick={()=>{unmute(true)}}
                    size='40px'
                    className='unmute-opening'
                    />)
            }
        }
        return(
            <div>
                <video  className='videoTag' autoPlay={true} loop muted={muted}>
                    <source src={sample} type='video/mp4' />
                </video>
               {mute()}
            </div>
            
        )
    }
    const render=()=>{
        return main()
    }
    return render()
}
export {Abertura}
import sample from '../media/pkmvideo.mp4';
import '../App.css'
import { useState } from 'react';
const Abertura = () =>{

    const [muted, unmute] = useState(true)

    const main = ()=>{
        
        
        return(
            <div>
                <video onClick={()=>{unmute(false)}} className='videoTag' autoPlay={true} loop muted={muted}>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            
        )
    }
    const render=()=>{
        return main()
    }
    return render()
}
export {Abertura}
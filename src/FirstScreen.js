import {Battlefild} from './components/battlefield'
import React, {useState} from 'react'
import { Abertura } from './components/opening'

const First = () =>{

    const [keep, skip] = useState(0)

    const keeping = () =>{
        if(keep == 0){
            return <Abertura />   
        }else{
            document.getElementsByClassName('presstoskip')[0].style.display = 'none'
            return <Battlefild />
        }
    }
    const main = () =>{

        return(
            <div>
                {keeping()}
                <p onClick={()=>{skip(1)}} className="presstoskip">Click Here For Skip</p>
                <p className="message">Are you ready?</p>
            </div>
        )
    }

    return main()
}
export {First}
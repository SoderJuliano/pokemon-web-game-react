import React, {Component, useState} from 'react'
import "../App.css"

const Attacks = () =>{

    const main =()=>{

        return(
            <div>
                <dv className="attack-container">
                    <button>ThunderShock</button>
                    <button>Agility</button>
                    <button>Tackle</button>
                </dv>
            </div>
        )
    }
    const render = () =>{
        return main()
    }
    return render()
}
export {Attacks}
import React, {Component, useState} from 'react'
import pikachu from '../img/pikachu.png'
import pikachu2 from '../img/pikachuback2.png'
import { Attacks } from './attcks'
import "../App.css"

const Battlefild = () => {

    const [shift, setShift] = useState(0)

    const main = () => {
        return(
            <div>
            <div className="field">
                <div className="pokemon">
                    <div className="talk2">
                        <p>My turn!</p>
                    </div>
                    <img src={pikachu} alt="pokemon" />
                </div>
                <div className="center"></div>
                <div className="pokemon2">
                    <img src={pikachu2} alt="" />
                    <div className="talk">
                        <p>My turn!</p>
                    </div>
                    <Attacks />
                </div>
                </div>
            </div>
        )
        
    }
    const render = () => {
        return main()
    }
    return render()
}
export {Battlefild}
import React, {Component, useState} from 'react'
import pikachu from '../img/pikachu.png'
import pikachu2 from '../img/pikachuback2.png'
import { Attacks } from './attcks'
import "../App.css"
import useSound from 'use-sound';
import sayPikachu from '../media/pikachu.mp3';
import thundershock from '../media/pikachuThundershock.gif'
import agility from '../media/pikachuAgility.gif'
import pikachuTacle from '../media/pikachuTacle.gif'

const Battlefild = () => {

    const [pikachuSay] = useSound(sayPikachu);
    
    const [shift, setShift] = useState(0)
    const [attack, setAttack] = useState('none')

    const action = ()=>{
        if(attack==='thundershock'){
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={thundershock} alt='thundeshock!!' />
        }else if(attack==='agility'){
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={agility} alt="agility!!" />
        }else if(attack==='tackle'){
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={pikachuTacle} alt="tacke!!" />
        }else{
            return <span>wainting input</span>
        }
    }
    const updatePageState = (state) => {
        setAttack(state);
    } 
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
                <div className="center">
                    {action()}
                </div>
                <div className="pokemon2">
                    <img onClick={pikachuSay} src={pikachu2} alt="" />
                    <div className="talk">
                        <p>My turn!</p>
                    </div>
                    <Attacks triggerParentUpdate = {updatePageState}/>
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
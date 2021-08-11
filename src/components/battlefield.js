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
import themesong from '../media/pkmsong.mp3'

const Battlefild = () => {

    const [pikachuSay] = useSound(sayPikachu)
    const [pokemon, setStatus] = useState({
        name: 'pikachu',
        id: 25,
        type: 'eletric',
        level: 100,
        HP: 2110,
        Life: 2110,
        SpA: 199,
        SpD: 136,
        Spe: 206,
        Atk: 131,
        Def: 117
    })

    document.getElementsByClassName('message')[0].style.display = 'block'
    const renderPokemon = () =>{

        if(pokemon.name==='pikachu'){
            return(
                <div className="pokemon2">
                    <img onClick={pikachuSay} src={pikachu2} alt="" />
                    <div className="talk">
                        <p>My turn!</p>
                    </div>
                   {myTurn()}
                </div>
            )
        }
    }
    
    
    const [shift, setShift] = useState(2)
    const [attack, setAttack] = useState('none')

    const myTurn = () =>{
        if(shift==2){
            return  <Attacks triggerParentUpdate = {updatePageState}/>
        }else{

        }
    }

    const action = ()=>{
        if(attack==='thundershock'){
            document.getElementsByClassName('message')[0].style.display = 'block'
            document.getElementsByClassName('message')[0].textContent = 'Thundershock pikachu!'
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={thundershock} alt='thundeshock!!' />
        }else if(attack==='agility'){
            document.getElementsByClassName('message')[0].style.display = 'block'
            document.getElementsByClassName('message')[0].textContent = 'Agility now!'
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={agility} alt="agility!!" />
        }else if(attack==='tackle'){
            document.getElementsByClassName('message')[0].style.display = 'block'
            document.getElementsByClassName('message')[0].textContent = 'Tackle!'
            document.getElementsByClassName('pokemon2')[0].style.display = 'none'
            return <img className='attackgif' src={pikachuTacle} alt="tacke!!" />
        }else{
            return <span>wainting your moves</span>
        }
    }
    const updatePageState = (state) => {
        setAttack(state);
    } 
    const main = () => {
        return(
            <div>
                <audio controls autoplay='true' muted={false}>
                    <source src={themesong} type="audio/ogg" />
                </audio>
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
                    {renderPokemon()}
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
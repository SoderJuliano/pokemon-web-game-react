import React, {Component, useState} from 'react'
import pikachu from '../img/pikachu1.gif'
import pikachu2 from '../img/pikachu2.gif'
import { Attacks } from './attcks'
import "../App.css"
import useSound from 'use-sound';
import sayPikachu from '../media/pikachu.mp3';
import thundershock from '../media/pikachuThundershock.gif'
import agility from '../media/pikachuAgility.gif'
import pikachuTacle from '../media/pikachuTacle.gif'
import themesong from '../media/pkmsong.mp3'
import Hit from '../media/explosion.gif'
import buff from '../img/arrowup.gif'

const Battlefild = () => {

    const [pikachuSay] = useSound(sayPikachu)
    const [pokemon, setStatus] = useState({
        Name: 'pikachu',
        Id: 25,
        Type: 'eletric',
        Level: 100,
        HP: 2110,
        Life: 2110,
        SpA: 199,
        SpD: 136,
        Spe: 206,
        Atk: 131,
        Def: 117,
        Gender: 'male'
    })

    const [hit , sethit] = useState(0)
    document.getElementsByClassName('message')[0].style.display = 'block'
    const renderPokemon = () =>{

        if(pokemon.Name==='pikachu'){
            return(
                <div className="pokemon2">
                    <img onClick={pikachuSay} src={pikachu2} alt="" />
                    <div className="talk">
                        <p>My turn!</p>
                    </div>
                    <img className='buff' src={buff} alt='buffed' />
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
            <div className="field">
                <div className="pokemon">
                    <div className="talk2">
                        <p>My turn!</p>
                    </div>
                    <img src={pikachu} alt="pokemon" />
                    <img className='hitpkm1' src={Hit} alt="ought!" />
                </div>
                <div className="center">
                    {action()}
                </div>
                    {renderPokemon()}
            </div>
            <audio controls autoplay='true' muted={false}>
                    <source src={themesong} type="audio/ogg" />
            </audio>
        </div>
        )
        
    }
    const render = () => {
        return main()
    }
    return render()
}
export {Battlefild}
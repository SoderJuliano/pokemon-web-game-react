import React, {Component, useState} from 'react'
import "../App.css"
import useSound from 'use-sound';
import sayAttackPikachu from '../media/pikachu-attack.mp3'
import sayThunderAttackPikachu from '../media/pikachuThunderAttack.mp3'
import poiin from "../media/poiin.m4a"

const Attacks = ({triggerParentUpdate, pokemonNewStatus, mypokemon, pokemonenemy}) =>{
    console.log(pokemonenemy)
    const [bntsonud] = useSound(poiin)
    const [pikachuAttacksay] = useSound(sayAttackPikachu)
    const [pikachuThundersay] = useSound(sayThunderAttackPikachu)
    const [hadchanged, setchanged] = useState(false)

    const newLife = () =>{
        let att = 0;
        //console.log(mypo)
        if(attacking ==='thundershock'){
            setchanged(false)
            att = (mypokemon.SpA+mypokemon.Spe)+80
        } if(hadchanged==false && attacking ==='agility'){
            mypokemon.Spe += 100
            console.log("speed -> "+mypokemon.Spe)
            setchanged(true)
        } if(attacking === 'tackle'){
            setchanged(false)
            att = (mypokemon.Atk+mypokemon.Spe)+40
        }
        console.log("att"+att)
        return att
    }
    const showBtn = () =>{
        if(hadchanged===true){

        }else{
            return  <button onMouseOver={bntsonud} onMouseDown={pikachuAttacksay} onClick={()=> setattack('agility')}>Agility</button>
        }
    }
    const attack = () =>{
        if(attacking==='thundershock'){
            triggerParentUpdate('thundershock')  
            setTimeout(()=>{
                document.getElementsByClassName('hitpkm1')[0].style.display = 'block'
                pokemonNewStatus(newLife())
            },2500)
            setTimeout(()=>{
                document.getElementsByClassName('hitpkm1')[0].style.display = 'none'
            },3500)
            
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('message')[0].style.display = 'none'
            document.getElementsByClassName('pokemon2')[0].style.display = 'flex'
            },3200)
        }else if(attacking==='agility'){
            newLife()
            triggerParentUpdate('agility')  
            setTimeout(()=>{
                document.getElementsByClassName('buff')[0].style.display = 'block'
            },1000)
            setTimeout(()=>{
                document.getElementsByClassName('buff')[0].style.display = 'none'
            },2100)
            setTimeout(()=>{
                setattack('none')
            document.getElementsByClassName('message')[0].style.display = 'none'
            document.getElementsByClassName('pokemon2')[0].style.display = 'flex'
            },1000)
        }else if(attacking==='tackle'){
            triggerParentUpdate('tackle')  
            setTimeout(()=>{
                document.getElementsByClassName('hitpkm1')[0].style.display = 'block'
                pokemonNewStatus(newLife())
            },2000)
            setTimeout(()=>{
                document.getElementsByClassName('hitpkm1')[0].style.display = 'none'
            },3100)
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('message')[0].style.display = 'none'
            document.getElementsByClassName('pokemon2')[0].style.display = 'flex'
            },2000)
        }
        else{
            triggerParentUpdate('none') 
        }
    }
    const [attacking, setattack] = useState('none')
    const main =()=>{   
        return(
            <div>
                <dv className="attack-container">
                    <button onMouseOver={bntsonud} onMouseDown={pikachuThundersay} onClick={()=> setattack('thundershock')}>ThunderShock</button>
                   {showBtn()}
                    <button onMouseOver={bntsonud} onMouseDown={pikachuAttacksay} onClick={()=> setattack('tackle')}>Tackle</button>
                </dv>
                {attack()}
            </div>
        )
    }
    const render = () =>{
        return main()
    }
    return render()
}
export {Attacks}
import React, {Component, useState} from 'react'
import IronTail from '../media/ironTail.gif'
import thundershock from '../media/pikachuThundershock.gif'
import pikachuTacle from '../media/pikachuTacle.gif'
import '../App.css'

const EmenyAttack = ({pokemon, update, midle}) =>{
    let list = [];
   if(pokemon.Name==='Pikachu'){
    list = ['thundershock', 'tackle', 'ironTail'];
   } 

    const randomAttack = () => {
        
        sessionStorage.setItem("damage", "false")
            const power = list[Math.floor(Math.random() * list.length)]
            if(power==='thundershock'){
                sessionStorage.setItem("damage", 'true')
                update(pokemon.SpA+pokemon.Spe+80)
                midle("Emeny "+pokemon.Name+" attack!")
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
                 //return (<img id='thundeshock' className='attackgifE' src={thundershock} alt='thundeshock!!' />)
            }else if(power==='tackle'){
                sessionStorage.setItem("damage", 'true')
                update(pokemon.Atk+pokemon.Spe+40)
                midle("Emeny "+pokemon.Name+" attack!")
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
                   //return  (<img id='tackle' className='attackgifE' src={pikachuTacle} alt='tackle' />)
            }else if(power==='ironTail'){
                sessionStorage.setItem("damage", 'true')
                update(pokemon.SpA+pokemon.Spe+75)
                midle("Emeny "+pokemon.Name+" attack!")
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
               //return (<img id='ironTail'  className='attackgifE' src={IronTail} alt='ironTail' />)
            }else{
                update(0)
                sessionStorage.setItem("damage", 'false')
            }
    }

    const main = () =>{
        return(
        <div>
            {randomAttack()}
        </div>
        )

    }
    const render=()=>{
        return(
           sessionStorage.getItem("damage")==="true"? main(): ''
        )
    }
    return render()
}
export {EmenyAttack};
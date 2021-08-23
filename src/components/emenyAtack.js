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
            const power = list[Math.floor(Math.random() * list.length)]
            console.log(" the power is " +power)
            if(power==='thundershock'){
                update(pokemon.SpA+pokemon.Spe+80)
                midle(pokemon.SpA+pokemon.Spe+80)
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
                 return (<img id='thundeshock' className='attackgifE' src={thundershock} alt='thundeshock!!' />)
            }else if(power==='tackle'){
                update(pokemon.Atk+pokemon.Spe+40)
                midle(pokemon.Atk+pokemon.Spe+40)
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
                   return  (<img id='tackle' className='attackgifE' src={pikachuTacle} alt='tackle' />)
            }else if(power==='ironTail'){
                update(pokemon.SpA+pokemon.Spe+75)
                midle(pokemon.SpA+pokemon.Spe+75)
                setTimeout(()=>{
                    midle("Your time!")
                },3000)
               return (<img id='ironTail'  className='attackgifE' src={IronTail} alt='ironTail' />)
            }else{
                update(0)
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
           main()
        )
    }
    return render()
}
export {EmenyAttack};
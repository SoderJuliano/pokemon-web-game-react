import React, {Component, useState} from 'react'
import IronTail from '../media/ironTail.gif'
import thundershock from '../media/pikachuThundershock.gif'
import pikachuTacle from '../media/pikachuTacle.gif'
import '../App.css'

const EmenyAttack = ({pokemon, update}) =>{
    let list = [];
   if(pokemon.Name==='Pikachu'){
    list = ['thundershock', 'tackle', 'ironTail'];
   } 

    const randomAttack = () => {
            const power = list[Math.floor(Math.random() * list.length)]
            console.log(" the power is " +power)
            if(power==='thundershock'){
                update(100)
                 return (<img id='thundeshock' className='attackgifE' src={thundershock} alt='thundeshock!!' />)
            }else if(power==='tackle'){
                update(100)
                   return  (<img id='tackle' className='attackgifE' src={pikachuTacle} alt='tackle' />)
            }else if(power==='ironTail'){
                update(100)
               return (<img id='ironTail'  className='attackgifE' src={IronTail} alt='ironTail' />)
            }else{
               
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
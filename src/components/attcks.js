import React, {Component, useState} from 'react'
import "../App.css"
import useSound from 'use-sound';
import sayAttackPikachu from '../media/pikachu-attack.mp3'
import sayThunderAttackPikachu from '../media/pikachuThunderAttack.mp3'

const Attacks = ({triggerParentUpdate}) =>{

    const [pikachuAttacksay] = useSound(sayAttackPikachu)
    const [pikachuThundersay] = useSound(sayThunderAttackPikachu)

    const attack = () =>{
        if(attacking==='thundershock'){
            triggerParentUpdate('thundershock')  
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('pokemon2')[0].style.display = 'flex'
            },3200)
        }else if(attacking==='agility'){
            triggerParentUpdate('agility')  
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('pokemon2')[0].style.display = 'flex'
            },1000)
        }else if(attacking==='tackle'){
            triggerParentUpdate('tackle')  
            setTimeout(()=>{setattack('none')
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
                    <button onMouseDown={pikachuThundersay} onClick={()=> setattack('thundershock')}>ThunderShock</button>
                    <button onMouseOver={pikachuAttacksay} onClick={()=> setattack('agility')}>Agility</button>
                    <button onMouseDown={pikachuAttacksay} onClick={()=> setattack('tackle')}>Tackle</button>
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
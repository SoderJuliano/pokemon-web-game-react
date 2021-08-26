import React, {useState} from 'react'
import "../App.css"
import useSound from 'use-sound';
import sayAttackPikachu from '../media/pikachu-attack.mp3'
import sayThunderAttackPikachu from '../media/pikachuThunderAttack.mp3'
import poiin from "../media/poiin.m4a"

const Attacks = ({shift, triggerParentUpdate, pokemonNewStatus, mypokemon, emenyLife}) =>{
    const [bntsonud] = useSound(poiin)
    const [pikachuAttacksay] = useSound(sayAttackPikachu)
    const [pikachuThundersay] = useSound(sayThunderAttackPikachu)
    const [hadchanged, setchanged] = useState(false)
    let canhit = sessionStorage.getItem('canhit')
   // console.log('myturn '+shift+" canhit "+canhit)
    
        const newLife = () =>{
            let att = 0;
           // console.log("new life "+attacking)
            if(canhit){
                if(attacking ==='thundershock' && shift===2){
                    setchanged(false)
                    att = (mypokemon.SpA+mypokemon.Spe)+80
                   // console.log("attaque > "+att)
                    setattack('none')
                    return att
                } if(hadchanged===false && attacking ==='agility' && shift===2){
                    mypokemon.Spe += 100
                   // console.log("speed -> "+mypokemon.Spe)
                    setchanged(true)
                   // console.log("attaque > "+att)
                    setattack('none')
                    return att
                } if(attacking === 'tackle' && shift===2){
                    setchanged(false)
                    att = (mypokemon.Atk+mypokemon.Spe)+40
                   // console.log("attaque > "+att)
                    setattack('none')
                    return att
                }else{
                    return 0;
                }
            }
            return 0
            
        }
    const showBtn = () =>{
        if(hadchanged===true){

        }else{
            return  <button onMouseOver={bntsonud} onMouseDown={pikachuAttacksay} onClick={()=> hitEnemy('agility')}>Agility</button>
        }
    }
    const hitEnemy = (event) =>{
       sessionStorage.setItem('canhit', true);
        setattack(event)
    }
    const attack = () =>{
        if(attacking==='thundershock'){
            triggerParentUpdate('thundershock')  
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('message')[0].style.display = ''
            document.getElementsByClassName('pokemon2')[0].style.display = 'opacity: 100%'
            if(shift===2){pokemonNewStatus(newLife())}
            setattack('none')
            },3200)
        }else if(attacking==='agility'){
            sessionStorage.setItem("attack", "agility")
            triggerParentUpdate('agility')  
            setTimeout(()=>{
                if(mypokemon.Life>0){
                    document.getElementsByClassName('buff')[0].style.display = 'block'
                }
               
            },1000)
            setTimeout(()=>{
                if(mypokemon.Life>0){
                    if(mypokemon.Life>0){
                        sessionStorage.setItem("attack", "")
                        document.getElementsByClassName('buff')[0].style.display = 'none'
                    }
                }
            },2100)
            setTimeout(()=>{
                if(shift===2){pokemonNewStatus(newLife())}
                setattack('none')
                document.getElementsByClassName('message')[0].style.display = ''
                document.getElementsByClassName('pokemon2')[0].style.display = 'opacity: 100%'
            },1000)
            setTimeout(()=>{
                setattack('none')
            }, 3300)
        }else if(attacking==='tackle'){
            triggerParentUpdate('tackle')  
            setTimeout(()=>{setattack('none')
            document.getElementsByClassName('message')[0].style.display = ''
            document.getElementsByClassName('pokemon2')[0].style.display = 'opacity: 100%'
            },2000)
            setTimeout(()=>{
                if(shift===2){pokemonNewStatus(newLife())}
                setattack('none')
            }, 3300)
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
                    <button onMouseOver={bntsonud} onMouseDown={pikachuThundersay} onClick={()=> hitEnemy('thundershock')}>ThunderShock</button>
                   {showBtn()}
                    <button onMouseOver={bntsonud} onMouseDown={pikachuAttacksay} onClick={()=> hitEnemy('tackle')}>Tackle</button>
                </dv>
                {attack()}
            </div>
        )
    }
    const render = () =>{
        return emenyLife ? main(): ''
    }
    return render()
}
export {Attacks}
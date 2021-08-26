import React from 'react'
import '../App.css'
import {CgPokemon} from "react-icons/cg"
import {BiMaleSign} from 'react-icons/bi'
import {BiFemaleSign} from 'react-icons/bi'

const PokeStatus = ({pokemon2, pokemon}) =>{
    //console.log(pokemon2.Name)

    let mylife = pokemon2.Life;
    let emenylife = pokemon.Life;

    if(pokemon2.Life<0){
        mylife = "Defeted"
    }
    if(pokemon.Life<0){
        emenylife = "Defeted"
    }
    const gender = (n) =>{
        if(n===1){
            if(pokemon.Gender==='male'){
                return <BiMaleSign className='icon' size='15px'/>
            }else{
                return <BiFemaleSign className='icon' size='15px'/>
            }
        }else{
            if(pokemon2.Gender==='male'){
                return <BiMaleSign className='icon' size='15px'/>
            }else{
                return <BiFemaleSign className='icon' size='15px'/>
            }
        }
        
    }

    const main = () =>{
        return(
            <div>
                <div className='pokestatus1'>
                    <p> {gender(1)}
                        <span>{pokemon.Name}</span>
                        <span>Lv{pokemon.Level}</span>
                    </p>
                    <div className="insidepokestatus">
                        <CgPokemon className='icon' size='15px'/>
                        <span id="pokemonenemyHP">HP - {emenylife}</span>
                    </div>
                </div>
                <div className='pokestatus2'>
                    <p> {gender(0)}
                        <span>{pokemon2.Name}</span>
                        <span>Lv{pokemon2.Level}</span>
                    </p>
                    <div className="insidepokestatus">
                        <CgPokemon className='icon' size='15px'/>
                        <span>HP - {mylife}</span>
                    </div>
                </div>

            </div>
        )

    }
    const render = () =>{
        return(
            main()
        )
    }
    return render()    
}
export {PokeStatus}
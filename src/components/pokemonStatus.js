import React, {useState} from 'react'
import ".App.css"
import {CgPokemon} from "react-icons/cg"
import { render } from 'react-dom/cjs/react-dom.development'
import {BiMaleSign} from 'react-icons/bi'
import {BiFemaleSign} from 'react-icons/bi'

const PokeStatus = ({pokemon}) =>{

    const gender = () =>{
        if(pokemon.Gender==='male'){
            return <BiMaleSign size='10px'/>
        }else{
            return <BiFemaleSign size='10px' />
        }
    }

    const main = () =>{
        return(
            <div>
                <div className='pokestatus'>
                    <p>{pokemon.Name}
                    {gender()}
                    <span>Lv{pokemon.Level}</span>
                    </p>
                    <div className="insidepokestatus">
                        <CgPokemon size='10px' />
                        HP - {pokemon.Life}
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
import pokemonIMG from '../../media/bad-charizard.png'
import './listagem.css'
import React from 'react'

const Card = () => {


    return(
        <div>
            <div className="card">
                <div className="card-top">
                    <img src={pokemonIMG} alt="" />
                </div>
                <div className="card-body">
                    <h2>Name Here</h2>
                    <span>a description</span>
                    <div className="card-bottom">
                        <div className='power'>Power1</div>
                        <div className='power'>Power2</div>
                        <div className='power'>Power3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Card}
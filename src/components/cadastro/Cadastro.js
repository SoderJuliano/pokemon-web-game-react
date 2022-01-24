import React from "react";
import poke from '../../media/bad-charizard.png'
import { Form } from "../forms/Form";
import '../forms/form.css'
import {BsArrow90DegLeft} from 'react-icons/bs'

const Cadastro = () =>{


    const mainCadastro = () =>{
        const main = {
            width: "100vw",
            height: "100vh",
            margin: "-50px",
            padding: "50px",
            display: "flex",
            backgroundColor: "white",
        };
        const halfmain = {
            width: "50%",
            height: "100vh",
        }
        const imgstyle = {
            width: "70%",
            marginTop: "30%"
        }
    const campos = [
        "Nome",
        "HP",
        "Atk",
        "Def",
        "SpA",
        "SpD",
        "Spe",
        "type"
    ]
    const voltaricon = {
        position: "absolute",
        left: "10px"
    }
        return(
            <div style={main}>
                <div style={halfmain}>
                    <div  style={voltaricon}>
                        <BsArrow90DegLeft fontSize={"40px"}/>Voltar
                    </div>
                    
                  <Form title="CADASTRO!" campos={campos}/>
                </div>
                <div style={halfmain}>
                    <img className="right-img" style={imgstyle} src={poke} alt="" />
                </div>
            </div>
        )
    }
    return mainCadastro()
}
export {Cadastro}
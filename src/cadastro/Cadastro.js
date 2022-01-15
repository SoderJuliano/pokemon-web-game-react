import react from "react";
import poke from '../media/bad-charizard.png'
import { Form } from "../forms/Form";

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
        "Spe"
    ]
        return(
            <div style={main}>
                <div style={halfmain}>
                  <Form title="CADASTRO!" campos={campos}/>
                </div>
                <div style={halfmain}>
                    <img style={imgstyle} src={poke} alt="" />
                </div>
            </div>
        )
    }
    return mainCadastro()
}
export {Cadastro}
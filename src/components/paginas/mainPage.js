import { useState } from "react"
import { Cadastro } from '../cadastro/Cadastro';
import {Page} from '../listagem/listPage'

const Main = () =>{

    const [state, setState] = useState(2)

    const render = () =>{
        switch (state) {
            case 2:
                return <Cadastro />
                break;
            case 3:
                
                break;
            default:
                return <Page />
                break;
        }
    }
    return(
        <div>
            {render()}
        </div>
    )
}

export {Main}
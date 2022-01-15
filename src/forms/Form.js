import './form.css';
import react, {useState} from 'react';

const Form = (form) =>{

    const main = {
        marginTop: "10px",
        textAlign: "start",
        padding: "50px",
    }
    const input = {
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "2px solid black",
        width: "30%",
        position: "absolute",
        marginTop: "-30px",
        fontSize : "16px",
        backgroundColor: "transparent"
    }
    const action = () => {
        if(form.title=="CADASTRO!"){
           cadastro()
        }
        function cadastro () {
            let pokemon = {
                "name" : document.getElementById("input-"+form.campos[0]).value,
                "hp" : document.getElementById("input-"+form.campos[1]).value,
                "attack" : document.getElementById("input-"+form.campos[2]).value,
                "defence" : document.getElementById("input-"+form.campos[3]).value,
                "super-attack" : document.getElementById("input-"+form.campos[4]).value,
                "super-defence" : document.getElementById("input-"+form.campos[5]).value,
                "speed" : document.getElementById("input-"+form.campos[6]).value
            }
            console.log(pokemon)
        }
    }

    const [dislplay, setDisplay] = useState("")

    const showp = () =>{
        if(dislplay){
            document.getElementById(dislplay).style.opacity = "0"
        }
    }
    const renderarray = () =>{
        let render = []
        for (let index = 0; index < form.campos.length; index++) {
            render.push(<><p id={'p-' + form.campos[index]}>{form.campos[index]}</p><input onBlur={() => {setDisplay('p-' + form.campos[index])}} id={'input-' + form.campos[index]} style={input} type="text" /></>
            )}
        return render;
    }
    return(
        <div style={main}>
            <h1>{form.title}</h1>
           {renderarray()}
           {showp()}
           <button onClick={()=>{action()}}>Cadastrar</button>
        </div>
    )
}
export {Form}
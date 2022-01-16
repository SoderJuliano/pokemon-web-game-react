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
    const primaryButtom = {
        width: "200px",
        padding: "10px",
        backgroundColor: "green",
        borderRadius: "5px"
    }
    const action = () => {
        if(form.title=="CADASTRO!"){
           cadastro()
        }
        function cadastro () {
            let pokemon = {
                "tipo": "grass",
                "nome" : document.getElementById("input-"+form.campos[0]).value,
                "hp" : document.getElementById("input-"+form.campos[1]).value,
                "atk" : document.getElementById("input-"+form.campos[2]).value,
                "def" : document.getElementById("input-"+form.campos[3]).value,
                "spa" : document.getElementById("input-"+form.campos[4]).value,
                "spd" : document.getElementById("input-"+form.campos[5]).value,
                "spe" : document.getElementById("input-"+form.campos[6]).value
            }
            alert(JSON.stringify(pokemon))
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pokemon)
            };
            fetch('http://localhost:8081/pokemons/cadastrar', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
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
            render.push(<div  key={index}><p id={'p-' + form.campos[index]}>{form.campos[index]}</p><input onBlur={() => {setDisplay('p-' + form.campos[index])}} id={'input-' + form.campos[index]} style={input} type="text" /></div>
            )}
        return render;
    }
    return(
        <div style={main}>
            <h1>{form.title}</h1>
           {renderarray()}
           {showp()}
           <button style={primaryButtom} onClick={()=>{action()}}>Cadastrar</button>
        </div>
    )
}
export {Form}
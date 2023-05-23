import { useState } from "react";

const HelloWorld = (props) => {
    
const [texto,setTexto] = useState(false);
const mostrarTexto = () => {
    setTexto(true);
};
    
    return (
        <>
            <h1>Hello {props.textoAgregado} {texto && "(from changed state)"}{props.signoAdmiracion}</h1>
            <button onClick={mostrarTexto}>Click me</button>
        </>
    );
};

export default HelloWorld;
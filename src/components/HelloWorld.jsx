import { useState } from "react";

const HelloWorld = (props) => {
    
const [texto,setTexto] = useState(false);
const ejecutarAccionMostrarOcultar = () => {
    setTexto(!texto);
};
    
    return (
        <>
            <h1>Hello {props.textoAgregado} {texto && "(from changed state)"}{props.signoAdmiracion}</h1>
            <button onClick={ejecutarAccionMostrarOcultar}>Click Me!</button>
        </>
    );
};

export default HelloWorld;
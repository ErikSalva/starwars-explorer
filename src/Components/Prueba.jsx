import React from 'react'
import { useState } from 'react';

const Prueba = () => {
    const [contador, setContador] = useState(0);

    function incrementador(){
        setContador(contador + 1)
    }

    function disminuidor(){
        setContador(contador - 1)
    }

    return (
        <div>
            <h4>{contador}</h4>
            {incrementador}
 
        </div>
    );
}

export default Prueba
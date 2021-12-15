import { useState } from "react";
import Button from "../Button";

const Card =() => {
    
    const [valor, setValor] = useState(0);

    function add() {
        setValor(valor + 1);
    }

    function remove() {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Cabeçalho
            </div>
            <div className="card-body">
                <p className="card-text">Meu Texto no Card</p>
                <Button className="btn btn-success" onClick={add}>
                    Adicionar
                </Button>
                <button type="button" className="btn btn-danger" onClick={remove}>
                    Remover
                </button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;
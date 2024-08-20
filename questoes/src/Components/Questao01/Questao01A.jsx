import Questao01B from "./Questao01B"
//definição via arrow como foi pedido.
const Questao01A = () => {
    const lista = [
        {a:10, b:3, c:7},
        {a:5, b:-3, c:9},
        {a:1, b:9, c:40}
    ]
    //passagem via props do vetor
    return (
        <div>
            <h1>Maior número de cada lista:</h1>
            <Questao01B lista={lista}/>
        </div>
    )
}

export default Questao01A

//essa questão me deu alguns problema sentão utilizei ia no 1b
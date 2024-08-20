const Questao01B = ({ lista }) => {
    // Verifique se 'lista' é um array
    if (!Array.isArray(lista)) {
        return <p>Erro: `lista` não é um array.</p>;
    }
    //map da lista inicial, itera sobre cada indice do verto e verifica o maior numero de cada objeto json
    const maiorDaLista = lista.map(num => Math.max(...Object.values(num)));

    return (
        <div>
            {maiorDaLista.map((maior, index) => (
                <p key={index}>Maior número do objeto {index + 1}: {maior}</p>
            ))}
        </div>
    );
}

export default Questao01B;

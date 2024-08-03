function Results ({cep, rua, bairro, cidade, complemento}) {
    return (
    <main className="main">
        <h2>CEP: {cep}</h2>
        <span>{rua}</span>
        <span>{bairro}</span>
        <span>{cidade}</span>
        <span>Complemento: {complemento}</span>
    </main>
    )
}

export default Results;
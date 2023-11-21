function nomes(props){
    return (
        <div>
            <h1>Olá, {props.nome}!</h1>
            <img src={props.foto}/>
        </div>
    )
}

export default nomes
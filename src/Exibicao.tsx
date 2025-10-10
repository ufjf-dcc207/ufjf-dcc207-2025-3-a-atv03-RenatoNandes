import "./Exibicao.css"

type exibicaoProps = {
    inicio: Date;
    fim: Date;
    cercado: String;
}

export default function Exibicao ({inicio,fim,cercado} : exibicaoProps) {
    return (
        <div className="exibicao">
            <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
            <div className="fim">Encerramento: {fim.toLocaleString()}</div>
            <div className="cercado">Local: {cercado.toLocaleString()}</div>
        </div>
    )

}
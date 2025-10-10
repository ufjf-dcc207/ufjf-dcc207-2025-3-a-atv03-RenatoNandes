import "./Exibicao.css"
import type { ReactNode } from "react";

type exibicaoProps = {
    inicio: Date;
    fim: Date;
    cercado: String;
    children?: ReactNode;
}

export default function Exibicao({ inicio, fim, cercado, children }: exibicaoProps) {
    return (
        <div className="exibicao">
            <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
            <div className="fim">Encerramento: {fim.toLocaleString()}</div>
            <div className="cercado">Local: {cercado.toLocaleString()}</div>
            <div className="animais">{children}</div>
        </div>
    )

}
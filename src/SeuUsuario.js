import Sugestoes from "./Sugestoes"
import Infomacoes from "./Informacoes"


export default function Sidebar(){
    return(
        <div class="sidebar">
                <SeuUsuario
                    imagem="assets/img/catanacomics.svg"
                    usuario="catanacomics"
                    nome="Catana"/>

            <Sugestoes/>

            <Infomacoes/>
            </div>
    )
}


function SeuUsuario(props){
    return(
        <div class="usuario">
            <img src= {props.imagem}/>
            <div class="texto">
                <strong>{props.usuario}</strong>
                {props.nome}
            </div>
        </div>
    )
}
export default function Sugestoes(){
    const sugestoes = [
        {
            imagem:"assets/img/bad.vibes.memes.svg",
            nome:"bad.vibes.memes",
            razao:"segue você"
        },
        {
            imagem:"assets/img/chibirdart.svg",
            nome:"chibirdart",
            razao:"segue você"
        },
        {
            imagem:"assets/img/razoesparaacreditar.svg",
            nome:"razoesparaacreditar",
            razao:"Novo no Instagram"
        },
        {
            imagem:"assets/img/adorable_animals.svg",
            nome:"adorable_animals",
            razao:"Segue você"
        },
        {
            imagem:"assets/img/smallcutecats.svg",
            nome:"smallcutecats",
            razao:"Segue você"
        }
    ]

    return(
            <div class="sugestoes">
                <TextoSugestao/>
                {sugestoes.map((sugestao)=><Sugestao imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao}/>)}
            </div>
    )
}




function Sugestao({imagem, nome, razao}){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div> 
    )
}

function TextoSugestao(){
    return(
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}
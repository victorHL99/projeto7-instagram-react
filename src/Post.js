import Acoes from "./Acoes"
import AcoesFundo from "./AcoesFundo"

export default function Posts(){
    const posts = [
        {
            imagem:"assets/img/meowed.svg",
            nome:"meowed",
            imagemPrincipal:"assets/img/gato-telefone.svg",
            ultimaCurtida:"assets/img/respondeai.svg",
            ultimoCurtiu:"respondeai",
            texto:"outras 101.523 pessoas"
        },
        {
            imagem:"assets/img/barked.svg",
            usuario:"barked",
            imagemPrincipal:"assets/img/dog.svg",
            ultimaCurtida:"assets/img/adorable_animals.svg",
            ultimoCurtiu:"adorable_animals",
            texto:"outras 99.159 pessoas"
        }
    ]

    return(
        <div class="posts">
            {posts.map((post)=> 
            <Post imagem={post.imagem} nome={post.nome} imagemPrincipal={post.imagemPrincipal} ultimaCurtida={post.ultimaCurtida} ultimoCurtiu={post.ultimoCurtiu} texto={post.texto}/>)}
        </div>
    )
}

function Post({imagem, nome, imagemPrincipal, ultimaCurtida, ultimoCurtiu, texto}){
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={imagem} />
                        {nome}
                    </div>
                    <Acoes/>
                    
                </div>

                <div class="conteudo">
                    <img src={imagemPrincipal} />
                </div>

                <div class="fundo">
                    <AcoesFundo/>

                    <div class="curtidas">
                        <img src={ultimaCurtida} />
                        <div class="texto">
                        Curtido por <strong>{ultimoCurtiu}</strong> e <strong>{texto}</strong>
                    </div>
                    </div>
                </div>
            </div>
    )
}

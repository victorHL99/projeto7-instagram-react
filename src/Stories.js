export default function Stories(){

    const stories = [
        {src:"assets/img/9gag.svg", nome:"9gag"},
        {src:"assets/img/meowed.svg", nome:"meowed"},
        {src:"assets/img/barked.svg", nome:"barked"},
        {src:"assets/img/nathanwpylestrangeplanet.svg", nome:"nathanwpylestrangeplanet"},
        {src:"assets/img/wawawicomics.svg", nome:"wawawicomics"},
        {src:"assets/img/respondeai.svg", nome:" respondeai"},
        {src:"assets/img/filomoderna.svg", nome:"filomoderna"},
        {src:"assets/img/memeriagourmet.svg", nome:"memeriagourmet"}
    ];

    return(
        <div class="stories">
            {stories.map((story) => <Story src={story.src} nome={story.nome}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({src, nome}){
    return (
        <div>
            <div class="story">
                <div class="imagem">
                    <img src={src} />
                </div>
                <div class="usuario">
                    {nome}
                </div>
            </div>
            
        </div>
    );
}

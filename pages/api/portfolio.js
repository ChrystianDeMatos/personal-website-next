module.exports = (req, res) => {
    // const { title = 'World' } = req.query
    // res.send(`Hello ${title}!`)
    res.send(projects)
}

function newTech (icon, name) { return {icon: icon, tooltip: name} }
const projects = [
    {
        title: "Neon Janitor 88",
        description: "Jogo criado na Unity onde eu orientei minha equipe com o desenvolvimento e também atuei como programador e game designer do mesmo.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "CSharp")
        ],
        image: "./neonjanitor.png",
        link: "https://chrystiandematos.itch.io/neon-janitor-88"
    },
    {
        title: "Out of Control",
        description: "Jogo que foi feito com o objetivo de participar de uma Game Jam de 48h, nele realizei todo o desenvolvimento, ficando fora apenas os modelos 3D e músicas.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "CSharp")
        ],
        image: "./outofcontrol.gif",
        link: "https://chrystiandematos.itch.io/out-of-control"
    },
    {
        title: "Space Roguelite",
        description: "Participei do desenvolvimento do jogo, onde eu criava a inteligência artificial de todos os inimigos, atualmente a produção está pausada.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "CSharp")
        ],
        image: "./spaceroguelite.png",
        link: ""
    },
    {
        title: "Contador de Mensagens",
        description: "Bot de Discord que grava diariamente o número de mensagens enviadas no dia pelo servidor, assim permitindo aos usuários ver o recorde de seu servidor.",
        technologies: [
            newTech("nodejs", "NodeJS"),
            newTech("postgresql", "PostgreSQL"),
        ],
        image: "./msgcounter.png",
        link: "https://github.com/CristianDrift/MSG-Counter-Bot"
    },
    {
        title: "Drive Uploader",
        description: "Extensão do editor de vídeo Sony Vegas que serve para enviar arquivos recém renderizados para a nuvem do Drive.",
        technologies: [
            newTech("csharp", "CSharp"),
            newTech("dotnet", ".NET"),
        ],
        image: "./driveuploader.png",
        link: ""
    },
    {
        title: "Site para fotógrafo",
        description: "Site feito para mostrar trabalhos do fotógrafo, além disso os clientes finais podem escolher as fotos que desejam e também olhar um preview do seu Álbum.",
        technologies: [
            newTech("csharp", "CSharp"),
            newTech("dotnet", ".NET"),
            newTech("react", "React"),
            newTech("mongodb", "MongoDB"),
        ],
        image: "./fabiomatos.png",
        link: "https://www.figma.com/proto/UWAVndRo9zpmYwM23WMLsP/Fabio-Matos-Projeto?node-id=2%3A1&scaling=min-zoom"
    },
    {
        title: "Ficha Kaiju RPG",
        description: "Página criada com React para a jogar RPG de mesa online.",
        technologies: [
            newTech("react", "React"),
        ],
        image: "./kaiju.png",
        link: "https://kaiju-rpg.vercel.app"
    },
]
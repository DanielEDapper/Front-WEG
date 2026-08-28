import "./Header.css";

interface HeaderProps{
    titulo: string;
    subtitulo ?: string
};

function Header({titulo, subtitulo} : HeaderProps)
{
    return(
        <header className="header-container">
            <h2 className="header-title">{titulo}</h2>
            {subtitulo && <p className="header-subtitle">{subtitulo}</p>}
            <hr className="header-divider"/>
            {/* PORQUE FECHAR NA PRÓPRIA TAG: Auto-fechamento <hr />: Tags sem elementos internos (children) devem ser fechadas diretamente com '/>' por regara estrita do TSX */}
        </header>
    )
}
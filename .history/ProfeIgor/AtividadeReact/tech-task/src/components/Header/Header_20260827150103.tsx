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
        </header>
    );
}

export default Header;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
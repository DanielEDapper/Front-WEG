import "./Header.css";

interface HeaderProps{
    titulo : string,
    status : string
};

function Header({titulo, status} : HeaderProps)
{
    return (
    <header className="header">
        <div className="header-content">
            <div className="header-brand">
                <div className="header-icon">
                    ⚙
                </div>
                <div>
                    <h3 className="header-title">
                        EQUIPCONTROL
                    </h3>
                    <p className="header-subtitle">
                        {titulo}
                    </p>
                </div>
            </div>
            {status && (
                <div className="header-status">
                    <span className="status-dot"></span>
                    {status}
                </div>
            )}
        </div>
    </header>
);
}

export default Header;
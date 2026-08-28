import "./Header.css";

interface HeaderProps{
    titulo : string,
    status : string
};

function Header({titulo, status} : HeaderProps)
{
    return(
        <header>
            <div>
                <div>
                    <h3>EQUIPCONTROL</h3>
                    {status && <p>{status}</p>}
                </div>
                <h2>{titulo}</h2>
            </div>
        </header>
    );
}

export default Header;
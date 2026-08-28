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
                    <h2>EQUIPCONTROL</h2>
                    {status && <p>{status}</p>}
                </div>
                <h2></h2>
            </div>
        </header>
    )
}
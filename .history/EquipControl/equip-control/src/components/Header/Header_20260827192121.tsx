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
                    {<h3></h3>}
                </div>
            </div>
        </header>
    )
}
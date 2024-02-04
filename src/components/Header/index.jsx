import './style.css';
export default function Header({ nome_logo }) {
    return (
        <header>
            <h1>{nome_logo}</h1>
            <nav>
                <ul>
                    <li>Contato</li>
                    <li>Projetos</li>
                    <li>Soft skils</li>
                </ul>
            </nav>
        </header>
    )
}
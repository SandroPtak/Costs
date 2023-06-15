import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import Container from './Conteiner'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="costs"/></Link>
                <ul className={styles.list}>
                    <li className={styles.iten}>
                        <Link to="/">Ínicio</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/company">Sobre</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar
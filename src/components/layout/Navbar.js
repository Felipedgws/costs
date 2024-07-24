import {Link} from 'react-router-dom'
import Conteiner from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Moeda_costs-png.webp'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Conteiner>
                <Link to="/"> <img src={logo} alt="Costs" /> </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Company">Compania</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Contact">Contato</Link>
                        </li>
                    </ul>
            </Conteiner>
        </nav>
    )

}

export default Navbar
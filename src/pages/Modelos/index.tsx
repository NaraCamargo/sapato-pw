import styles from './Modelos.module.scss';
import Logo from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Modelos(){
    const [busca, setBusca] = useState(""); 
    return(
        <main>
        <nav className={styles.lista}>
            <img src={Logo} alt="Logo dos Sapatos" />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
             Sapatos em liquidação!
            </div>
        </header>      
        <section className={styles.modelos}>
            <h3 className={styles.modelos__titulo}>Modelos</h3>
            <Buscador busca={busca} setBusca={setBusca}/> 
            <div className={styles.modelos__filtros}>
            <Filtros/>
            </div>
        </section>
    </main>
    );
}

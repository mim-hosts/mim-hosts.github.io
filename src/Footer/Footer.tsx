import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            Kontakt: <a href="mailto:k.rokicki@students.mimuw.edu.pl">k.rokicki@students.mimuw.edu.pl</a>
        </div>
    );
}

export default Footer;

import styles from '../style.module.css';

function Footer() {
    return (
        <div className={ styles.footer }>
            <p className={ styles.footer__signoff }>Shopping List v1.0 | ©{new Date().getFullYear()} <a href="https://achcreative.co.uk">achcreative</a></p>
        </div>
    );
}


export default Footer;
import styles from '../style.module.css';
import myLogo from '../basket-shopping-solid.svg';

function Header() {
    return (
        <div className={ styles.header }>
            <img alt="logo" className={ styles.logo } src={myLogo} />
            <h1 className={ styles.header__title }>Shopping List</h1>
        </div>
    );
}


export default Header;
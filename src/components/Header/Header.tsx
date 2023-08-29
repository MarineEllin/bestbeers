import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo.png" alt="logo" className={styles.logo} />
      </div>
    </div>
  );
}

export default Header;

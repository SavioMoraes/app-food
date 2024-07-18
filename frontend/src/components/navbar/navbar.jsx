import styles from './navbar.module.css';
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu";
import { useState } from 'react';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <Link to={'/'}>
          <img src="/imgs/app-food-logo.png" alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.navbarLinksContainer}>
          <Link to={'/'} href="" className={styles.navbarLink}>Home</Link>
          <Link to={'/plates'} href="" className={styles.navbarLink}>Plates</Link>
          <Link to={'/cart'}>
            <LuShoppingCart className={styles.navbarLink} />
          </Link>
          <Link to={'/profile'}>
            <LuUserCircle className={styles.navbarLink} />
          </Link>
        </div>
      </div>

      <div className={styles.mobileNavbarItems}>
        <Link to={'/'}>
          <img src="/app-food-logo.png" alt="logo" className={styles.logo} />
        </Link>

        <div className={styles.mobileNavbarBtns}>
          <Link to={'/cart'}>
            <LuShoppingCart className={styles.navbarLink} />
          </Link>
          <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleOpenMenu}
        
      >
        <div className={styles.drawer}>
          <Link to={'/'} href="" className={styles.navbarLink}>Home</Link>
          <Link to={'/plates'} href="" className={styles.navbarLink}>Plates</Link>
          <Link to={'/profile'} href="" className={styles.navbarLink}>Profile</Link>
        </div>
      </Drawer>
    </nav>
  );
}
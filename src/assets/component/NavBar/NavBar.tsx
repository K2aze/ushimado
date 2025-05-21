import styles from './NavBar.module.scss'

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import AnchorList from './AnchorList';

function NavBar() {

  return(
    <div className={styles.container}>
      <Logo />
      <SearchBar />
      <AnchorList />
    </div>
  )
}

export default NavBar; 
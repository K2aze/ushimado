import styles from './NavBar.module.scss'

import SearchBar from "./SearchBar";
import Logo from "./Logo";


function NavBar() {
  const SearchSection = () => (
    <SearchBar />
  )

  return(
    <div className={styles.container}>
      <Logo />
      <SearchBar />
    </div>
  )
}

export default NavBar; 
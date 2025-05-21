import NavBar from '../../component/NavBar/NavBar';
import styles from './HomePage.module.scss'
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import SpotSection from './SpotSection';
function HomePage() {
    return(
        <div className={styles.main}>
            <NavBar />
            <HeroSection />
            <InfoSection />
            <SpotSection />
        </div>
    )
}


export default HomePage;


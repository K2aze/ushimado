import NavBar from '../../component/NavBar/NavBar';
import styles from './HomePage.module.scss'
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import SpotSection from './SpotSection';
import AccessSection from './AccessSection';
function HomePage() {
    return(
        <div className={styles.main}>
            <NavBar />
            <HeroSection />
            <InfoSection />
            <SpotSection />
            <AccessSection />
        </div>
    )
}


export default HomePage;


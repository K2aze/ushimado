import styles from './InfoSection.module.scss'
import { Button } from '../../common/Anchor';
function InfoSection(){
    return(
        <section className={styles.container}>
            <div className={styles.heading}>
                <h2>
                    牛窓海岸
                </h2>
            </div>
            <div className={styles.content}>
                <p>
                「日本のエーゲ海」とも呼ばれる牛窓海岸は、穏やかな風景、
                美しい砂浜、透き通った海が魅力のスポットです。ゆったりとし
                た時間を過ごしたい方や、島巡りのツアーに参加したい方にぴっ
                たりの場所です。
                </p>
                <div className={styles.content__btn}>
                    <Button content='もっと見る'/>
                    <Button content='見学を予約' style='light'/>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;
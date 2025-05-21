import styles from './HeroSection.module.scss'
import { Button } from '../../common/Anchor'
import { ArrowRightIcon, InfoIcon, FacebookLogoIcon, InstagramLogoIcon, XLogoIcon } from '@phosphor-icons/react'

function HeroSection(){
    return(
        <section className={styles.container}>
            <div className={styles.slgcontainer}>
                <h1>
                    日本のエーゲ海、
                    <span>
                        牛窓へようこそ
                    </span>
                </h1>
                <p>
                    穏やかな海と島々が織りなす癒しの景色。
                    心がほどける時間が、ここにあります。
                </p>
                <Button 
                content={
                    <div className={styles.btncontent}> 
                        アクセス方法
                        <ArrowRightIcon size={24} color='#000'/>
                    </div>
                }
                style='light' 
                className={styles.btn}
                />
            </div>
                
            <div className={styles.info}>
                <InfoIcon color='white' size={32} weight='fill'/>
                <span>
                    牛窓の魅力をもっと知りましょう！
                </span>
            </div>

            <div className={styles.sns}>
                <FacebookLogoIcon size={32}  color='#fff' className={styles.sns__item}/>
                <InstagramLogoIcon size={32}  color='#fff' className={styles.sns__item}/>
                <XLogoIcon size={32}  color='#fff' className={styles.sns__item}/>
            </div>
        </section>
    )
}

export default HeroSection
import styles from './NavBar.module.scss'
import { Anchor, Button } from '../common/Anchor'
import Logo from '../common/Logo'
import { CommandIcon, CaretUpDownIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'

function NavBar() {
    const LogoSection = 
        <div className={styles.lgs}>
            <div className={styles.lgs__logo}><Logo color='rgb(3.5% 3.5% 4.3%)' className={styles.lgs__logo__svg} /> </div>
            <span className={styles.lgs__text}>
                <p className={styles.lgs__text__main}>牛窓海</p>
                <span className={styles.lgs__text__decs}>日本のエーゲ海</span>
            </span>
        </div>
    const SearchModal = 
        <div className={styles.ssm}>
            <div className={styles.ssm__main}>
                <div className={styles.ssm__main__d1}>
                    <MagnifyingGlassIcon size={24} />
                    <input type="search" name="search" id="search" placeholder='検査内容を入力してください'/>
                    <Button content='検査' style='dark'/>
                </div>
                <div className={styles.ssm__main__d2}>
                    Data
                </div>
            </div>
        </div>

    const SearchSection = 
        <div>
            <button type="button" className={styles.sc}>
                <div className={styles.sc__placeholder}>Seach here</div>
                <div className={styles.sc__nv}>
                    <CommandIcon size={12}/>
                    <p className={styles.sc__nvs}>+ K</p>
                </div>
            </button>
            {SearchModal}

        </div>


    const Lang = ({current='en'}) => {
        return(
            <Button content={Langcontent} style='light' />
        )
    }

    const Langcontent = 
        <div className={styles.lang}>
            <div>日本語</div>
            <div>
                <CaretUpDownIcon />
            </div>
        </div>
    
    const LangModal = 
        <div className={styles.lm}>
            <Button content='日本語' style='light' className={styles.lm__item}/>
            <Button content='Tiếng Việt' style='light' className={styles.lm__item}/>
            <Button content='English' style='light' className={styles.lm__item}/>
        </div>

    const navLink = [
        {content: 'ホーム', to: '/home'},
        {content: 'イベント', to: '/event'},
        {content: '観光スポット', to: '/spot'},
        {content: 'お知らせ', to: '/info'},
    ]

    return (
        <div className={styles.container}>
            <div>
               {LogoSection}
            </div>
            <div>
                {SearchSection}
            </div>
            <div className={styles.nf}>
                <nav className={styles.nf__main}>
                    {navLink.map((data, index) => (
                        <Anchor key={index} content={data.content} to={data.to} style='light'/>
                    )) }
                </nav>
                <div className={styles.nf__lang}>
                    <Lang/>
                    {LangModal}
                </div>
            </div>
        </div>
  )
}

export default NavBar

import styles from './AnchorList.module.scss'
import { Anchor, Button } from '../../common/Anchor'
import DropBox from '../../common/DropBox'

import { useState } from 'react'

import { GlobeIcon, CaretUpDownIcon } from '@phosphor-icons/react'

const NaviData = [
    {content: 'ホーム', to: '/home'},
    {content: 'イベント', to: '/event'},
    {content: '観光スポット', to: '/spot'},
    {content: 'お知らせ', to: '/about'},

]

const LangContent = ['日本語', 'Tiếng Việt', 'English']

function AnchorList() {
    const [lang, setLang] = useState<string>('日本語');



    const naviLink = NaviData.map((data, key) => {
        return <Anchor key={key} content={data.content} to={data.to} className={styles.anchoritems} style='primary'/>
    });
    const langList = LangContent.map((data, key) => {
        return <Button key={key} content={data} style='primary' className={styles.anchoritems} onClick={() => setLang(data)}/>
    })

    const LangBtn = (
        <Button 
        content={
            <div className={styles.langbtn}>
                <GlobeIcon size={20}/>
                <span>
                    {lang}
                </span>
                <CaretUpDownIcon />
            </div>
        } 
        style='primary'
        />
    )


    return(
        <div className={styles.container}>
            <div className={styles.navContainer}>
                {naviLink}
            </div>
            <div className={styles.langContainer}>
                <DropBox parent={LangBtn} children={langList} dropClass={styles.dbclass}/>
            </div>
        </div>
    )
}

export default AnchorList
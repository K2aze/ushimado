import React, { useState } from 'react';
import styles from './AccessSection.module.scss';
import { CarIcon, TrainIcon } from '@phosphor-icons/react';

const AccessSection = () => {
  const [transportation, setTransportation] = useState(true);

  const handleToggle = () => {
    setTransportation(!transportation)
    }

  const transContainer = transportation ? (
        <div className={styles.transContainer}
        style={transportation ?undefined : { order: 3 }}
        >
            <CarIcon size={64} fill='#fff'/>
        </div>
  ) : (
        <div className={styles.transContainer}
        style={transportation ?undefined : { order: 3 }}
        
        >
            <TrainIcon size={64} fill='#fff'/>
        </div>
  )

  const infoContainer = transportation?(
        <div className={styles.infoContainer}>
            <h3>出発地点: 岡山駅</h3>
            <p>所要時間：約50分</p>
            <p>予想料金：ガソリン代 約800円</p>
            <button type='button' onClick={handleToggle}>or Train</button>
        </div>
  ):(
        <div className={styles.infoContainer}>
            <h3>出発地点: 岡山駅</h3>
            <p>所要時間：約45分</p>
            <p>予想料金：電車 500円 + バス 300円</p>
            <button type='button' onClick={handleToggle}>or Car</button>
        </div>
  )
  return (
    <section className={styles.container}>
        {transContainer}
        {infoContainer}
        <div className={styles.mapContainer}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.657395271244!2d134.16252075452394!3d34.61896801717721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554717fe95ad03d%3A0x4f33ccdc2a64fe5!2z54mb56qT5rW35rC05rW05aC0!5e0!3m2!1sja!2sjp!4v1747891124904!5m2!1sja!2sjp" 
            width="600" 
            height="450" 
            loading="lazy" 
            >
            </iframe>
        </div>
    </section>
  );
};

export default AccessSection;

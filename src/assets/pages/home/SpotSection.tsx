import styles from './SpotSection.module.scss'
import SpotCard from '../../common/SpotCard';

const spotList = [
  {
    title: "牛窓オリーブ園",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "瀬戸内海を一望できる小高い丘にあるオリーブ園。地中海のような風景が広がり、夕日スポットとしても人気。",
    tags: ["オリーブ", "絶景", "夕日"]
  },
  {
    title: "牛窓神社",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "緑に囲まれた静かな神社。石段を登ると牛窓港を見渡せる絶景が広がる。",
    tags: ["神社", "歴史", "パワースポット"]
  },
  {
    title: "瀬戸内クルーズ",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "前島や頭島など、小さな島々を巡る観光船。穏やかな瀬戸内海の風景を楽しめる。",
    tags: ["クルーズ", "島巡り", "海"]
  },
  {
    title: "牛窓海水浴場",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "静かで穏やかな海水浴場。夏は海水浴やカヤック、SUPなどのアクティビティが楽しめる。",
    tags: ["ビーチ", "夏", "アクティビティ"]
  },
  {
    title: "アートリゾート＆ギャラリー",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "芸術と自然が融合したリゾート。ミニマルで落ち着いた空間で、癒しの時間を過ごせる。",
    tags: ["アート", "リゾート", "癒し"]
  },
  {
    title: "オリーブ料理のレストラン",
    image: 'http://localhost:5173/src/assets/pages/home/assets/spots/1.jpg',
    description: "地元の魚介やオリーブを使った料理が楽しめる。海を見ながらゆったりとした食事時間を。",
    tags: ["グルメ", "オリーブ料理", "海の見えるレストラン"]
  }
];


function SpotSection(){
    return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {spotList.map((spot, index) => (
          <div
            key={index}
            className={`${styles.gridItem} ${index === 0 || index === 4? styles.featured : ''}`}
          >
            <SpotCard
              title={spot.title}
              image={spot.image}
              description={spot.description}
              tags={spot.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpotSection;
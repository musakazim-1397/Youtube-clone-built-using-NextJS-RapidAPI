import VideosSection from '../components/HomePageVideosSection/VideosSection'
import LeftScrollbar from '../components/LeftScrollbar/LeftScrollbar'

import styles from '../styles/Home.module.css'
import {LinksContextProvider} from '../utils/Store'

export default function Home() {
  return (
    <div className={styles.container}>
      <LinksContextProvider>
      <LeftScrollbar/>
      <VideosSection/>
      </LinksContextProvider>
    </div>
  )
}

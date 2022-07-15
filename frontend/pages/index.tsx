import type { NextPage } from "next"
import Navbar from "@components/navbar"
import styles from "@styles/pages/Index.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className={styles["main-slider"]}>
        <div className={styles["main-slider__item"]}>
          <img src="/image 1.png" />
        </div>
      </section>
      <section className={styles["main"]}>
        <div className={styles["main__row"]}>
          <div className={styles["main__registration"]}>
            <button className={styles["registration__btn"]}>點我報名</button>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

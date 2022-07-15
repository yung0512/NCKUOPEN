import React from "react"
import styles from "@styles/components/Navbar.module.scss"

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img className={styles.log__img} src="/badminton-birdie.svg" />
        <div className={styles.log__text}>
          <span>NCKU OPEN 29th</span>
        </div>
      </div>
      <nav className={styles.navbar__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>報名資訊</li>
          <li className={styles.nav__item}>校友專區</li>
          <li className={styles.nav__item}>紀念商品</li>
          <li className={styles.nav__item}>關於成大羽球公開賽</li>
        </ul>
      </nav>
      <div className={styles.navbar__login}>
        <div className={styles.login__buttons}>
          <span className={`${styles.btn} ${styles.btn_first}`}>登入</span>
          <span className={styles.btn}>註冊</span>
          <img className={styles.login__icon} src="/login_icon.svg" alt="" />
        </div>
        <div>
          <span>聯絡我們</span>
        </div>
      </div>
    </section>
  )
}

export default Navbar

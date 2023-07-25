import s from './Home.module.scss'

import { Button } from '@/components/Button'
import { ScrollDown } from '@/components/ScrollDown'

export const Home = () => {
  return (
    <section className={s.home}>
      <div className={s.bg}></div>
      <div className={`${s.bg} ${s.bg2}`}></div>
      <div className={`${s.bg} ${s.bg3}`}></div>
      <div className={s.content}>
        <div className={s.hero}>
          <div className={s.photo} />
          <h1 className={s.h1}>HI THERE !</h1>
          <p className={s.p}>I'am Andrey Soroko</p>
          <div className={s.hero_actions}>
            <Button>Download CV</Button>
            <a href="#">Learn more</a>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

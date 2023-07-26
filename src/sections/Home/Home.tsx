import { useState } from 'react'

import { useSpring, animated } from '@react-spring/web'

import s from './Home.module.scss'

import { Button } from '@/components/Button'
import { ScrollDown } from '@/components/ScrollDown'

export const Home = () => {
  const words = ['ANDREY SOROKO.', 'A FRONTEND DEVELOPER.']
  const [wordIndex, setWordIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  const animationProps = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    reverse: reverse,
    config: { duration: 2000 },
    onRest: () => {
      if (reverse) {
        const newIndex = wordIndex + 1 === words.length ? 0 : wordIndex + 1

        setWordIndex(newIndex)
      }
      setReverse(!reverse)
    },
  })

  return (
    <section className={s.home}>
      <div className={s.bg}></div>
      <div className={`${s.bg} ${s.bg2}`}></div>
      <div className={`${s.bg} ${s.bg3}`}></div>
      <div className={s.content}>
        <div className={s.hero}>
          <div className={s.photo} />
          <h1 className={s.h1}>HI THERE !</h1>
          <p className={s.animated_text}>
            I'M
            <animated.span
              style={{
                display: 'inline-block',
                borderRight: '2px solid black',
                paddingRight: '10px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                ...animationProps,
              }}
            >
              {words[wordIndex]}
            </animated.span>
          </p>

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

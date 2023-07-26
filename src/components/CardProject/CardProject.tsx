import { useSpring, a } from '@react-spring/web'

import s from './CardProject.module.scss'

interface CardProjectProps {
  isFlipped: boolean
  setFlipped: (isFlipped: boolean) => void
  img?: string
}

export const CardProject = ({ isFlipped, img, setFlipped }: CardProjectProps) => {
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div className={s.cardProject} onClick={() => setFlipped(!isFlipped)}>
      <a.div
        className={`${s.card} ${s.front}`}
        style={{ opacity: opacity.to(o => 1 - o), transform, backgroundImage: `url(${img})` }}
      ></a.div>
      <a.div
        className={`${s.card} ${s.back}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      ></a.div>
    </div>
  )
}

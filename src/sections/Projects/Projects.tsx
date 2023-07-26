import { useState } from 'react'

import s from './Projects.module.scss'

import { CardProject } from '@/components/CardProject'
import { Title } from '@/components/Title'
import { images } from '@/utils/images.ts'

interface ProjectsProps {}

export const Projects = ({}: ProjectsProps) => {
  const [isFlippedSN, setFlippedSN] = useState(false)
  const [isFlippedTL, setFlippedTL] = useState(false)
  const [isFlippedEC, setFlippedEC] = useState(false)

  return (
    <div className={s.projects}>
      <div className="wrapper">
        <Title title="MY WORKS" subtitle="TAKE A LOOK AT" />
        <div className={s.content}>
          <CardProject
            setFlipped={setFlippedSN}
            isFlipped={isFlippedSN}
            img={images.socialNetwork.src}
          />

          <CardProject
            setFlipped={setFlippedTL}
            isFlipped={isFlippedTL}
            img={images.taskManager.src}
          />

          <CardProject
            setFlipped={setFlippedEC}
            isFlipped={isFlippedEC}
            img={images.ecommerce.src}
          />
        </div>
      </div>
    </div>
  )
}

import s from './Skills.module.scss'

import { ReactComponent as CSS } from '@/assets/svg/tech/css.svg'
import { ReactComponent as Git } from '@/assets/svg/tech/git.svg'
import { ReactComponent as HTMLIcon } from '@/assets/svg/tech/html.svg'
import { ReactComponent as Jest } from '@/assets/svg/tech/jest.svg'
import { ReactComponent as JS } from '@/assets/svg/tech/js.svg'
import { ReactComponent as MaterialIcon } from '@/assets/svg/tech/material.svg'
import { ReactComponent as ReactIcon } from '@/assets/svg/tech/react.svg'
import { ReactComponent as ReduxIcon } from '@/assets/svg/tech/redux.svg'
import { ReactComponent as RestAPIIcon } from '@/assets/svg/tech/rest.svg'
import { ReactComponent as SCSS } from '@/assets/svg/tech/scss.svg'
import { ReactComponent as StorybookIcon } from '@/assets/svg/tech/storybook.svg'
import { ReactComponent as TypescriptIcon } from '@/assets/svg/tech/typescript.svg'

interface SkillsProps {}

export const Skills = ({}: SkillsProps) => {
  return (
    <div className={s.skills}>
      <ul className={s.row}>
        <li className={s.skill}>
          <ReactIcon className={s.icon} />
          <p className={s.title}>React</p>
        </li>
        <li className={s.skill}>
          <TypescriptIcon className={s.icon} />
          <p className={s.title}>Typescript</p>
        </li>
        <li className={s.skill}>
          <JS className={s.icon} />
          <p className={s.title}>Javascript</p>
        </li>
        <li className={s.skill}>
          <ReduxIcon className={s.icon} />
          <p className={s.title}>Redux Toolkit</p>
        </li>
        <li className={s.skill}>
          <HTMLIcon className={s.icon} />
          <p className={s.title}>HTML</p>
        </li>
        <li className={s.skill}>
          <CSS className={s.icon} />
          <p className={s.title}>CSS</p>
        </li>
        <li className={s.skill}>
          <SCSS className={s.icon} />
          <p className={s.title}>SCSS</p>
        </li>
        <li className={s.skill}>
          <StorybookIcon className={s.icon} />
          <p className={s.title}>Storybook</p>
        </li>
        <li className={s.skill}>
          <MaterialIcon className={s.icon} />
          <p className={s.title}>Material UI</p>
        </li>
        <li className={s.skill}>
          <Jest className={s.icon} />
          <p className={s.title}>Jest</p>
        </li>
        <li className={s.skill}>
          <Git className={s.icon} />
          <p className={s.title}>Git</p>
        </li>
        <li className={s.skill}>
          <RestAPIIcon className={s.icon} />
          <p className={s.title}>Rest API</p>
        </li>
      </ul>
    </div>
  )
}

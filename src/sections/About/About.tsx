import s from './About.module.scss'

import { ReactComponent as CodewarsIcon } from '@/assets/svg/codewars.svg'
import { ReactComponent as GitHubIcon } from '@/assets/svg/github.svg'
import { ReactComponent as LinkedInIcon } from '@/assets/svg/linkedin.svg'
import { ReactComponent as TelegramIcon } from '@/assets/svg/telegram.svg'
import { Skills } from '@/components/Skills'
import { Title } from '@/components/Title'

interface AboutProps {}

export const About = ({}: AboutProps) => {
  return (
    <section className={s.about}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.photo}></div>
          <div className={s.info}>
            <h1 className={s.title}>About Me</h1>
            <p className={s.text}>
              Passionate designer & developer who loves simplicity in things and crafts beautiful
              user interfaces with love.
            </p>
            <nav className={s.icons}>
              <li>
                <TelegramIcon className={s.icon} />
              </li>
              <li className={s.icon}>
                <LinkedInIcon className={s.icon} />
              </li>
              <li className={s.icon}>
                <GitHubIcon className={s.icon} />
              </li>
              <li className={s.icon}>
                <CodewarsIcon className={s.icon} />
              </li>
            </nav>
            <div className={s.contacts}>
              <div className={s.col}>
                <p className={s.colItem}>
                  Age: <span>19</span>
                </p>
                <p className={s.colItem}>
                  Degree: <span>Master</span>
                </p>
                <p className={s.colItem}>
                  Phone: <span>098-765-4321</span>
                </p>
              </div>
              <div className={s.col}>
                <p className={s.colItem}>
                  Location: <span>Belarus, Minsk </span>
                </p>
                <p className={s.colItem}>
                  Skype: <span> beingeorge </span>
                </p>
                <p className={s.colItem}>
                  Phone: <span>hello@beingeorge.com </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.techs}>
          <Title title={'TECH STACK'} subtitle={"WHAT I'M KNOWING"} />
          <Skills />
        </div>
      </div>
    </section>
  )
}

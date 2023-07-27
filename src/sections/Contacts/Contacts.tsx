import s from './Contacts.module.scss'

import { ReactComponent as MailIcon } from '@/assets/svg/contact/mail.svg'
import { ReactComponent as LocationIcon } from '@/assets/svg/contact/map.svg'
import { ReactComponent as PhoneIcon } from '@/assets/svg/contact/phone.svg'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'

interface ContactsProps {}

export const Contacts = ({}: ContactsProps) => {
  return (
    <div className={s.contacts}>
      <div className="wrapper">
        <Title title="CONTACTS" subtitle="SAY HELLO" />
        <div className={s.content}>
          <div className={s.boxes}>
            <div className={s.box}>
              <div className={s.box_content}>
                <PhoneIcon className={s.icon} />
                <a className={s.info} href="tel:+375256561690">
                  +375 25 656 16 90
                </a>
                <p className={s.text}>Call me</p>
              </div>
            </div>
            <div className={s.box}>
              <div className={s.box_content}>
                <MailIcon className={s.icon} />
                <a href="mailto:supersoroko@gmail.com" className={s.info}>
                  supersoroko@gmail.com
                </a>
                <p className={s.text}>Mail me</p>
              </div>
            </div>
            <div className={s.box}>
              <div className={s.box_content}>
                <LocationIcon className={s.icon} />
                <p className={s.info}>Belarus, Minsk</p>
                <p className={s.text}>Address</p>
              </div>
            </div>
          </div>
          <form className={s.form}>
            <div className={s.name}>
              <input
                className={`${s.input} ${s.inputName}`}
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
              <input
                className={`${s.input} ${s.inputName}`}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input className={s.input} type="text" name="subject" placeholder="Your subject..." />
            <textarea className={s.input} name="Name" rows={6} placeholder="Your Message" />
            <div className={s.submit}>
              <Button type="submit" className={s.btn}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

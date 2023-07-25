import s from './Navbar.module.scss'

import { ReactComponent as AlbumIcon } from '@/assets/svg/album.svg'
import { ReactComponent as HomeIcon } from '@/assets/svg/home.svg'
import { ReactComponent as InfoIcon } from '@/assets/svg/info.svg'
import { ReactComponent as Logo } from '@/assets/svg/logo.svg'
import { ReactComponent as PhoneIcon } from '@/assets/svg/phone.svg'

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <aside className={s.navbar}>
      <div className={s.logo}>
        <Logo />
      </div>

      <nav>
        <li>
          <HomeIcon className={s.icon} />
        </li>
        <li>
          <InfoIcon className={s.icon} />
        </li>
        <li>
          <AlbumIcon className={s.icon} />
        </li>
        <li>
          <PhoneIcon className={s.icon} />
        </li>
      </nav>
    </aside>
  )
}

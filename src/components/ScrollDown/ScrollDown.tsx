import s from './ScrollDown.module.scss'

interface ScrollDownProps {}

export const ScrollDown = ({}: ScrollDownProps) => {
  return (
    <div className={s.scrollDown}>
      <div className={s.mouse}></div>
      <span>Scroll down</span>
    </div>
  )
}

import s from './Title.module.scss'

interface TitleProps {
  title?: string
  subtitle?: string
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className={s.title}>
      <div className={s.subtitle}>
        <div className={s.line} />
        <p>{subtitle}</p>
      </div>
      <h1 className={s.title_h1}>{title}</h1>
    </div>
  )
}

import { React } from 'react'

const Loading = () => {
  return (
    <span className={s.root}>
      <span className={s.dot} key={`dot_1`} />
      <span className={s.dot} key={`dot_2`} />
      <span className={s.dot} key={`dot_3`} />
    </span>
  )
}

export default Loading

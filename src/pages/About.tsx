import React from 'react'
import { useHistory } from 'react-router-dom'


export const AboutPage: React.FunctionComponent = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus aspernatur hic a voluptate numquam animi sit odio, pariatur reprehenderit?</p>
      <button className="btn" onClick={() => history.push('/')}>Назад</button>
    </>
  )
}
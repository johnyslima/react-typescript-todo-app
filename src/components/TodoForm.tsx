import React, { useState, useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key ==='Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title);
      // setTitle('')
    }
  }
  

  return (
    <div className="input-field mt2">
      <input
        // value={title} 
        // onChange={changeHadler}
        ref={ref}
        type="text" 
        id="title"
        onKeyPress={keyPressHandler} />
      <label htmlFor="title" className="active">Введите название задачи</label>

    </div>
  )
}

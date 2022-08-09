import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const MessageInput = () => {
  const actions = useActions()
  const form = useTypedSelector((store) => store.form)
  const messageInput = form.inputs.find((input => input.name === "message"))


  const onChange : ChangeEventHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    actions.set({
      input: "message",
      value: event.target.value
    })
  }

  return (
    <div className="input-block">
      <textarea
        
        className={"input input-message" + (messageInput?.error.length ? " input-error" : "")}
        placeholder="Сообщение"
        name="message"
        value={messageInput?.value}
        onChange={onChange}  
      />
      <div className="input-error-field">{messageInput?.error}</div>
    </div>  
  )
}

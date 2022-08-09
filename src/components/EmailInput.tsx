import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const EmailInput = () => {
  const actions = useActions()
  const form = useTypedSelector((store) => store.form)
  const emailInput = form.inputs.find((input => input.name === "email"))

  const onChange : ChangeEventHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    actions.set({
      input: "email",
      value: event.target.value
    })
  }

  return (
    <div className="input-block">
      <input
        type="email"
        formNoValidate
        className={"input" + (emailInput?.error.length ? " input-error" : "")}
        placeholder="email@example.com"
        name="email"
        value={emailInput?.value}
        onChange={onChange}
      />
      <div className="input-error-field">{emailInput?.error}</div>
    </div>  
  )
}

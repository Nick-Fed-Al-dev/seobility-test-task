import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const PhoneInput = () => {
  const actions = useActions()
  const form = useTypedSelector((store) => store.form)
  const phoneInput = form.inputs.find((input => input.name === "phone"))


  const onChange : ChangeEventHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    actions.set({
      input: "phone",
      value: event.target.value
    })
  }

  return (
    <div className="input-block">
      <input
        type="tel"
        formNoValidate
        className={"input" + (phoneInput?.error.length ? " input-error" : "")}
        placeholder="+7 (999) 999-99-99"
        name="phone"
        value={phoneInput?.value}
        onChange={onChange}  
      />
      <div className="input-error-field">{phoneInput?.error}</div>
    </div>  
  )
}
import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const BirthInput = () => {
  const actions = useActions()
  const form = useTypedSelector((store) => store.form)
  const birthInput = form.inputs.find((input => input.name === "birth"))

  const onChange : ChangeEventHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    actions.set({
      input: "birth",
      value: event.target.value
    })
    event.target.setAttribute("data-picked", "true")
  }

  return (
    <div className="input-block">
      <input
        type="date"
        formNoValidate
        
        className={"input" + (birthInput?.error.length ? " input-error" : "")}
        placeholder="Дата Рождения"
        name="birth"
        value={birthInput?.value}
        onChange={onChange}  
      />
      <div className="input-error-field">{birthInput?.error}</div>
    </div>  
  )
}

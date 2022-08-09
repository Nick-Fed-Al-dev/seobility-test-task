import { ChangeEvent, ChangeEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const NameInput = () => {
  const actions = useActions()
  const form = useTypedSelector((store) => store.form)
  const nameInput = form.inputs.find((input => input.name === "name"))


  const onChange : ChangeEventHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    actions.set({
      input: "name",
      value: event.target.value
    })
  }

  return (
    <div className="input-block">
      <input
        type="text"
        formNoValidate
        className={"input" + (nameInput?.error.length ? " input-error" : "")}
        placeholder="Имя Фамилия"
        name="name"
        value={nameInput?.value}
        onChange={onChange}  
      />
      <div className="input-error-field">{nameInput?.error}</div>
    </div>  
  )
}

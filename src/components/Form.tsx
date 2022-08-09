import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { BirthInput } from './BirthInput'
import { EmailInput } from './EmailInput'
import { MessageInput } from './MessageInput'
import { NameInput } from './NameInput'
import { PhoneInput } from './PhoneInput'

const Form : React.FC = () => {
  const form = useTypedSelector((store) => store.form)
  const [data, setData] = useState("")

  const sendAjax = async (event : any) => {
    const response = await fetch("http://localhost:3001/api", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: form.inputs.find((input) => input.name === "name"),
        email: form.inputs.find((input) => input.name === "email"),
        phone: form.inputs.find((input) => input.name === "phone"),
        birth: form.inputs.find((input) => input.name === "birth"),
        message: form.inputs.find((input) => input.name === "message")
      })
    })
    const data = await response.text()
    if(document.querySelector(".submit-btn")){
      (document.querySelector(".submit-btn") as HTMLButtonElement).disabled = false
    }
    setData(data)
  }

  const onSubmit = async (event : FormEvent & {target: {disabled : boolean}}) => {
    event.preventDefault()

    if(form.ok){
      if(document.querySelector(".submit-btn")){
        (document.querySelector(".submit-btn") as HTMLButtonElement).disabled = true
      }
      
       await sendAjax(event)
    }
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit as FormEventHandler}>
        <NameInput />
        <EmailInput />
        <PhoneInput />
        <BirthInput />
        <MessageInput />
        
        <button type="submit" className="submit-btn">Потвердить</button>
      </form>
      <div className="result">{data}</div>
    </>
  )
}

export default Form
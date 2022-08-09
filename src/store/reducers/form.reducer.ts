import { IFormState, FormAction, FormActionTypes } from './../../types/form';


const initialState : IFormState = {
  inputs: [
    {
      name: "name",
      value: "",
      error: ""
    },
    {
      name: "email",
      value: "",
      error: ""
    },
    {
      name: "phone",
      value: "",
      error: ""
    },
    {
      name: "birth",
      value: "",
      error: ""
    },
    {
      name: "message",
      value: "",
      error: ""
    }
  ],
  ok: false
}

export const formReducer = (state = initialState, action : FormAction) : IFormState => {
  switch(action.type) {
    case FormActionTypes.SET_VALUE:
      let ok = true
      state.inputs.forEach((input) => {
        if(action.payload.input === input.name){
          input.value = action.payload.value
        }
        if(!input.value.length){
          ok = false
        }
        if(input.error.length){
          ok = false
        }
      })
      return {
        ok,
        inputs: state.inputs
      }
    case FormActionTypes.SET_ERROR:
      state.inputs.forEach((input) => {
        if(input.name === action.payload.input) {
          input.error = action.payload.value
        }
      })
      return state
    default:
      return state    
  }
}
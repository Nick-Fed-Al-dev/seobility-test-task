import { Dispatch } from 'react';
import { Validator } from '../../Validator';
import { FormAction, FormActionTypes } from './../../types/form';
import { IPayload } from './../../types/IPayload';

export const setValue = (payload : IPayload) : FormAction => {
  return {type: FormActionTypes.SET_VALUE, payload}
}

export const setError = (payload : IPayload) : FormAction => {
  return {
    type: FormActionTypes.SET_ERROR,
    payload: {
      input: payload.input,
      value: Validator.validate(payload)
    }
  }
}

export const set = (payload : IPayload) : Function => {
  return (dispatch : Dispatch<FormAction>) : void => {
    dispatch(setValue(payload))
    dispatch(setError(payload))
  }
}
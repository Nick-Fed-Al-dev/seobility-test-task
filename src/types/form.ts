import { IPayload } from './IPayload';
import { IInput } from './IInput';

export interface IFormState {
  inputs: IInput[]
  ok: boolean
}

export enum FormActionTypes {
  SET_VALUE = "SET_VALUE",
  SET_ERROR = "SET_ERROR"
}

export type FormAction =  {
  type: FormActionTypes
  payload: IPayload
}
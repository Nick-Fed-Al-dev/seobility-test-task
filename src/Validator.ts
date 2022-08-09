import { IPayload } from './types/IPayload'

export class Validator {

  private static validateName(value : string) : string {

    if(
      !value.length ||
      value.split(" ").length !== 2 ||
      !value.split(" ")[1].length
    ){
      return "Введите имя и фамилию через пробел"
    }

    if(!/[a-z]/.test(value)){
      return "Используйте только буквы латинского алфавита"
    }

    if(
      value.split(" ")[0].length < 3 || 
      value.split(" ")[1].length < 3 || 
      value.split(" ")[0].length > 30 || 
      value.split(" ")[1].length > 30
    ){
      return "Длина имени и фамилии должна быть больше 3 и меньше 30"
    }

    return ""
  }

  private static validateEmail(value : string) : string {

    if (!value.includes("@")) {
      return "Почтовый адрес должен содержать @"
    }
  
    if (!value.split("@")[0].length) {
      return 'почтовый адрес должен содержать имя пользователя перед @'
    }
  
    if (!value.split("@")[1].length) {
      return "почтовый адрес должен содержать домен после @"
    }
  
    if (!value.split("@")[1].includes(".")) {
      return "почтовый адрес должен содержать . после @"
    }
  
    if (!value.split("@")[1].split(".")[0].length) {
      return "почтовый адрес должен содержать название домена"
    }
  
    if (!value.split("@")[1].split(".")[1].length) {
      return "почтовый адрес должен содержать расширение домена"
    }

    return ""
  }

  private static validatePhone(value : string) : string {
    if(value.trim().length !== 18){
      return "Некорректный формат номера телефона"
    }
    return ""
  }

  private static validateBirth(value : string) : string {
    return ""
  }

  private static validateMessage(value : string) : string {
    if(value.length < 10){
      return "Минимальная длина сообщения 10"
    }
    if(value.length > 100){
      return "Максимальная длина сообщение 100"
    }
    return ""
  }

  public static validate(payload : IPayload) : string {

    switch(payload.input) {
      case "name":
        return this.validateName(payload.value)
      case "email":
        return this.validateEmail(payload.value)
      case "phone":
        return this.validatePhone(payload.value)
      case "birth":
        return this.validateBirth(payload.value)
      case "message":  
        return this.validateMessage(payload.value)
      default:
        return ""  
    }

  }
}
export class RegexpUtils {
  static readonly phoneNumber = /^1[3-9]\d{9}$/

  static readonly email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

  static readonly password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  static readonly username = /^[a-zA-Z0-9_-]{4,16}$/

  static readonly idCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

  static readonly number = /^\d+$/

  static isPhoneNumber(value: string) {
    return this.phoneNumber.test(value)
  }

  static isEmail(value: string) {
    return this.email.test(value)
  }

  static isPassword(value: string) {
    return this.password.test(value)
  }

  static isUsername(value: string) {
    return this.username.test(value)
  }

  static isIdCard(value: string) {
    return this.idCard.test(value)
  }

  static isNumber(value: string) {
    return this.number.test(value)
  }
}

/**
 * thanks to copilot for the following regular expressions
 */
export const regexpRecord = {
  phoneNumber: /^1[3-9]\d{9}$/,
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  username: /^[a-zA-Z0-9_-]{4,16}$/,
  idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  number: /^\d+$/
}

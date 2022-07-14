import _ from "lodash"

interface AjaxData {
  [key: string]: unknown
}

/**
 * @param {object} jsObj An object contains keys in camelCase
 * @returns {object} New object with all keys in snake_case
 * @example
 * snakeObject({ my_name: 'Megumin', emailAddress: 'megumin@pm.me' })
 * // => { my_name: 'Megumin', email_address: 'megumin@pm.me' }
 */

export function nestedToRbCase<T = AjaxData>(data: unknown | unknown[]): T {
  let returnValue: unknown = data
  if (Array.isArray(data)) {
    returnValue = data.map(nestedToRbCase)
  } else if (typeof data === "object" && data !== null) {
    returnValue = _.entries(data).reduce<AjaxData>((obj, [key, value]) => {
      const snakeKey = _.snakeCase(key)
      obj[snakeKey] = nestedToRbCase(value)
      return obj
    }, {})
  }
  return returnValue as T
}

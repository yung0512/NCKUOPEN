import _ from "lodash"

export const validation = (obj: object) => {
  for (const [key, value] of Object.entries(obj)) {
    if (_.isEmpty(value)) {
      return false
    }
  }
}

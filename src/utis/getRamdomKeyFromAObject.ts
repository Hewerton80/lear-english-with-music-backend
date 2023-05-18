import { getRandomIntInclusive } from './getRandomIntInclusive'

export const getRamdomKeyFromAObject = (object: object) => {
  const arrayKeys = Object.keys(object) as (keyof typeof object)[]
  return arrayKeys[getRandomIntInclusive(0, arrayKeys.length - 1)]
}

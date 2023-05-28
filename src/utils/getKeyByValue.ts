export const getKeyByValue = (object: { [key: string]: string }, value: string) => {
  const keys = Object.keys(object)
  return keys.find((key) => object[key] === value)
}

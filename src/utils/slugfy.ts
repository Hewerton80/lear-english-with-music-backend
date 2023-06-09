export const slugfy = (text: string) => {
  let result = text.trim().toLowerCase()

  // Remove caracteres especiais e substitui por hífens
  result = result.replace(/[^\w\s-]/g, '')
  result = result.split(' ').join('-')
  // Remove caracteres duplicados de hífens
  result = result.replace(/-+/g, '-')

  return result
}

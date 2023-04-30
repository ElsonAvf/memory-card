export const nextLevel = array => {
  for(let i = 0; i < array.length; i++) {
    if(array[i].click !== 1) return false
  }
  return true
}
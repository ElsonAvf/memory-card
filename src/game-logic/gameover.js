export const gameover = array => {
  for(let i = 0; i < array.length; i++) {
    if(array[i].click > 1) return true
  }
  return false
}
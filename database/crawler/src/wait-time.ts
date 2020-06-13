export function waitTime(mili: number) {
  return new Promise(reslove => setTimeout(reslove, mili))
}
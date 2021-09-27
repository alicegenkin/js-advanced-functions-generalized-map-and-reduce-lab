// Add your functions here
function map(src, callback) {
  const r = [];

  for (let i = 0; i <src.length; i++) {
    const elem = src[i]
    r.push(callback(elem))
  }
  return r
}

function reduce(src,callback) {
for (let i = 0; i <src.length; i++) {
  const elem = src[i]
}
return src + elem 
}

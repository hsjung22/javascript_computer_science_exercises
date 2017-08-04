function productOfArray(array) {
  var copy = array.slice()
  if(copy.length === 1) { return copy.shift() }
  return  copy.shift() * productOfArray(copy)
}

function collectStrings(obj, stringArray = []) {
  for(let value in obj) {
    if(typeof obj[value] === "string") {
      stringArray.push(obj[value])
    } else {
      return collectStrings(obj[value], stringArray)
    }
  }
  return stringArray
}

function contains(nestedObject, value) {
  for(let key in nestedObject) {
    if(nestedObject[key] === value) {
      return true
    } else {
      if(typeof nestedObject[key] === "object") {
        return contains(nestedObject[key], value)
      } else {
        return false
      }
    }
  }
}
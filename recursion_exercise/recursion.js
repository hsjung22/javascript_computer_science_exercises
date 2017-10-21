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

function search(arr, value, index = 0) {

  if(arr.length === index) {
    return -1
  }

  return (
    arr[index] === value
      ? index
      : search(arr, value, index + 1)
  )
}


function binarySearch(arr, value, index = Math.floor((arr.length - 1)/2)) {

  if (arr[index] === value) {
    return index
  }

  if (index === 0 || index === arr.length - 1) {
    return -1
  }

  if (arr[index] > value) {
    const newIndex = Math.floor(index/2)
    return binarySearch(arr, value, newIndex)
  }

  if (arr[index] < value) {
    const newIndex = index + Math.floor((arr.length - index)/2)
    return binarySearch(arr, value, newIndex)
  }
}

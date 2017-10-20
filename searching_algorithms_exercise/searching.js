function linearSearch(arr, val) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === val) { return i; }
  }
  return -1;
}

function linearSearchRecursive(arr, val, index = 0) {
  if(index === arr.length) {
    return -1;
  }
  if(arr[index] === val) {
    return index;
  }
  return linearSearchRecursive(arr, val, index += 1)
}

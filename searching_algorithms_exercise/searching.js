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

function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle;

  while (start <= end) {
    // find middle index
    if (start === end) {
      middle = start;
    } else {
      middle = Math.floor((end - start) / 2) + start;
    }

    // check if the middle index in the value
    if (arr[middle] === val) {
      return middle;
    }

    // declare a start/end
    if (arr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

  }

  return -1;
}

function binarySearchRecursive (arr, val, start = 0, end = arr.length - 1) {
  var middle = Math.floor((end - start) / 2) + start;

  if (start > end) {
    return -1;
  }

  if (arr[middle] === val) {
    return middle;
  }

  if (arr[middle] > val) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }

  return binarySearchRecursive(arr, val, start, end)
}

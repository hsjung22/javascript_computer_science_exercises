function bubbleSort (arr) {
  var hasSwaped = true;
  var hold;

  while (hasSwaped) {
    hasSwaped = false;
    for (var i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i - 1]) {
        hold = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = hold;
        hasSwaped = true;
      }
    }
  }
  return arr;
}

function selectionSort (arr) {
  var min;
  var toSwapIndex;

  for (var i = 0; i < arr.length; i++) {
    min = arr[i];
    toSwapIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        toSwapIndex = j;
      }
    }
    arr[toSwapIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}

function insertionSort(array){
	for(var i = 1; i < array.length; i++){
		var temp = array[i];
		for(var j = i; j > 0 && temp < array[j-1]; j--){
			array[j] = array[j-1];
		}
		array[j] = temp;
	}
	return array;
}

function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function pivot(arr) {
  var pivot = arr[0];
  var lesserArr = [];
  var greaterArr = [];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      lesserArr.push(arr[i])
    } else {
      greaterArr.push(arr[i])
    }
  }

  var pivotArr = [...lesserArr, pivot, ...greaterArr];
  // mutate input arr
  arr.splice(0, arr.length)
  pivotArr.map(val => arr.push(val))

  return pivotArr.indexOf(pivot);
}

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  var pivotIndex = pivot(arr);
  var leftPivot = arr.slice(0, pivotIndex);
  var rightPivot = arr.slice(pivotIndex + 1);
  var pivotValue = arr[pivotIndex];

  return [...quickSort(leftPivot), pivotValue, ...quickSort(rightPivot)];
}

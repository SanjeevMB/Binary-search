var findPeakElement = function (arr) {

    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {

            return i;

        }
    }

    return 0;

}

let findPeakElementResult = findPeakElement([7, 6, 5, 4, 3, 2, 1]);

console.log(findPeakElementResult);
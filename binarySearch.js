function binarySearch(array, size, target) {

    let l = 0;
    let h = size - 1;

    while (l <= h) {

        let mid = Math.floor((l + h) / 2);

        if (array[mid] == target) {

            return mid;

        } else if (array[mid] < target) {

            l = mid + 1;

        } else {

            h = mid - 1;

        }

    }

    return `Element is not in the list`;

}

let binarySearchResult = binarySearch([-2, 3, 6, 7, 9, 12, 34, 56, 78, 90, 345, 456, 678, 765], 14, 765);

console.log(binarySearchResult);
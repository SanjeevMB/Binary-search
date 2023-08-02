var search = function (nums, target) {

    let l = 0;
    let h = nums.length - 1;

    while (l <= h) {

        let mid = Math.floor((l + h) / 2);

        if (nums[mid] == target) {

            return mid;

        } else if (nums[mid] < target) {

            l = mid + 1;

        } else {

            h = mid - 1;

        }

    }

    return -1;

}

let searchResult = search([-1, 0, 3, 5, 9, 12], 9);

console.log(searchResult);
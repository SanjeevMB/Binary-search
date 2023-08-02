var element_search = function (nums, target) {

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == target && i < min) {

            min = i;

        } if (nums[i] == target && i > max) {

            max = i;

        }

    }

    if (min == Infinity && max == -Infinity) {

        return [-1, -1];

    } else {

        return [min, max];

    }

}

let element_searchResult = element_search([5, 7, 7, 8, 8, 8, 8, 8, 8, 10], 8);

console.log(element_searchResult);
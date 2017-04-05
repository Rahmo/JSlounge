function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}
function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

//Sorting quick sort
var myArray = [3, 8, 0, 1, 9, 7, 5];
var sorted = quickSort(myArray, 0, myArray.length - 1);


//Reverese a string 
reverse(myval);
function reverse(value) {
    var splitted = value.split(" ");//without the space it will split the characters
    var   i = 0;
    for (var j = splitted.length - 1; j >= i; j-- ) {
        var temp = splitted[i];
        splitted[i] = splitted[j];
        splitted[j] = temp;
        i++;
    }
}
var myval = "this is a string";


console.log("ddd");

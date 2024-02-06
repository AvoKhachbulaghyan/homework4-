// finde()
function find(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}


// filter() 

function filter(array, callback) {
    const copiedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            copiedArray.push(array[i]);
        }
    }
    return copiedArray;
}

// map() 

function map(array, callback) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

// every()

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// some() 

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}


// findIndex() 

function findIndex(array, match) {
    for (let i = 0; i < array.length; i++) {
        if (match(array[i])) {
            return i;
        }
    }
    return -1;
}

  

// forEach() 

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
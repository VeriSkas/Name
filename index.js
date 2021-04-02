let arr1 = [];
let arr2 = [];

for (i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random() * 1000);
    arr2[i] = Math.floor(Math.random() * 1000);
}

console.log(arr1, arr2);

function transformArray (oneArray, twoArray) {
    let maxNumber = oneArray[0];
    let minNumber = oneArray[0];

    oneArray = oneArray.concat(twoArray);
    console.log(oneArray);
    oneArray.push(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
    console.log(oneArray);

    for (i = 0; i < 11; i++) {
        oneArray[2 * i] = oneArray[2 * i] * 2;
    }

    console.log(oneArray);

    for (i = 0; i < oneArray.length; i++) {
        if (oneArray[i] > maxNumber) {
            maxNumber = oneArray[i];
        }
        if (oneArray[i] < minNumber) {
            minNumber = oneArray[i];
        }
    }
    
    oneArray = oneArray.sort((a, b) => b - a);
    console.log(oneArray, maxNumber, minNumber)
}

transformArray(arr1, arr2);

let string = 'Hello';

const selectPossibleOptions = str => {
    let mainArr = [];
    str.toLowerCase()
        .split('')
        .forEach((elem, i, array) => {
            mainArr.push(array.join(''));
            array.push(array.shift());
        });

    return mainArr;
}

console.log(selectPossibleOptions(string));

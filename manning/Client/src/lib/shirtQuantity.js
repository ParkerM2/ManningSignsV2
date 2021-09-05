// Takes in a number, then returns an array of objects { value: i, label: i} 
// i starts at the number given as a paramter up to 2000

function getNum(x,y) {
        let numArray = []
    for (let i = x; i < y; i++) {
        numArray.push(
           {value: i, label: i,}
        )
    };
    return numArray;
}

export default getNum;
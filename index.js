let A = [1,2,3];
let B = [1,2,3];

function eeMult(A, B) {
    let result = A;
    if (A.length != 1) {
        for (let rowI = 0; rowI < A.length; rowI++) {
            for (let elementI = 0; elementI < A[rowI].length; elementI++) {
                console.log(elementI);
                result[rowI][elementI] = A[rowI][elementI] * B[rowI][elementI];
            }
        }
    } else {
        for (let elementI = 0; elementI < A.length; elementI++) {
            console.log(elementI);
            result[elementI] = A[elementI] * B[elementI];
        }
    }

    return result;
}

// function eeAdd(A, B) {
//     let result;
// }

console.log(eeMult(A, B));
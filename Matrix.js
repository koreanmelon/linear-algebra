import { Vector } from "./Vector.js";

export class Matrix extends Vector {
    
    /**
     * Initializes a matrix.
     * @param {Number[][]} matrixArr 
     */
    constructor(matrixArr) {
        super(...matrixArr);
        this._rows = matrixArr;
        this._linear = [];
        for (let j = 0; j < matrixArr.length; j += 1) {
            for (let i = 0; i < matrixArr[0].length; i += 1) {
                this._linear.push(matrixArr[i][j]);
            }
        }
    }

    /**
     * Getter for the _rows property.
     * @returns {Number[][]}
     */
    get rows() {
        return this._rows;
    }

    /**
     * Returns a string representation of a matrix.
     * @returns {String}
     */
    toString() {
        let res = "";
        for (let row of this) {
            let rowStr = "[";
            for (let entry of row) {
                rowStr += ` ${entry}`;
            }
            rowStr += " ]"
            res += `${rowStr}\n`;
        }
        return res.trimRight();
    }
}
let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(A.toString());
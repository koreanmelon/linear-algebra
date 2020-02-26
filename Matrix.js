import { Vector } from "./Vector.js";

export class Matrix extends Vector {
    
    /**
     * Initializes a matrix.
     * @param {Number[][]} matrixArr 
     */
    constructor(matrixArr) {
        super(...matrixArr);
        this._rows = matrixArr;
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


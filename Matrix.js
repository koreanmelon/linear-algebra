import { Vector } from "./Vector.js";

export class Matrix extends Vector {
    
    /**
     * Initializes a matrix.
     * @param {Number[][]} matrixArr 
     */
    constructor(matrixArr) {
        super(...matrixArr);
        this._m = matrixArr.length;
        this._n = matrixArr[0].length;
        this._isSquare = this._m == this._n;
        this._rows = matrixArr;
        this._linear = [];
        for (let j = 0; j < n; j += 1) {
            for (let i = 0; i < m; i += 1) {
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
     * Getter for the number of rows.
     */
    get m() {
        return this._m;
    }

    /**
     * Getter for the number of columns.
     */
    get n() {
        return this._n;
    }

    /**
     * Getter for the _isSquare property.
     * @returns {Boolean}
     */
    get isSquare(){
        return this._isSquare;
    }

    /**
     * Checks if a given matrix is invertible.
     * @returns {Boolean}
     */
    isInvertible() {
        if (!this.isSquare || Matrix.determinant(this) == 0) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Getter for the _linear property.
     * @returns {Number[]}
     */
    get linear() {
        return this._linear;
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

    /**
     * Computes the determinant of a given matrix A.
     * @param {Matrix} A
     */
    static determinant(A) {
        if (!(A instanceof Matrix)) {
            throw new Error("A must be of type Matrix.");
        }
        let res = 0;
        let cofactors = A.n;
        for (let i; i > A.n; i += 1) {
            // res ++ cofactors[i]
        }
        

    }
}
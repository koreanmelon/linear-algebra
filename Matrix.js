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
        this._size = [this._m, this._n];
        this._isSquare = this._m == this._n;
        this._linear = [];
        for (let j = 0; j < this._n; j += 1) {
            for (let i = 0; i < this._m; i += 1) {
                this._linear.push(matrixArr[i][j]);
            }
        }
    }

    /**
     * Creates a new copy of the matrix and returns it.
     * @returns {Matrix}
     */
    copy() {
        let resArr = [];
        for (let row of this) {
            resArr.push(row);
        }
        return new Matrix(resArr);
    }

    /**
     * Gets the number of rows.
     * @returns {Number}
     */
    get m() {
        return this._m;
    }

    /**
     * Gets the number of columns.
     * @returns {Number}
     */
    get n() {
        return this._n;
    }

    /**
     * Gets the size of the matrix as a 2 element vector [m, n].
     * @returns {Number[]}
     */
    get size() {
        return this._size;
    }

    /**
     * Gets the _isSquare property.
     * @returns {Boolean}
     */
    get isSquare(){
        return this._isSquare;
    }

    /**
     * Gets the _linear property.
     * @returns {Number[]}
     */
    get linear() {
        return this._linear;
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
     * Cycles the matrix.
     */
    cycleMatrix() {
        let res = new Matrix(this);
        for (let row of res) {
            let entry = row.shift();
            row.push(entry);
        }
        return new Matrix(res);
    }

    /**
     * Removes a row from the matrix.
     * @param {Number} rowIndex 
     */
    removeRow(rowIndex) {
        let resArr = [];
        for (let i = 0; i < this.m; i += 1) {
            if (i != rowIndex) {
                resArr.push(this[i]);
            }
        }
        return new Matrix(resArr);
    }

    /**
     * Removes a column from the matrix.
     * @param {Number} colIndex 
     */
    removeCol(colIndex) {
        let resArr = [];
        for (let row of this) {
            let tempRow = []
            for (let i = 0; i < row.length; i += 1) {
                if (i != colIndex) {
                    tempRow.push(row[i]);
                }
            }
            resArr.push(tempRow);
        }
        return new Matrix(resArr);
    }

    /**
     * Computes the determinant of a given matrix A.
     * @param {Matrix} A
     */
    static determinant(A) {
        if (!(A instanceof Matrix)) {
            throw new Error("A must be of type matrix.");
        } else if (!A.isSquare) {
            throw new Error("A must be a square matrix.");
        }
        
        if (A.m == 2 && A.n == 2) {
            return A[0][0] * A[1][1] - A[0][1] * A[1][0];
        } else {
            let res = 0;
            let repeat = A.n;
            let coeff = 1;
            for (let i = 0; i < repeat; i += 1) {
                res += coeff * A[0][i] * this.determinant(A.removeCol(i).removeRow(0));
                coeff *= -1;
            }
            return res;
        }
    }
}

// let A = new Matrix([[1, 0], [0, 1]]);
// console.log(A.toString());
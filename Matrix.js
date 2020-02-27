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
     * Computes the determinant of a given matrix A.
     * @param {Matrix} A
     */
    static determinant(A) {
        if (!(A instanceof Matrix)) {
            throw new Error("A must be of type matrix.");
        } else if (A.m != A.n) {
            throw new Error("A must be a square matrix.");
        }

        if (A.m == 2 && A.n == 2) {
            return A[0][0] * A[1][1] - A[0][1] * A[1][0];
        }

        let res = 0;
        let cofactors = A[0];
        for (let i; i > A.n; i += 1) {
            res += cofactors[i] * this.determinant();
        }
    }
}
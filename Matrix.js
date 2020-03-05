import Vector from "./Vector.js";

export default class Matrix extends Vector {
    
    /**
     * Initializes a matrix.
     * @param {Number[][]} matrixArr The array used to construct a matrix.
     */
    constructor(matrixArr) {
        super(...matrixArr);
        this._size = [matrixArr.length, matrixArr[0].length];
        this._linear = [];
        for (let j = 0; j < this.n; j += 1) {
            for (let i = 0; i < this.m; i += 1) {
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
     * Gets the size of the matrix as a 2 element array [m, n].
     * @returns {Number[]}
     */
    get size() {
        return this._size;
    }

    /**
     * Gets the number of rows.
     * @returns {Number}
     */
    get m() {
        return this.size[0];
    }

    /**
     * Gets the number of columns.
     * @returns {Number}
     */
    get n() {
        return this.size[1];
    }    

    /**
     * Returns if the matrix is square or not.
     * @returns {Boolean}
     */
    get isSquare(){
        return this.m == this.n;
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
     * Returns an array of vectors in this matrix.
     * @returns {void}
     */
    toVector() {
        let resVec = new Vector();
        for (let i = 0; i < this.n; i += 1) {
            resVec.push([]);
        }
        for (let i = 0; i < this.linear.length; i += 1) {
            resVec[i % this.n].push(this.linear[i]);
        }
        return resVec;
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

    /**
     * Multiplies this matrix with a vector U.
     * @param {Vector} u
     */
    multiply(u) {
        if (this.n != u.length) {
            throw new Error("Invalid Dimensions");
        }
        let resVec = new Vector();
        for (let ui = 0; ui < u.length; ui += 1) {
            resVec.push(0);
        }
        
        for (let i = 0; i < this.m; i += 1) {
            for (let j = 0; j < this.n; j += 1) {
                resVec[i] += this[i][j] * u[j];
            }
        }
        return resVec;
    }

    /**
     * An implementation of matrix multiplication.
     * @param {Matrix} A 
     * @param {Matrix} B 
     * @returns {Matrix}
     */
    static multiply(A, B) {
        let BVec = B.toVector();
        let resArr = [];
        for (let vector of BVec) {
            resArr.push(A.multiply(vector).toArray());
        }
        return new Matrix(resArr);
    }

    /**
     * Swaps two rows ROW0 and ROW1 in this matrix.
     * @param {Number} row0
     * @param {Number} row1
     * @returns {Matrix}
     */
    swap(row0, row1) {
        let tempRow = this[row0];
        this[row0] = this[row1];
        this[row1] = tempRow;
        return this;
    }

    /**
     * Adds two rows ROW0 and ROW1 together, scales the first by a scalar SCALAR, and replaces the second with the sum.
     * @param {Number} row0 
     * @param {Number} row1 
     * @param {Number scalar 
     */
    replace(row0, row1, scalar) {
        let tempVec0 = new Vector(...this[row0]);
        let tempVec1 = new Vector(...this[row1]);
        this[row1] = Vector.add(tempVec0.scalarMul(scalar), tempVec1).toArray();
        return this;
    }

    /**
     * Scales the row of this matrix at ROWINDEX by a scalar SCALAR.
     * @param {Number} rowIndex the row index to scale
     * @param {Number} scalar the number to scale by
     * @returns {Matrix}
     */
    scale(rowIndex, scalar) {
        let tempVec = new Vector(...this[rowIndex]);
        this[rowIndex] = tempVec.scalarMul(scalar).toArray();
        return this
    }

    /**
     * Performs row operations to return this matrix in row echelon form.
     */
    toREF() {
        let refMatrix = this.copy();

        // Make sure the first entry of the first row is not 0.
        let swapIndex = 1;
        while (refMatrix[0][0] == 0 && swapIndex < refMatrix.m) {
            refMatrix.swap(0, swapIndex);
            swapIndex += 1;
        }

        for (let colIndex = 0; colIndex < refMatrix.n; colIndex += 1) {
            for (let rowIndex = colIndex + 1; rowIndex < refMatrix.m; rowIndex += 1) {
                refMatrix.replace(colIndex, rowIndex, (-1) * refMatrix[rowIndex][colIndex] / refMatrix[colIndex][colIndex]);
            }
        }

        return refMatrix.copy();
    }

    /**
     * Performs row operations to return this matrix in reduced row echelon form.
     */
    toRREF() {
        let rrefMatrix = this.toREF();

        let pivots = [];

        for (let rowIndex = 0; rowIndex < rrefMatrix.m; rowIndex += 1) {
            for (let colIndex = 0; colIndex < rrefMatrix.n; colIndex += 1) {
                if (rrefMatrix[rowIndex][colIndex] != 0) {
                    pivots.push([rowIndex, colIndex]);
                    break;
                }
            }
        }

        for (let pivot of pivots) {
            rrefMatrix.scale(pivot[0], 1 / rrefMatrix[pivot[0]][pivot[1]]);
        }
        
        /**
         * Flips a matrix.
         * @param {Matrix} A 
         */
        function flipMatrix(A) {
            for (let first = 0, last = A.m - 1; first <= Math.floor(A.m / 2); first += 1, last -= 1) {
                A.swap(first, last);
            }

            for (let row of A) {
                row = row.reverse();
            }

            return A;
        }

        rrefMatrix = flipMatrix(flipMatrix(rrefMatrix).toREF());
        for (let i = 0; i < rrefMatrix.m; i += 1) {
            for (let j = 0; j < rrefMatrix.n; j += 1) {
                if (Object.is(rrefMatrix[i][j], -0)) {
                    rrefMatrix[i][j] = 0;
                }
            }
        }
        return rrefMatrix.copy();
    }
}
export class Vector extends Array {

    /**
     * Initializes a vector.
     * @param  {...Number} items 
     */
    constructor(...items) {
        super(...items);
    }

    /**
     * Returns a string representation of the vector.
     * @returns {String}
     */
    toString() {
        let res = "[";
        for (let entry of this) {
            res += ` ${entry}\n `;
        }
        return res.trimRight() + " ]";
    }

    /**
     * Returns a vector multiplied by a scalar C.
     * @param {Number} c 
     * @returns {Vector}
     */
    scalarMul(c) {
        let res = new Vector();
        for (let entry of this) {
            res.push(entry * c);
        }
        return res;
    }

    /**
     * Adds an arbitrary number of vectors.
     * @param  {...Vector} vectors 
     * @returns {Vector}
     */
    static add(...vectors) {
        let res = vectors.pop();
        for (let vector of vectors) {
            if (vector.length != res.length) {
                throw new Error("invalid vector dimensions");
            }
            for (let pos = 0; pos < vector.length; pos += 1) {
                res[pos] += vector[pos];
            }
        }
        return res;
    }
}

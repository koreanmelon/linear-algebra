export class Vector extends Array {

    /**
     * Initializes a Vector
     * @param  {...Number} items 
     */
    constructor(...items) {
        super(...items);
    }

    /**
     * Gives a String representation of the Vector
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
     * Adds an arbitrary number of Vectors
     * @param  {...Vector} vectors 
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

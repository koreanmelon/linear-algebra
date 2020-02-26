import assert from "assert";
import "./Vector.js";
import { Vector } from "./Vector.js";


export default class VectorTest {

    static testToString() {
        let v1 = new Vector(1, 2, 3, 4);

        assert(v1.toString() == "[ 1\n  2\n  3\n  4 ]");
    }

    static testAdd() {
        let v1 = new Vector(1, 2, 3);
        let v2 = new Vector(3, 2, 1);
        let v3 = new Vector(1, 1, 1);

        let res = new Vector(5, 5, 5);

        assert(Vector.add(v1, v2, v3).toString() == res.toString());
    }

    /**
     * Executes all tests and returns statistics.
     * @returns {void}
     */
    static main() {
        let testArray = [this.testAdd, this.testToString];
        
        for (let test of testArray) {
            test();
        }
    }
}

VectorTest.main();
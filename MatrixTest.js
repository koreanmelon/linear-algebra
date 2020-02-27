import assert from "assert";
import { Matrix } from "./Matrix.js";

class MatrixTest {

    static testToString() {
        let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

        assert(A.toString() == "[ 1 0 0 ]\n[ 0 1 0 ]\n[ 0 0 1 ]");
    }

    static testDeterminant() {
        
    }
    
    /**
     * Executes all tests for class Matrix.
     * @returns {void}
     */
    static main() {
        let testArray = [this.testToString];
        let passed = 0;
        let failed = 0;
        for (let test of testArray) {
            test();
        }
    }
}

MatrixTest.main();
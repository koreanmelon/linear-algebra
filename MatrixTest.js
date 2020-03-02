// import { equal } from "assert";
import { Matrix } from "./Matrix.js";

class MatrixTest {

    static testToString() {
        let test = true;

        let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        
        let testCases = [[A.toString(), "[ 1 0 0 ]\n[ 0 1 0 ]\n[ 0 0 1 ]"]];

        for (let testCase of testCases) {
            if (testCase[0] != testCase[1]) {
                test = false;
            }
        }
        return test;
    }

    static testDeterminant() {
        let test = true;

        let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        let B = new Matrix([[1, 2, 3, 10], [5, 6, 7, 8], [9, 2, 3, 12], [13, 1, 15, 17]]);
        let C = new Matrix([[1, 2], [2, 3]]);

        let testCases = [[Matrix.determinant(A), 1], [Matrix.determinant(B), 4576], [Matrix.determinant(C), -1]];

        for (let testCase of testCases) {
            if (testCase[0] != testCase[1]) {
                test = false;
            }
        }
        return test;
    }

    /**
     * Executes all tests for class Matrix.
     * @returns {void}
     */
    static main() {
        let testArray = [this.testToString, this.testDeterminant];
        let passed = 0;
        let failed = 0;
        for (let test of testArray) {
            if (test()) {
                passed += 1;
            } else {
                failed += 1;
            }
        }
        console.log(`Passed: ${passed}\nFailed: ${failed}`);
    }
}

MatrixTest.main();
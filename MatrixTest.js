/* eslint-disable sort-keys */
// import { equal } from "assert";
import Matrix from "./Matrix.js";

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

    static testMultiply() {
        // let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        // let B = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        // let u = new Vector(1, 0, 0);


    }

    static testSwap() {
        let A = new Matrix([[2, 3, 4], [1, 2, 3], [1, 2, 3]]);
        
        let test = true;
        let testCases = [[A.swap(0, 1), new Matrix([[1, 2, 3], [2, 3, 4], [1, 2, 3]])]];

        for (let testCase of testCases) {
            if (testCase[0].toString() != testCase[1].toString()) {
                test = false;
            }
        }
        return test;
    }

    static testReplace() {
        let A = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        
        let test = true;
        let testCases = [[A.replace(0, 1, -1), new Matrix([[1, 2, 3], [0, 0, 0], [1, 2, 3]])]];

        for (let testCase of testCases) {
            if (testCase[0].toString() != testCase[1].toString()) {
                test = false;
            }
        }
        return test;
    }

    static testScale() {
        let A = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        
        let test = true;
        let testCases = [[A.scale(1, 3), new Matrix([[1, 2, 3], [3, 6, 9], [1, 2, 3]])]];

        for (let testCase of testCases) {
            if (testCase[0].toString() != testCase[1].toString()) {
                test = false;
            }
        }
        return test;
    }

    static testToREF() {
        let A = new Matrix([[1, 1, 1], [3, 2, 0], [4, 1, 1]]);

        let test = true;
        let testCases = [[A.toREF(), new Matrix([[1, 1, 1], [0, -1, -3], [0, 0, 6]])]];
        // let failedCases = [];

        for (let testCase of testCases) {
            if (testCase[0].toString() != testCase[1].toString()) {
                test = false;
                // failedCases.push(testCase);
            }
        }
        return test;
    }

    /**
     * Executes all tests for class Matrix.
     * @returns {void}
     */
    static main() {
        let testArray = [this.testToString, this.testDeterminant, this.testSwap, this.testReplace, this.testScale, this.testToREF];
        let passed = 0;
        let failed = 0;
        for (let test of testArray) {
            if (test()) {
                passed += 1;
            } else {
                console.log(test)
                failed += 1;
            }
        }
        console.log(`Passed: ${passed}\nFailed: ${failed}`);
    }
}

MatrixTest.main();
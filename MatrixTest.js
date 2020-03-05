/* eslint-disable sort-keys */
// import { equal } from "assert";
import Matrix from "./Matrix.js";
import "nodejs-unit-testing";
import JSUnit from "nodejs-unit-testing";

class MatrixTest {

    static testToString() {
        let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

        JSUnit.assertEquals("[ 1 0 0 ]\n[ 0 1 0 ]\n[ 0 0 1 ]", A.toString());

    }

    static testDeterminant() {

        let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        let B = new Matrix([[1, 2, 3, 10], [5, 6, 7, 8], [9, 2, 3, 12], [13, 1, 15, 17]]);
        let C = new Matrix([[1, 2], [2, 3]]);

        JSUnit.assertEquals(1, Matrix.determinant(A));
        JSUnit.assertEquals(4576, Matrix.determinant(B));
        JSUnit.assertEquals(-1, Matrix.determinant(C));

    }

    static testMultiply() {
        // let A = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        // let B = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        // let u = new Vector(1, 0, 0);

    }

    static testSwap() {
        let A = new Matrix([[2, 3, 4], [1, 2, 3], [1, 2, 3]]);

        JSUnit.assertObjectEquals(new Matrix([[1, 2, 3], [2, 3, 4], [1, 2, 3]]), A.swap(0, 1));

    }

    static testReplace() {
        let A = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

        JSUnit.assertObjectEquals(new Matrix([[1, 2, 3], [0, 0, 0], [1, 2, 3]]), A.replace(0, 1, -1))

    }

    static testScale() {
        let A = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

        JSUnit.assertObjectEquals(A.scale(1, 3), new Matrix([[1, 2, 3], [3, 6, 9], [1, 2, 3]]));

    }

    static testToREF() {
        let A = new Matrix([[1, 1, 1], [3, 2, 0], [4, 1, 1]]);

        JSUnit.assertObjectEquals(new Matrix([[1, 1, 1], [0, -1, -3], [0, 0, 6]]), A.toREF());

    }
}
JSUnit.test(MatrixTest, { "mutePassed": true });
import { upDateUI } from "../src/client";

describe("Testing the asyncFunction functionality", () => {
    test("Testing the postData() function", () => {
        return upDateUI().then((result) => {
            expect(result.subjectivity).toBe('OBJECTIVE');
        });
    });
});
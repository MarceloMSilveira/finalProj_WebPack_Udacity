const url = 'http://localhost:8051/dataPost';
const data = {userResp: 'i love you'};

import { postData } from "../src/client";

describe("Testing the asyncFunction functionality", () => {
    test("Testing the postData() function", () => {
      return postData(url,data).then((result) => {
        expect(result.subjectivity).toBe('OBJECTIVE');
      });
    });
  });

import { processJson } from "../src/utils";

describe("processJson", () => {
  it("transforms event data as expected", () => {
    const inputData = {
      ts: 1234567890,
      u: "https://www.test.com/products/productA.html?a=5435&b=test#reviews",
      e: [
        { et: "dl", n: "utag_data", u: { page_name: "store", store_id: 115 } },
        { et: "ur" }
      ]
    };

    const expectedOutput = [
      {
        timestamp: 1234567890,
        url_object: {
          domain: "www.test.com",
          path: "/products/productA.html",
          query_object: { a: "5435", b: "test" },
          hash: "#reviews"
        },
        ec: { et: "dl", n: "utag_data", u: { page_name: "store", store_id: 115 } }
      },
      {
        timestamp: 1234567890,
        url_object: {
          domain: "www.test.com",
          path: "/products/productA.html",
          query_object: { a: "5435", b: "test" },
          hash: "#reviews"
        },
        ec: { et: "ur" }
      }
    ];

    const result = processJson(inputData);

    expect(result).toEqual(expectedOutput);
  });
});

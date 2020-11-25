import { sum } from "./test 1.1";

describe("positive", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1 + 2)).toBe(3);
  }); 
});

import { mult } from "./test 1.1";

describe("positive", () => {
    
    it("adds 1 * 2 to equal 2", () => {
      expect(mult(1 * 2)).toBe(2);
    });  
  });
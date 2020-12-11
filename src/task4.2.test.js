/* eslint-disable no-console */
import { addNewProperty } from "./task4.2";

describe("addNewProperty", () => {
  it("addNewProperty", () => {
    const admin = addNewProperty();
    expect(admin.role).toEqual("admin");
  });
});

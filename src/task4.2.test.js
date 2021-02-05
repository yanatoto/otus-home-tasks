import { addNewProperty } from "./task4.2";

describe("addNewProperty", () => {
  it("adds new property to object admin", () => {
    const admin = addNewProperty();
    expect(admin.role).toEqual("admin");
  });
});

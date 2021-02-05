import { getDestructuredElements } from "./task4.3";

describe("getDestructuredElements", () => {
  it("compares the properties with the new variables", () => {
    const admin = {
      name: "John",
      age: 25,
      role: "admin",
    };

    getDestructuredElements();

    expect(admin.role).toEqual("admin");
  });
});

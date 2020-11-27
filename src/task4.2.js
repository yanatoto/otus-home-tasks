const user = {
  name: "John",
};

const age = +prompt("Enter your age: ");
user.age = age;

const admin = { ...user };
admin.role = "admin";

console.log(admin);

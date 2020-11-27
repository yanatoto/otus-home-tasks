let user = {
    name: 'John'
}

let age = +prompt("Enter your age: ");
user.age = age;

let admin = Object.assign({}, user);
admin.role = 'admin';

console.log(admin);
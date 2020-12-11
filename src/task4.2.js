// Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением
// ‘admin’.

export function addNewProperty() {
  const user = {
    name: "John",
    age: 25,
  };

  const admin = { ...user };
  admin.role = "admin";

  return admin;
}

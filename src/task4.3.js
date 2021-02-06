// Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.
export function getDestructuredElements() {
  const admin = {
    name: "John",
    age: 25,
    role: "admin",
  };

  const { name, age, role } = admin;

  return [name, age, role];
}

import employees from "@/data/employees.json";

export function getEmployees() {
  return employees;
}

export function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

export function getEmployeeBySlug(slug) {
  return employees.find((employee) => employee.slug === slug);
}

export function getPublicEmployees() {
  return employees.filter(
    (employee) =>
      employee.status === "active" && employee.publicProfile === true,
  );
}

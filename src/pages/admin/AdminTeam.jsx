import { useMemo, useState } from "react";
import { getEmployees } from "@/services/employeeService";
import EmployeeFilters from "@/components/team/EmployeeFilters";
import EmployeeAdminCard from "@/components/team/EmployeeAdminCard";
import EmployeeForm from "@/components/team/EmployeeForm";
export default function AdminTeam() {
  const [employees, setEmployees] = useState(() => getEmployees());
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [location, setLocation] = useState("all");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isCreatingEmployee, setIsCreatingEmployee] = useState(false);
  const roles = useMemo(
    () => [...new Set(employees.map((employee) => employee.role))].sort(),
    [employees],
  );

  const locations = useMemo(
    () => [...new Set(employees.map((employee) => employee.location))].sort(),
    [employees],
  );

  const filteredEmployees = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch =
        !normalizedSearch ||
        employee.name.toLowerCase().includes(normalizedSearch) ||
        employee.role.toLowerCase().includes(normalizedSearch) ||
        employee.location.toLowerCase().includes(normalizedSearch);

      const matchesRole = role === "all" || employee.role === role;

      const matchesAvailability =
        availability === "all" || employee.availability === availability;

      const matchesLocation =
        location === "all" || employee.location === location;

      return (
        matchesSearch && matchesRole && matchesAvailability && matchesLocation
      );
    });
  }, [employees, search, role, availability, location]);

  return (
    <main className="min-h-screen bg-[#F9FAF9] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Administration
            </p>

            <h1 className="text-4xl md:text-5xl font-heading text-[#1A1A1A]">
              Team
            </h1>

            <p className="mt-3 text-[#1A1A1A]/60">
              Manage your cleaning team and employee profiles.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsCreatingEmployee(true)}
            className="px-5 py-2.5 rounded-xl bg-[#2E7D32] text-white text-sm font-medium hover:bg-[#256628] transition-colors"
          >
            Add Employee
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-2xl border border-[#2E7D32]/10 p-5">
            <p className="text-sm text-[#1A1A1A]/50">Total Employees</p>

            <p className="text-3xl font-heading text-[#1A1A1A] mt-1">
              {employees.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#2E7D32]/10 p-5">
            <p className="text-sm text-[#1A1A1A]/50">Available</p>

            <p className="text-3xl font-heading text-[#1A1A1A] mt-1">
              {
                employees.filter(
                  (employee) => employee.availability === "available",
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#2E7D32]/10 p-5">
            <p className="text-sm text-[#1A1A1A]/50">Public Profiles</p>

            <p className="text-3xl font-heading text-[#1A1A1A] mt-1">
              {
                employees.filter(
                  (employee) =>
                    employee.publicProfile === true &&
                    employee.status === "active",
                ).length
              }
            </p>
          </div>
        </div>
        <EmployeeFilters
          search={search}
          onSearchChange={setSearch}
          role={role}
          onRoleChange={setRole}
          availability={availability}
          onAvailabilityChange={setAvailability}
          location={location}
          onLocationChange={setLocation}
          roles={roles}
          locations={locations}
        />
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#1A1A1A]/50">
            Showing{" "}
            <span className="font-medium text-[#1A1A1A]">
              {filteredEmployees.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#1A1A1A]">
              {employees.length}
            </span>{" "}
            employees
          </p>
        </div>
        {/* Employee list */}
        <div className="grid gap-4">
          <div className="grid gap-4">
            {filteredEmployees.map((employee) => (
              <EmployeeAdminCard
                key={employee.id}
                employee={employee}
                onEdit={(employee) => {
                  setEditingEmployee(employee);
                }}
                onDelete={(employee) => {
                  const confirmed = window.confirm(
                    `Are you sure you want to delete ${employee.name}?`,
                  );

                  if (!confirmed) {
                    return;
                  }

                  setEmployees((currentEmployees) =>
                    currentEmployees.filter(
                      (currentEmployee) => currentEmployee.id !== employee.id,
                    ),
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {isCreatingEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCreatingEmployee(false)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                  Employee
                </p>

                <h2 className="text-2xl md:text-3xl font-heading text-[#1A1A1A]">
                  Add Employee
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsCreatingEmployee(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <EmployeeForm
              employee={null}
              onCancel={() => setIsCreatingEmployee(false)}
              onSubmit={(newEmployee) => {
                const employeeWithId = {
                  ...newEmployee,
                  id: crypto.randomUUID(),
                };

                setEmployees((currentEmployees) => [
                  ...currentEmployees,
                  employeeWithId,
                ]);

                setIsCreatingEmployee(false);
              }}
            />
          </div>
        </div>
      )}
      {editingEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setEditingEmployee(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                  Employee
                </p>

                <h2 className="text-2xl md:text-3xl font-heading text-[#1A1A1A]">
                  Edit Employee
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setEditingEmployee(null)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <EmployeeForm
              employee={editingEmployee}
              onCancel={() => setEditingEmployee(null)}
              onSubmit={(updatedEmployee) => {
                setEmployees((currentEmployees) =>
                  currentEmployees.map((employee) =>
                    employee.id === updatedEmployee.id
                      ? updatedEmployee
                      : employee,
                  ),
                );

                setEditingEmployee(null);
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

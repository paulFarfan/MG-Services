export default function EmployeeFilters({
  search,
  onSearchChange,
  role,
  onRoleChange,
  availability,
  onAvailabilityChange,
  location,
  onLocationChange,
  roles,
  locations,
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#2E7D32]/10 p-5 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-1">
          <label
            htmlFor="employee-search"
            className="block text-sm font-medium text-[#1A1A1A] mb-2"
          >
            Search
          </label>

          <input
            id="employee-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search employees..."
            className="w-full h-11 px-4 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm outline-none focus:border-[#2E7D32]/40 focus:ring-2 focus:ring-[#2E7D32]/10"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="employee-role"
            className="block text-sm font-medium text-[#1A1A1A] mb-2"
          >
            Role
          </label>

          <select
            id="employee-role"
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm outline-none focus:border-[#2E7D32]/40 focus:ring-2 focus:ring-[#2E7D32]/10"
          >
            <option value="all">All roles</option>

            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Availability */}
        <div>
          <label
            htmlFor="employee-availability"
            className="block text-sm font-medium text-[#1A1A1A] mb-2"
          >
            Availability
          </label>

          <select
            id="employee-availability"
            value={availability}
            onChange={(event) => onAvailabilityChange(event.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm outline-none focus:border-[#2E7D32]/40 focus:ring-2 focus:ring-[#2E7D32]/10"
          >
            <option value="all">All availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="employee-location"
            className="block text-sm font-medium text-[#1A1A1A] mb-2"
          >
            Location
          </label>

          <select
            id="employee-location"
            value={location}
            onChange={(event) => onLocationChange(event.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm outline-none focus:border-[#2E7D32]/40 focus:ring-2 focus:ring-[#2E7D32]/10"
          >
            <option value="all">All locations</option>

            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

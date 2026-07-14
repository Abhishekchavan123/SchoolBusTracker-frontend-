import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

export default function DriverList() {
  const drivers = [
    {
      id: "DR001",
      name: "Mahesh",
      phone: "9876543210",
      email: "mahesh@gmail.com",
      license: "KA012345678",
      bus: "KA32AB1234",
      status: "Active",
    },
    {
      id: "DR002",
      name: "Ravi",
      phone: "9876543211",
      email: "ravi@gmail.com",
      license: "KA012345679",
      bus: "KA32CD5678",
      status: "Active",
    },
    {
      id: "DR003",
      name: "Suresh",
      phone: "9876543212",
      email: "suresh@gmail.com",
      license: "KA012345680",
      bus: "KA32EF9012",
      status: "Inactive",
    },
  ];

  return (
    <div>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">Drivers</h1>

          <p className="text-gray-500 mt-1">
            Manage all registered drivers
          </p>
        </div>

        <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow">
          Total Drivers : {drivers.length}
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 mb-6">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search driver..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">License</th>
              <th className="p-4 text-left">Bus Number</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {drivers.map((driver) => (

              <tr
                key={driver.id}
                className="border-b hover:bg-blue-50 transition"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                      {driver.name.charAt(0)}
                    </div>

                    <span className="font-semibold">
                      {driver.name}
                    </span>

                  </div>

                </td>

                <td className="p-4">{driver.id}</td>

                <td className="p-4">{driver.phone}</td>

                <td className="p-4">{driver.email}</td>

                <td className="p-4">{driver.license}</td>

                <td className="p-4">{driver.bus}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      driver.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {driver.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button className="text-blue-600 hover:scale-110 transition">
                      <FaEye />
                    </button>

                    <button className="text-green-600 hover:scale-110 transition">
                      <FaEdit />
                    </button>

                    <button className="text-red-600 hover:scale-110 transition">
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}
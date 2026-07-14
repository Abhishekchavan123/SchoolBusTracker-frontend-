import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaBus,
} from "react-icons/fa";

export default function BusList() {
  const buses = [
    {
      id: "BUS001",
      number: "KA32AB1234",
      name: "School Bus 1",
      model: "Ashok Leyland",
      capacity: 50,
      driver: "Mahesh",
      school: "ABC Public School",
      route: "R-101",
      gps: "GPS-001",
      status: "Active",
    },
    {
      id: "BUS002",
      number: "KA32CD5678",
      name: "School Bus 2",
      model: "Tata Starbus",
      capacity: 45,
      driver: "Ravi",
      school: "ABC Public School",
      route: "R-102",
      gps: "GPS-002",
      status: "On Trip",
    },
    {
      id: "BUS003",
      number: "KA32EF9012",
      name: "School Bus 3",
      model: "Eicher Skyline",
      capacity: 40,
      driver: "Suresh",
      school: "XYZ International",
      route: "R-201",
      gps: "GPS-003",
      status: "Maintenance",
    },
  ];

  return (
    <div>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Bus List</h1>

          <p className="text-gray-500 mt-1">
            Manage all registered school buses
          </p>
        </div>

        <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow">
          Total Buses : {buses.length}
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 mb-6">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search bus..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Bus</th>
              <th className="p-4 text-left">Bus No.</th>
              <th className="p-4 text-left">Model</th>
              <th className="p-4 text-left">Capacity</th>
              <th className="p-4 text-left">School</th>
              <th className="p-4 text-left">Route</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">GPS ID</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {buses.map((bus) => (

              <tr
                key={bus.id}
                className="border-b hover:bg-blue-50 transition"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                      <FaBus />
                    </div>

                    <span className="font-semibold">
                      {bus.name}
                    </span>

                  </div>

                </td>

                <td className="p-4">{bus.number}</td>

                <td className="p-4">{bus.model}</td>

                <td className="p-4">{bus.capacity}</td>

                <td className="p-4">{bus.school}</td>

                <td className="p-4">{bus.route}</td>

                <td className="p-4">{bus.driver}</td>

                <td className="p-4">{bus.gps}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      bus.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : bus.status === "On Trip"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {bus.status}
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
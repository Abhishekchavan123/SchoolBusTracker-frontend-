import {
  FaSchool,
  FaSearch,
  FaDownload,
  FaSyncAlt,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function SchoolList() {
  const schools = [
    {
      id: 1,
      schoolName: "Green Valley Public School",
      email: "info@greenvalley.edu.in",
      phone: "9876543210",
      principal: "Mr. Ramesh Kumar",
      city: "Bengaluru",
      state: "Karnataka",
      address: "Whitefield, Bengaluru - 560066",
      students: 1350,
      buses: 24,
      status: "Active",
    },
    {
      id: 2,
      schoolName: "Delhi Public School",
      email: "contact@dpsbangalore.edu.in",
      phone: "9876543211",
      principal: "Mrs. Anitha Sharma",
      city: "Bengaluru",
      state: "Karnataka",
      address: "Electronic City, Bengaluru - 560100",
      students: 1625,
      buses: 30,
      status: "Active",
    },
    {
      id: 3,
      schoolName: "National High School",
      email: "admin@nationalhighschool.edu.in",
      phone: "9876543212",
      principal: "Mr. Suresh Babu",
      city: "Mysuru",
      state: "Karnataka",
      address: "Vijayanagar, Mysuru - 570017",
      students: 940,
      buses: 18,
      status: "Pending",
    },
    {
      id: 4,
      schoolName: "Oxford International School",
      email: "info@oxfordschool.edu.in",
      phone: "9876543213",
      principal: "Mrs. Priya Nair",
      city: "Hubballi",
      state: "Karnataka",
      address: "Vidyanagar, Hubballi - 580021",
      students: 780,
      buses: 12,
      status: "Inactive",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl p-8 shadow-lg flex flex-col lg:flex-row justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Schools Management
          </h1>

          <p className="text-blue-100 mt-2 text-lg">
            Manage all registered schools across the platform.
          </p>

        </div>

        <button className="mt-6 lg:mt-0 bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition">
          + Add School
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">
          <FaSchool className="text-4xl text-blue-600 mb-4" />
          <p className="text-gray-500">Total Schools</p>
          <h2 className="text-4xl font-bold mt-2">52</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <FaCheckCircle className="text-4xl text-green-600 mb-4" />
          <p className="text-gray-500">Active Schools</p>
          <h2 className="text-4xl font-bold mt-2">48</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <FaClock className="text-4xl text-yellow-500 mb-4" />
          <p className="text-gray-500">Pending</p>
          <h2 className="text-4xl font-bold mt-2">3</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <FaTimesCircle className="text-4xl text-red-500 mb-4" />
          <p className="text-gray-500">Inactive</p>
          <h2 className="text-4xl font-bold mt-2">1</h2>
        </div>

      </div>

      {/* Toolbar */}

      <div className="bg-white rounded-2xl shadow p-5">

        <div className="flex flex-col lg:flex-row gap-4 justify-between">

          <div className="flex items-center border rounded-xl px-4 flex-1">

            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search schools..."
              className="w-full p-3 outline-none"
            />

          </div>

          <div className="flex gap-3 flex-wrap">

            <select className="border rounded-xl px-4">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>

            <select className="border rounded-xl px-4">
              <option>All Cities</option>
              <option>Bengaluru</option>
              <option>Mysuru</option>
              <option>Hubballi</option>
            </select>

            <button className="bg-green-600 text-white px-5 rounded-xl flex items-center gap-2 hover:bg-green-700">
              <FaDownload />
              Export
            </button>

            <button className="bg-blue-600 text-white px-5 rounded-xl flex items-center gap-2 hover:bg-blue-700">
              <FaSyncAlt />
              Refresh
            </button>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">School</th>
              <th className="p-4 text-left">Principal</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-center">Students</th>
              <th className="p-4 text-center">Buses</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>          {schools.map((school) => (
            <tr
              key={school.id}
              className="border-b hover:bg-blue-50 transition duration-300"
            >
              {/* School */}

              <td className="p-5">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                    {school.schoolName.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {school.schoolName}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {school.email}
                    </p>
                  </div>

                </div>
              </td>

              {/* Principal */}

              <td className="p-5">
                <div>
                  <p className="font-medium">{school.principal}</p>
                  <p className="text-sm text-gray-500">{school.phone}</p>
                </div>
              </td>

              {/* City */}

              <td className="p-5">
                <div>
                  <p>{school.city}</p>
                  <p className="text-sm text-gray-500">
                    {school.state}
                  </p>
                </div>
              </td>

              {/* Students */}

              <td className="text-center p-5">
                <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                  {school.students}
                </span>
              </td>

              {/* Buses */}

              <td className="text-center p-5">
                <span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg font-semibold">
                  {school.buses}
                </span>
              </td>

              {/* Status */}

              <td className="text-center p-5">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    school.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : school.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {school.status}
                </span>

              </td>

              {/* Actions */}

              <td className="p-5">

                <div className="flex justify-center gap-2">

                  <button className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 hover:bg-sky-200 flex items-center justify-center">
                    <FaEye />
                  </button>

                  <button className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 flex items-center justify-center">
                    <FaEdit />
                  </button>

                  <button className="w-10 h-10 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 flex items-center justify-center">
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>
          ))}</tbody>
        </table>
                    

        

        {/* Bottom Bar */}

        <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-5 border-t bg-gray-50">

          <p className="text-gray-600 text-sm">
            Showing <span className="font-semibold">1 - 4</span> of{" "}
            <span className="font-semibold">52</span> Schools
          </p>

          <div className="flex items-center gap-2 mt-4 lg:mt-0">

            <button className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
              Previous
            </button>

            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
              1
            </button>

            <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
              2
            </button>

            <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
              3
            </button>

            <button className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
              Next
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-2xl shadow-lg text-white">

        <div className="flex flex-col lg:flex-row justify-between items-center p-8">

          <div>

            <h2 className="text-2xl font-bold">
              SchoolBusTracker SaaS
            </h2>

            <p className="text-blue-100 mt-2">
              Super Admin • School Management
            </p>

          </div>

          <div className="flex gap-10 mt-6 lg:mt-0">

            <div className="text-center">
              <h3 className="text-3xl font-bold">52</h3>
              <p className="text-blue-100 text-sm">
                Registered Schools
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">48</h3>
              <p className="text-blue-100 text-sm">
                Active Schools
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-blue-100 text-sm">
                System Uptime
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
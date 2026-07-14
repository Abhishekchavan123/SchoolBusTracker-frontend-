import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

export default function StudentList() {
  const students = [
    {
      id: "ST001",
      name: "Rahul",
      class: "10th",
      parent: "Ramesh",
      phone: "9876543210",
      driver: "Mahesh",
      school: "ABC Public School",
      status: "Active",
    },
    {
      id: "ST002",
      name: "Priya",
      class: "8th",
      parent: "Suresh",
      phone: "9876543211",
      driver: "Ravi",
      school: "ABC Public School",
      status: "Active",
    },
    {
      id: "ST003",
      name: "Arjun",
      class: "6th",
      parent: "Kiran",
      phone: "9876543212",
      driver: "Mahesh",
      school: "XYZ International",
      status: "Inactive",
    },
    {
      id: "ST004",
      name: "Sneha",
      class: "9th",
      parent: "Anita",
      phone: "9876543213",
      driver: "Ravi",
      school: "XYZ International",
      status: "Active",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Students</h1>
          <p className="text-gray-500 mt-1">
            Manage all registered students
          </p>
        </div>

        <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow">
          Total Students : {students.length}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 mb-6">

        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search student..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">School</th>
              <th className="p-4 text-left">Parent</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-blue-50 transition"
              >

                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                      {student.name.charAt(0)}
                    </div>

                    <span className="font-semibold">
                      {student.name}
                    </span>

                  </div>
                </td>

                <td className="p-4">{student.id}</td>

                <td className="p-4">{student.class}</td>

                <td className="p-4">{student.school}</td>

                <td className="p-4">{student.parent}</td>

                <td className="p-4">{student.phone}</td>

                <td className="p-4">{student.driver}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
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
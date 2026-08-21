import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import API_URL from "../api";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const loggedSchool = JSON.parse(localStorage.getItem("de_authUser"));
  const [student, setStudent] = useState({
    student_name: "",
    parent_name: "",
    parent_phone: "",
    school_id: loggedSchool?.school_id || "",
    bus_id: "",
    pickup_point: "",
    drop_point: "",
  });

  const [buses, setBuses] = useState([]);

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`${API_URL}/students/${id}`);
      const studentData = res.data.student;

      // Security check
      if (studentData.school_id !== loggedSchool.school_id) {
        alert("Unauthorized access");
        navigate("/school/students");
        return;
      }

      setStudent({
        student_name: studentData.student_name || "",
        parent_name: studentData.parent_name || "",
        parent_phone: studentData.parent_phone || "",
        school_id: loggedSchool.school_id,
        bus_id: studentData.bus_id || "",
        pickup_point: studentData.pickup_point || "",
        drop_point: studentData.drop_point || "",
      });

      // Fetch only this school's buses
      const busRes = await axios.get(
        `${API_URL}/buses/school/${loggedSchool.school_id}`
      );

      setBuses(busRes.data.buses || []);

    } catch (err) {
      console.error(err);
      alert("Failed to load student.");
    }
  };
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/students/${id}`, student);

      alert("Student updated successfully.");
      navigate("/school/students");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to update student."
      );
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
        Edit Student
      </h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <h2 className="border-b pb-2 text-xl font-semibold text-blue-600">
              Student Information
            </h2>
          </div>

          <div>
            <label className="mb-2 block font-medium">Student Name</label>
            <input
              type="text"
              name="student_name"
              value={student.student_name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Parent Name</label>
            <input
              type="text"
              name="parent_name"
              value={student.parent_name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Parent Phone</label>
            <input
              type="text"
              name="parent_phone"
              value={student.parent_phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Assigned Bus</label>
            <select
              name="bus_id"
              value={student.bus_id}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            >
              <option value="">Select Bus</option>

              {buses.map((bus) => (
                <option key={bus.id} value={bus.id}>
                  {bus.bus_number} - {bus.bus_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">Pickup Point</label>
            <input
              type="text"
              name="pickup_point"
              value={student.pickup_point}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            />
          </div>

          {/* <div>
            <label className="mb-2 block font-medium">Drop Point</label>
            <input
              type="text"
              name="drop_point"
              value={student.drop_point}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3"
            />
          </div> */}

          <div className="mt-4 flex justify-end gap-3 md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Update Student
            </button>

            <button
              type="button"
              onClick={() => navigate("/school/students")}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
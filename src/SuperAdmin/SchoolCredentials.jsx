import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SchoolCredentials() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    schoolId: "SCH1001", // Replace with dynamic value later
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(data);

    // Call your backend API here

    alert("School Admin Account Created Successfully!");

    navigate("/");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Create School Admin Account
      </h1>

      <div className="bg-white shadow rounded-xl p-8">

        <p className="text-sm text-gray-500 mb-6">
          <span className="text-red-500">*</span> Indicates required fields
        </p>

        <form onSubmit={handleSubmit}>

          {/* School ID */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              School ID
            </label>

            <input
              value={data.schoolId}
              readOnly
              className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Username */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Username <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              placeholder="Enter Username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Password <span className="text-red-500">*</span>
            </label>

            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              placeholder="Enter Password"
              required
              minLength={8}
            />

            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
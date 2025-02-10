import React, { useEffect, useState } from "react";
import contactService from "../../appwrite/contact";
const Dashboard = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    contactService.getAllEnquiries().then((enquiriesData) => {
      if (enquiriesData) {
        setEnquiries(enquiriesData.documents);
      }
    });
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Dashboard</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Services</th>
              <th className="py-3 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {enquiries?.map((item) => (
              <tr key={item.$id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.services}</td>
                <td className="py-3 px-4">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

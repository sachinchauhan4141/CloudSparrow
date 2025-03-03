import React, { useState, useEffect } from "react";
import teamService from "../../appwrite/team";

const TeamComponent = () => {
  const [teamMembers, setTeamMembers] = useState({});

  useEffect(() => {
    const getTeamData = async () => {
      const data = await teamService.getAllTeamMembers();
      const groupedByRole = data.documents.reduce((acc, member) => {
        acc[member.role] = acc[member.role] || [];
        acc[member.role].push(member);
        return acc;
      }, {});
      setTeamMembers(groupedByRole);
    };
    getTeamData();
  }, []);

  return (
    <div className="px-4 py-20 md:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="text-center font-medium">
        <h5 className="text-gray-600 text-lg uppercase tracking-wide">
          Our Team
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold my-3">
          Meet The <span className="text-blue-600">CloudSparrow</span> Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team is dedicated to delivering innovative solutions in digital
          marketing, <br /> web development, and design, ensuring success for
          businesses worldwide.
        </p>
      </div>

      {Object.keys(teamMembers).map((role) => (
        <div key={role} className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-500 inline-block mb-6">
            {role}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers[role].map((member) => (
              <Card data={member} key={member.$id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="border border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 font-medium">
        <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
        <p className="text-gray-500 text-xs">{data.email}</p>
        <p className="text-blue-600 font-medium mt-1">{data.role}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default TeamComponent;

import React, { useState } from "react";
import teamService from "../../appwrite/team";

const TeamComponent = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamData = async () => {
    const data = await teamService.getAllTeamMembers();
    setTeamMembers(data.documents);
  };

  useState(() => {
    getTeamData();
  }, []);

  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {});

  return (
    <div className="bg-white lg:px-8 px-2 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          We are the people who makes up the cx`loud-sparrow
        </h1>
        <p className="text-center mb-12">
          Our philosophy is simple; hire great people and give them the
          resources and support to do their best work.
        </p>
        {Object.keys(groupedMembers).map((role) => (
          <div key={role} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{role}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {groupedMembers[role].map((member, index) => (
                <div
                  key={index}
                  className="text-left bg-gray-200 p-4 rounded-md lg:rounded-2xl"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="mx-auto rounded-md lg:rounded-2xl mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 mt-2">{member.description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Joined: {member.joinedAt}
                  </p>
                  <p className="text-sm text-gray-400">Email: {member.email}</p>
                  <p className="text-sm text-gray-400">
                    Team ID: {member.teamId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;

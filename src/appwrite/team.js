import { Client, Databases, ID } from "appwrite";
import config from "../config/config.js";

class TeamMember {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  // Create a new team member with description
  async createTeamMember({
    name,
    email,
    role,
    teamId,
    joinedAt,
    avatar,
    description,
  }) {
    try {
      const response = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteTeamMemberCollectionId,
        ID.unique(),
        {
          name,
          email,
          role,
          teamId,
          joinedAt,
          avatar,
          description, // Added description field
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Update an existing team member with description
  async updateTeamMember({
    id,
    name,
    email,
    role,
    teamId,
    joinedAt,
    avatar,
    description,
  }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteTeamMemberCollectionId,
        id,
        {
          name,
          email,
          role,
          teamId,
          joinedAt,
          avatar,
          description, // Added description field
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // Delete a team member by ID
  async deleteTeamMember(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteTeamMemberCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  // Get a team member by ID
  async getTeamMemberById(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteTeamMemberCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  // Get all team members
  async getAllTeamMembers() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteTeamMemberCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new TeamMember();

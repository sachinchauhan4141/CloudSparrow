import { Client, Databases, ID } from "appwrite";
import config from "../config/config.js";

class Job {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createJob({
    title,
    location,
    terms,
    experience,
    remuneration,
    role,
    responsibilities,
    requirements,
    url,
  }) {
    try {
      const response = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteJobCollectionId,
        ID.unique(),
        {
          title,
          location,
          terms,
          experience,
          remuneration,
          role,
          responsibilities,
          requirements,
          url,
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateJob({
    id,
    title,
    location,
    terms,
    experience,
    remuneration,
    role,
    responsibilities,
    requirements,
    url,
  }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteJobCollectionId,
        id,
        {
          title,
          location,
          terms,
          experience,
          remuneration,
          role,
          responsibilities,
          requirements,
          url,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteJob(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteJobCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getJobById(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteJobCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllJobs() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteJobCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new Job();

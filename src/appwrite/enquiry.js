import { Client, Databases, ID } from "appwrite";
import config from "../config/config.js";

class Enquiry {
  client = new Client();
  databases;
  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createEnquiry({ name, email, phone, services, description }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteEnquiryCollectionId,
        ID.unique(),
        {
          name,
          email,
          phone,
          services,
          description,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateEnquiry({ id, name, email, phone, services, description }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteEnquiryCollectionId,
        id,
        {
          name,
          email,
          phone,
          services,
          description,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteEnquiry(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteEnquiryCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getEnquiryById(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteEnquiryCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllEnquiries() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteEnquiryCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new Enquiry();

import { Client, Databases, ID } from "appwrite";
import {
  appwriteUrl,
  appwriteProjectId,
  appwriteDatabaseId,
  appwriteCollectionId,
} from "../conf/conf";

class Contact {
  client = new Client();
  databases;
  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createEnquiry({ name, email, phone, services, description }) {
    try {
      return await this.databases.createDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
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

  async deleteEnquiry(id) {
    try {
      return await this.databases.deleteDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getEnquiryById(id) {
    try {
      return await this.databases.getDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllEnquiries() {
    try {
      return await this.databases.listDocuments(
        appwriteDatabaseId,
        appwriteCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new Contact();

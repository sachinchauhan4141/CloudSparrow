import { Client, Databases, ID } from "appwrite";
import config from "../config/config.js";

class User {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createUser({ id, name, email, phone, avatar, admin = false }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        id,
        {
          name,
          email,
          phone,
          avatar,
          admin,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ id, name, email, phone, avatar, admin }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        id,
        {
          name,
          email,
          phone,
          avatar,
          admin,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new User();

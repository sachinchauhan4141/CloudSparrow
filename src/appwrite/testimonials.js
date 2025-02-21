import { Client, Databases, ID } from "appwrite";
import config from "../config/config.js";

class Testimonials {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createTestimonials({ name, company, avatar, logo, description }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteTestimonialsCollectionId,
        ID.unique(),
        {
          name,
          company,
          avatar,
          logo,
          description,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateTestimonials({ id, name, company, avatar, logo, description }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteTestimonialsCollectionId,
        id,
        {
          name,
          company,
          avatar,
          logo,
          description,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteTestimonials(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteTestimonialsCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getTestimonialsById(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteTestimonialsCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllTestimonials() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteTestimonialsCollectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new Testimonials();

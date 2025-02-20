import { Client, Storage, ID } from "appwrite";
import config from "../config/config.js";

class ImageManager {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadImage(file) {
    try {
      const uniqueId = ID.unique();
      const response = await this.storage.createFile(
        config.appwriteStorageId,
        uniqueId,
        file
      );
      return {
        fileId: response.$id,
        imageUrl: await this.getImageUrl(response.$id),
      };
    } catch (error) {
      throw error;
    }
  }

  async getImageUrl(fileId) {
    return this.storage.getFilePreview(config.appwriteStorageId, fileId);
  }

  async deleteImage(fileId) {
    try {
      return await this.storage.deleteFile(config.appwriteStorageId, fileId);
    } catch (error) {
      throw error;
    }
  }
}

export default new ImageManager();

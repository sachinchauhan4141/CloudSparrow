import { Client, Account, ID } from "appwrite";
import { appwriteUrl, appwriteProjectId } from "../conf/conf";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //login the user
        this.loginUser(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async getCurrUser() {
    try {
      return this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logoutUser() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();

import { Client, Account, ID } from "appwrite";
import config from "../config/config.js";
import userService from "./user.js";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name, phone, avatar }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      //saving user deatils to database
      const saveUserDetails = await userService.createUser({
        id: userAccount.$id,
        name,
        email,
        phone,
        avatar,
      });
      if (userAccount && saveUserDetails) {
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

  async logoutUser() {
    try {
      return await this.account.deleteSessions();
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

  async updateEmail({ email, password }) {
    try {
      return await this.account.updateEmail(email, password);
    } catch (error) {
      throw error;
    }
  }

  async updatePassword({ password, oldpassword }) {
    try {
      return await this.account.updatePassword(password, oldpassword);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      return await this.account.deleteIdentity(id);
    } catch (error) {
      throw error;
    }
  }

  async forgetPassword({email, url}) {
    try {
      return await this.account.createRecovery(email, url);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();

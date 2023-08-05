import { ID } from "appwrite";

import { account } from "./config";

type CreateUser = {
  name: string;
  email: string;
  password: string;
};

type loginUser = {
  email: string;
  password: string;
};

class authService {
  // Create User
  async createUser(user: CreateUser) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name
      );

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  // login User
  async loginUser(user: loginUser) {
    try {
      const userAccount = await account.createEmailSession(
        user.email,
        user.password
      );
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  // logout User
  async logoutUser() {
    try {
      const res = await account.deleteSession("current");
      return res;
    } catch (error) {
      throw error;
    }
  }

  // get User
  async getUser() {
    try {
      const res = await account.get();
      return res;
    } catch (error) {
      throw error;
    }
  }

  // is LoggedIn
  async isLoggedIn(): Promise<boolean> {
    try {
      const res = await this.getUser();
      return Boolean(res);
    } catch (error) {
      throw error;
    }
  }
}

const AuthService = new authService();

export default AuthService;

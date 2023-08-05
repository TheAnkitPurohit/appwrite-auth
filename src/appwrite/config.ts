import config from "@/lib/config";
import { Client, Account, ID } from "appwrite";

export const client = new Client()
  .setEndpoint(config.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(config.APPWRITE_PROJECT_ID); // Your project ID

export const account = new Account(client);

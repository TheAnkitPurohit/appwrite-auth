const config = {
  APPWRITE_PROJECT_ID: String(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
  ).trim(),
  APPWRITE_ENDPOINT: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT).trim(),
};

export default config;

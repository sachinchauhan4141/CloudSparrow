const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteEnquiryCollectionId: String(import.meta.env.VITE_ENQUIRY_COLLECTION_ID),
  appwriteUserCollectionId: String(import.meta.env.VITE_USER_COLLECTION_ID),
  appwriteJobCollectionId: String(import.meta.env.VITE_JOB_COLLECTION_ID),
};

export default config;
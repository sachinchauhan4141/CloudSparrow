const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteEnquiryCollectionId: String(
    import.meta.env.VITE_ENQUIRY_COLLECTION_ID
  ),
  appwriteUserCollectionId: String(import.meta.env.VITE_USER_COLLECTION_ID),
  appwriteJobCollectionId: String(import.meta.env.VITE_JOB_COLLECTION_ID),
  appwriteTestimonialsCollectionId: String(
    import.meta.env.VITE_TESTIMONIALS_COLLECTION_ID
  ),
  appwriteTeamMemberCollectionId: String(
    import.meta.env.VITE_TEAM_MEMBERS_COLLECTION_ID
  ),
  appwriteImageCollectionId: String(import.meta.env.VITE_IMAGE_COLLECTION_ID),
  appwriteStorageId: String(import.meta.env.VITE_STORAGE_ID),
  passRecoveryRedirectUrl: String(
    import.meta.env.VITE_PASS_RECOVERY_REDIRECT_URL
  ),
  emailVerifyRedirectUrl: String(
    import.meta.env.VITE_EMAIL_VERIFY_REDIRECT_URL
  ),
};

export default config;

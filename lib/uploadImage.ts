import { storage, ID } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) {
    return;
  }

  const fileUpload = await storage.createFile(
    "64dceea9b74a75c70e9a",
    ID.unique(),
    file
  );

  return fileUpload;
};

export default uploadImage;

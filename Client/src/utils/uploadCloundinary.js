const uploadImageToCloudinary = async (file) => {
    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
    const cloud_name = import.meta.env.VITE_UPLOAD_NAME;
  
    if (!upload_preset || !cloud_name) {
      console.error("Cloudinary configuration is missing");
      return;
    }
  
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);
  
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "post",
        body: uploadData
      });
  
      if (!res.ok) {
        throw new Error("Failed to upload image");
      }
  
      const data = await res.json();
      return data;
  
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };
  
  export default uploadImageToCloudinary;
  
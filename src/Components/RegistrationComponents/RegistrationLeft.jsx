import React, { useState } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { getDatabase, ref, set } from "firebase/database";
import { SucessToast } from "../../../Utils/Toast";

const RegistrationLeft = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const uploader = Uploader({
    apiKey: "free" // Get production API keys from Bytescale
  });

  const options = { multi: true };

  const handleUploadComplete = (files) => {
    const urls = files.map(x => x.fileUrl);
    setImageUrls(urls);
    // Optionally store the URLs in Firebase
    storeUrlsInDatabase(urls);
    SucessToast("Upload complete")
  };

  const storeUrlsInDatabase = (urls) => {
    const db = getDatabase();
    const dbRef = ref(db, 'uploads/'); // Change this path as needed

    // Example: Store each URL with a unique key
    urls.forEach((url, index) => {
      set(ref(db, `uploads/image_${Date.now()}_${index}`), {
        url,
      });
    });
  };

  return (
    <div className="flex items-center w-[50%] justify-center text-white font-bold bg-red-800  h-screen">
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={handleUploadComplete}
      >
        {({ onClick }) => (
          <button 
            onClick={onClick} 
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
            Upload a file...
          </button>
        )}
      </UploadButton>

      {/* Display uploaded image URLs */}
   
    </div>
  );
};

export default RegistrationLeft;

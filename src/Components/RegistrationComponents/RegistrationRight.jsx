import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";




const RegistrationRight = () => {
  const [image , setimage] = useState([])

  const db = getDatabase();
useEffect(() => {
  const imageDbref = ref(db, 'uploads/');
onValue(imageDbref, (snapshot) => {
  let imageArr = [];
  snapshot.forEach((image) => {
    let imageInfo = image.val()
    imageArr.push({
      ...imageInfo,
      imgKey: image.key,
      
    });

    
  })
  
  setimage(imageArr);
  console.log(image);
  

  
});
 
}, [])

  return (
    <div className="flex flex-col items-center justify-center text-black bg-gray-200 w-[50%] h-screen p-4">
    <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
    <div className="w-full h-full overflow-y-auto border border-gray-300 rounded-lg bg-white p-4">
      <h3 className="text-lg font-semibold mb-2">Uploaded Images</h3>
      <div className="flex flex-col space-y-2">
        {image.map((item) => (
          <div key={item} className="relative  overflow-hidden rounded-lg border w-full  h-[80%]  border-gray-200">
            <img
              src={item.url}
              alt={item.url}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default RegistrationRight;

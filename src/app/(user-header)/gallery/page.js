import Image from "next/image";
import React from "react";
import suvrodebImage from "@/assets/SuvrodebAssets.jpg";

const GalleryPage = () => {
  return (
    <div className=" bg-purple-500">
      <h1>Gallery</h1>
      <div>
        <h1 className="font-bold">Regular Image Tag</h1>
        {/* <img
          src="https://i.ibb.co.com/mVQXvtgq/Suvrodeb.jpg"
          alt=""
          className="w-full md:w-[450px] h-[550px]"
        /> */}
      </div>

      <div>
        <h1 className="font-bold my-4">Image Component</h1>
        <Image
          src="https://i.ibb.co.com/mVQXvtgq/Suvrodeb.jpg"
          alt="Suvrodeb"
          width={450}
          height={1300}
          className="h-[500px]"
        />
      </div>
      <div>
        <h1 className="font-bold my-4">Local Image</h1>
        <Image src={suvrodebImage} alt="Suvrodeb" width={450} height={200} />
      </div>
    </div>
  );
};

export default GalleryPage;

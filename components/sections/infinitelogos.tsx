import React from "react";
import Image from "next/image";

const InfiniteLogos = () => {
  return (
    <>
      {/* HTML */}
      <div className="flex overflow-hidden space-x-16 group">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 1"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 2"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 3"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 4"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 5"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 6"
            layout="fill"
            className="max-w-none"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d"
            alt="Image 7"
            layout="fill"
            className="max-w-none"
          />
        </div>
      </div>
    </>
  );
};

export default InfiniteLogos;

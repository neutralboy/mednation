import Head from 'next/head';
import Image from "next/image";

const Home = () => (
  <div className="p-36" >
    <div className="w-full flex">
      <Image unoptimized layout="fixed" className="inline-block mx-auto" width={500} height={500} alt="Mednation" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1626283109/mednation/Radiography-bro.png" />
    </div>
  </div>
);


export default Home;

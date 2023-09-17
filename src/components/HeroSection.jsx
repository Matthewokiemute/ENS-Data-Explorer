import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col py-6 md:py-10 items-center px-20 h-[80vh]">
        <div className="leading-[60px] md:leading-[80px] text-center mb-10">
          <h1 className="text-white font-bold text-[70px] md:text-[100px]">Ethereum Name</h1>
          <h1 className="text-white font-bold text-[60px] md:text-[80px]">Service Token</h1>
          <p className="text-white font-bold text-[30px] md:text-[40px]">
            Built on the{" "}
            <a
              href="https://thegraph.com/studio/subgraph/ensindexer/"
              className="text-yellow-500 underline"
            >
              ENS Indexer Subgraph
            </a>
          </p>
        </div>

        <div className="text-center">
          <p className="text-[20px] text-white mb-8">
            ENS stands for Ethereum Name Service 
            and is a known project that mints .eth domains as ERC721 tokens.{" "}
            <br />
            I’m choosing this project because it has a lot of movement and
            transactions,
          </p>
          <a
            href="https://www.notion.so/ENS-Data-Explorer-86714e4851ea43fb938e951611525db4"
            className="rounded-full bg-yellow-500 px-6 py-4 font-medium text-black hover:bg-gray-800 hover:text-white hover:ease-in-out duration-300"
          >
            Read More...
          </a>
        </div>
       
      </div>
     
    </>
  );
};

export default HeroSection;

import React from "react";

const Footer = () => {
  return (
    <div className="container text-center mx-auto w-full py-6 px-10">
      <p className="text-[20px] text-white">
        ENS Data Explorer &copy; 2023, By{" "}
        <a
          href="https://twitter.com/web3_warri/status/1703043643982975395"
          className=" text-yellow-500 underline"
        >
          The GraphExpo Team
        </a>
      </p>
      <p className="text-[20px] text-white">
        <a
          href="https://github.com/Matthewokiemute/subgraph"
          className=" text-yellow-500 underline"
        >
          Link to ENS Indexer Subgraph Codebase
        </a>
      </p>
      <p className="text-[20px] text-white">
        {" "}
        <a
          href="https://github.com/Matthewokiemute/ENS-Data-Explorer"
          className=" text-yellow-500 underline"
        >
          Link to the Frontend Codebase
        </a>
      </p>
    </div>
  );
};

export default Footer;

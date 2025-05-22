import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  return (
    <div className="relative w-screen h-100 flex justify-center flex-col">
      <div className="w-[20%] md-w[10%] ms-50 items-center grid grid-col-1 xl:grid-col-2 gap-20">
        {/** Buttons */}
        <div className="content-start flex">
          <Button variant="outline" className="bg-gray-500">
            Generated Articles
          </Button>
          <Button variant="outline" className="bg-gray-500">
            Published Articles
          </Button>
          <Button variant="outline" className="bg-gray-500">
            Scheduled Articles
          </Button>
          <Button variant="outline" className="bg-gray-500">
            Archieved Articles
          </Button>
        </div>
        {/**searchbar */}
        <div>
          <Input
            type="Search"
            placeholder="Search for Title & Keywords...."
            className="w-100 bg-gray-300"
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default Hero;

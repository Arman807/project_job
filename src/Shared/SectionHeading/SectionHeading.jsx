import { useEffect, useState } from "react";


const SectionHeading = ({subheading,heading}) => {
    return (
       <div>
         <div className="w-3/12 mx-auto">
            <h3 className="text-yellow-400 text-xl text-center">--{subheading}--</h3>
            <hr className="w-[250px]  mx-auto"/>
            <h3 className="text-4xl uppercase text-center border-y-2 mb-2">{heading}</h3>
        </div>
       </div>
    );
};

export default SectionHeading;
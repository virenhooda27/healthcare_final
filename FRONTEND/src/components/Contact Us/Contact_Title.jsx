import React from 'react';
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Contact_Title = () => {
  return (
    <div className="bg-violet-50 pt-6">
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold pb-2">CONTACT US &nbsp; - &nbsp; DR. SYMPTOMS</h2>
        <div className="flex items-center justify-center gap-4 text-gray-600">
          <div className='flex gap-1 items-center'>
            <FaHome className="text-sm" />
            <BreadcrumbItem text="Home" />
          </div>
          <RiArrowRightDoubleFill className="text-xl" />
          <BreadcrumbItem text="Contact Us" />
        </div>
      </div>
    </div>
  );
}

const BreadcrumbItem = ({ text }) => (
  <div className='text-xs'>{text}</div>
);

export default Contact_Title;

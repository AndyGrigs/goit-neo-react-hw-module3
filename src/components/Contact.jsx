import { PhoneIcon, UserIcon } from "lucide-react";
import React from "react";

const Contact = ({ id, name, number }) => {
  return (
    <li className="flex items-center justify-between w-1/2 mb-4 p-4  shadow-md border border-gray-400 rounded-md ">
      <p className="flex flex-col gap-2">
        <span className="flex items-center text-sm text-gray-600">
          <UserIcon  className="w-5 h-5 mr-2 text-blue-600"/>
          {name}
        </span>
        <span className="flex items-center text-sm text-gray-600">
          <PhoneIcon className="w-5 h-5 mr-2 text-blue-600" />
          {number}
        </span>
      </p>
      <button>Delete contact</button>
    </li>
  );
};

export default Contact;

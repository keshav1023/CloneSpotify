import { Icon } from "@iconify/react";
import {Link} from "react-router-dom";
import PasswordInput from "../components/shared/PasswordInput";
import TextInput from "../components/shared/TextInput";

const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-grey-400 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>

      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4 text-2xl">
          Sign up for free to start listening.
        </div>
        <TextInput
          label="Email address"
          placeholder="Enter your email"
          className="my-6"
        />
        <TextInput
          label="Confirm your email"
          placeholder="Enter your email again"
          className="mb-6"
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password here"
        />
        <TextInput
          label="What should we call you?"
          placeholder="Enter a profile name"
          className="my-6"
        />
        <div className="w-full flex items-center justify-center my-8">
          <button className="bg-green-300 font-semibold p-3 px-10 rounded-full">
            Sign up
          </button>
        </div>
        <div className="w-full border border-solid border-grey-400"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account ?
        </div>
        <button className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </button>
      </div>
    </div>
  );
};

export default SignupComponent;

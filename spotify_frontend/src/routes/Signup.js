import { Icon } from "@iconify/react";
// import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/shared/PasswordInput";
import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { makeUnauthenticatedPOSTResquest } from "../utils/serverHelper";

const SignupComponent = () => {
const [email, setEmail] = useState("");
const [confirmEmail, setConfirmEmail] = useState("");
const [userName, setUsername] = useState("");
const [password, setPassword] = useState("");
const [firstName, setFirstname] = useState("");
const [lastName, setLastname] = useState("");
// const [cookie, setCookie] = useCookies(["token"]);
const navigate = useNavigate();

const signUp = async () => {
if (email !== confirmEmail) {
alert("Email and confirm email fields must match. Please check again");
return;
}
const data = { email, password, userName, firstName, lastName };
const response = await makeUnauthenticatedPOSTResquest(
"/auth/register",
data
);
if (response && !response.err) {
const token = response.token;
// const date = new Date();
// date.setDate(date.getDate() + 30);
// setCookie("token", token, { path: "/", expires: date });
localStorage.setItem('userLoginSessionToken', token);
//alert("Success !!!!");
navigate("/home");
navigate(0);
} else {
alert("Failure :( ");
}
};

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
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm your email"
          placeholder="Enter your email again"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Username"
          placeholder="Enter Your Username"
          className="mb-6"
          value={userName}
          setValue={setUsername}
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password here"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter Your First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstname}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter Your Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastname}
          />
        </div>
        <div className="w-full flex items-center justify-center my-8">
          <button
            className="bg-green-300 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
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

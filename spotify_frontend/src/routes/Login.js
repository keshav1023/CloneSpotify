import { Icon } from "@iconify/react";
// import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/shared/PasswordInput";
import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { makeUnauthenticatedPOSTResquest } from "../utils/serverHelper";

const LoginComponent = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// const [cookie, setCookie] = useCookies(["token"]);
const navigate = useNavigate();

const logIn = async () => {
const data = { email, password };
const response = await makeUnauthenticatedPOSTResquest("/auth/login", data);
console.log(response);
console.log("Response is : " + response);
console.log("Response Token is : " + response);
if (response && !response.err) {
  const token = response.token;
  await localStorage.setItem('userLoginSessionToken', token);
  alert("Success !!!!");
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
        <div className="font-bold mb-4">To continue, log in to Spotify.</div>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex items-center justify-end my-8">
          <button
            className="bg-green-300 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              logIn();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-grey-400"></div>
        <div className="my-6 font-semibold text-lg">
          Don't have an account ?
        </div>
        <button className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;

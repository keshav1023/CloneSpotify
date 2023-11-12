import {backendUrl} from "./config"
export const makeUnauthenticatedPOSTResquest = async (route,body) => {
const response = await fetch(backendUrl+route, {
method :"POST",
headers : {
"Content-Type" : "application/json",
},
body:JSON.stringify(body),
});
const formattedResponse = await response.json();
return formattedResponse;
};

export const makeAuthenticatedPOSTResquest = async (route,body) => {
const token= getTokenFromLocalStorage();
const response = await fetch(backendUrl+route, {
method :"POST",
headers : {
"Content-Type" : "application/json",
"Authorization": `Bearer ${token}`,
},
body:JSON.stringify(body),
});
const formattedResponse = await response.json();
return formattedResponse;
};

export const makeAuthenticatedGETResquest = async (route) => {
const token= getTokenFromLocalStorage();
const response = await fetch(backendUrl+route, {
method :"GET",
headers : {
"Content-Type" : "application/json",
"Authorization": `Bearer ${token}`,
},
});
const formattedResponse = await response.json();
return formattedResponse;
};
const getTokenFromLocalStorage = () => {
    return localStorage.getItem('userLoginSessionToken');
};
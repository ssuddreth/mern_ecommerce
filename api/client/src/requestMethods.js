import axios from "axios";

const BASE_URL = "https://mern-ecommerce-app-ssuddreth.herokuapp.com/api/";
//const TOKEN =
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//.accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZlNDEyY2JjNWY4ZGE2N2UzNmVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODg4ODI2NCwiZXhwIjoxNjY5MTQ3NDY0fQ.f1q9oOPDwzhmFUye7aAuKsUH4oKvPPQrVKZU-08-rM8"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZlNDEyY2JjNWY4ZGE2N2UzNmVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODg4ODI2NCwiZXhwIjoxNjY5MTQ3NDY0fQ.f1q9oOPDwzhmFUye7aAuKsUH4oKvPPQrVKZU-08-rM8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
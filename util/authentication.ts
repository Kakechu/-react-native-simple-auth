import axios from "axios";

// Firebasen autentikointiavain - HUOM: TEE OMA, tämä Tuomon.
const API_KEY = "";

interface AuthResponse {
  idToken: string;
  [key: string]: any;
}

// Kirjautumista varten tehdään post-pyyntö:
// sähköposti
// salasana
// returnSecureToken: true - palauttaa response.data eli secureToken eli pyyntöjen yhteydessä lähetetään token

export const createNewUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data;
};

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data;
};

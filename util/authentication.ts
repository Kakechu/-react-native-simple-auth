import axios from "axios";

// Firebasen autentikointiavain - HUOM: TEE OMA.

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
    "httpss://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data;
};

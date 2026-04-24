export interface SigninResponse {
  message: "success" | "incorrect email or password";
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export interface SigninData {
  email: string;
  password: string;
}
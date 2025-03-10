// Define types for form state and validation errors
export interface FormState {
  name: string;
  email: string;
  age: string;
  password: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
}

export interface ValidationError {
  [key: string]: string;
}

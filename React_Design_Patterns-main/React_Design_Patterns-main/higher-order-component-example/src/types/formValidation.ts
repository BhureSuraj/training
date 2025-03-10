import { FormState } from "./formTypes";

// Define validation rules
export const validationRules: { [key in keyof FormState]: any } = {
  name: { required: true, minLength: 3, maxLength: 20 },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  age: { required: true, min: 18, max: 100 },
  password: { required: true, minLength: 6 },
  phoneNumber: {
    required: true,
    pattern: /^[0-9]{10}$/,
    message: "Phone number must be 10 digits",
  },
  address: { required: true, minLength: 5, maxLength: 100 },
  zipCode: {
    required: true,
    pattern: /^[0-9]{5}$/,
    message: "Zip Code must be exactly 5 digits",
  },
};

// Validation function
export const validateField = (name: keyof FormState, value: string) => {
  const rules = validationRules[name];
  let error = "";

  if (rules?.required && !value.trim()) error = `${name} is required`;
  else if (rules?.minLength && value.length < rules.minLength)
    error = `${name} must be at least ${rules.minLength} characters`;
  else if (rules?.maxLength && value.length > rules.maxLength)
    error = `${name} must be less than ${rules.maxLength} characters`;
  else if (rules?.pattern && !rules.pattern.test(value))
    error = rules.message || `Invalid ${name} format`;
  else if (rules?.min && Number(value) < rules.min)
    error = `${name} must be at least ${rules.min}`;
  else if (rules?.max && Number(value) > rules.max)
    error = `${name} must be less than ${rules.max}`;

  return error;
};

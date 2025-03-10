import React, { useState } from "react";
import { validateField, validationRules } from "../types/formValidation";
import { FormState, ValidationError } from "../types/formTypes";

const MyValidationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(
    Object.keys(validationRules).reduce((acc, key) => {
      acc[key as keyof FormState] = "";
      return acc;
    }, {} as FormState)
  );
  const [errors, setErrors] = useState<ValidationError>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormState, value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: ValidationError = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(
        key as keyof FormState,
        formData[key as keyof FormState]
      );
      if (error) validationErrors[key] = error;
    });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type={
              key === "password"
                ? "password"
                : key === "age"
                ? "number"
                : "text"
            }
            name={key}
            value={formData[key as keyof FormState]}
            onChange={handleChange}
          />
          {errors[key] && <span style={{ color: "red" }}>{errors[key]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyValidationForm;

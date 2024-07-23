// src/hooks/useForm.ts

import { useState } from 'react';

interface FormValues {
  name: string;
  // Add other form fields here
}

interface FormErrors {
  name?: string;
  // Add other error fields here
}

const useForm = (initialValues: FormValues) => {
  const [data, setData] = useState<FormValues>(initialValues);
  const [errors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data here (e.g., check if name is not empty)
    // Set errors if validation fails
    // Submit data to backend (if needed)
    alert('User submitted!');
  };

  return { data, errors, handleChange, handleSubmit };
};

export default useForm;

import React from 'react';

export const Test = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log(formData)
    // Logging each form data entry
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Logging specific input value
    console.log(e.currentTarget[0].value) ; // First input element
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="addBoard" id="" />
      <button type="submit">Added</button>
    </form>
  );
};

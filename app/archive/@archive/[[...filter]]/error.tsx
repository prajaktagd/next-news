"use client";

const FilterError = ({ error }: Readonly<{ error: { message: string } }>) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;

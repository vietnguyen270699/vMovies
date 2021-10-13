import React from "react";
const ReleaseYear = () => {
  const date = new Date();
  let listYear = [];
  const getCurrentYear = date.getFullYear();
  for (let i = 1990; i < getCurrentYear; ++i) {
    listYear.unshift(i);
  }
  const yearOption = listYear.map((year,index) => {
    return <option key={index} value={year}>{year}</option>;
  });
  return (
    <>
      <option value="">- Tất cả -</option>
      {yearOption}
    </>
  );
};
export default ReleaseYear;

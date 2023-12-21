const average2 = (grade1, grade2, grade3) => {
    let average = (grade1 + grade2 + grade3) / 3;
    return average >= 6;
};

 const average3 = (grade1, grade2, grade3) => {
    return (grade1 + grade2 + grade3) / 3;
  };


  module.exports = {average2, average3}
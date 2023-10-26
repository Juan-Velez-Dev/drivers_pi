const urlRegex = /^[A-Za-z0-9-]+\.[A-z]{2,}(\/\S*)?$/;
const textRegex = /^[A-Za-z ]*$/;

const Validation = (form) => {
  const errors = {};

  if (!urlRegex.test(form.image)) errors.image = 'Please enter a valid URL: example.com❗';
  if (!textRegex.test(form.surname)) errors.surname = 'Please enter a valid surname❗';
  if (!textRegex.test(form.forename)) errors.forename = 'Please enter a valid forename❗';
  if (!Object.keys(form.nationality).length) errors.nationality = 'Please select a valid nationality❗';
  if (!Object.keys(form.birthdate).length) errors.birthdate = 'Please enter a valid birthdate❗';
  if (!Object.keys(form.description).length) errors.description = 'Please enter a valid description❗';
  return errors;
};

export default Validation;

const textRegex = /^[^\d]*$/;
const urlRegex = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
const errors = {};

const Validation = (form) => {
  if (!urlRegex.test(form.image)) errors.image = 'write a valid URL❗';
  if (!textRegex.test(form.forename)) errors.forename = 'write a valid forename❗';
  if (!textRegex.test(form.surname)) errors.surname = 'write a valid surname❗';
  if (!textRegex.test(form.nationality)) errors.nationality = 'select a valid nationality❗';

  return errors;
};

export default Validation;

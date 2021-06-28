module.exports = async function (helper) {
  // We start by getting the user input from the helper
  console.log(helper.validationFields);

  helper.success('hey')
};

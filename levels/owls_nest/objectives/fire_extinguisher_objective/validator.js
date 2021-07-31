module.exports = async function (helper) {
  if (
    !helper.validationFields.answer1 ||
    helper.validationFields.answer1 !== 'true'
  ) {
    return helper.fail(`
      The first answer is incorrect. Software installed on your computer
      often has privileged access to your data and personal files. You should
      be careful what you download and install on your computer!
    `);
  }

  if (
    !helper.validationFields.answer2 ||
    helper.validationFields.answer2 !== 'false'
  ) {
    return helper.fail(`
      The second answer is incorrect. Code that you copy and paste from the
      Internet can be helpful, but make sure you know what it does before you
      run it!
    `);
  }

  if (
    !helper.validationFields.answer3 ||
    helper.validationFields.answer3 !== 'false'
  ) {
    return helper.fail(`
      The third answer is incorrect. It's risky to keep personal data like
      email addresses or passwords in a code file. You might accidentally
      share the code with someone else, which would violate your privacy, or
      the privacy of others. Be careful with personal data! Make sure you know
      how it will be stored, and that your code doesn't enable another person
      to see it without good reason.
    `);
  }

  helper.success(`
    You did it! After confirming your knowledge of computer safety, the chest
    pops open and you retrieve the fire extinguisher you will need to save Ryan.
  `);
};

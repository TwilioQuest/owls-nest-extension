module.exports = async function (helper) {
  if (
    !helper.validationFields.answer1 ||
    helper.validationFields.answer1 !== 'true'
  ) {
    return helper.fail(helper.world.getTranslatedString('owls_nest.fire_extinguisher_objective.first'));
  }

  if (
    !helper.validationFields.answer2 ||
    helper.validationFields.answer2 !== 'false'
  ) {
    return helper.fail(helper.world.getTranslatedString('owls_nest.fire_extinguisher_objective.second'));
  }

  if (
    !helper.validationFields.answer3 ||
    helper.validationFields.answer3 !== 'false'
  ) {
    return helper.fail(helper.world.getTranslatedString('owls_nest.fire_extinguisher_objective.third'));
  }

  helper.success(helper.world.getTranslatedString('owls_nest.fire_extinguisher_objective.success'));
};

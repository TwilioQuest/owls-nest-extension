module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const passcode = helper.getNormalizedInput('passcode');
  const worldState = helper.context.levelState['com.twilioquest.owls_nest'];

  if (!worldState.hackingToolAcquired) {
    return helper.fail(helper.world.getTranslatedString('owls_nest.hacking_tool_objective.hackingToolAcquired'));
  }

  if (!passcode) {
    return helper.fail(helper.world.getTranslatedString('owls_nest.hacking_tool_objective.passcode'));
  }

  if (passcode !== 'level up') {
    return helper.fail(helper.world.getTranslatedString('owls_nest.hacking_tool_objective.levelUp'));
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(helper.world.getTranslatedString('owls_nest.hacking_tool_objective.success'));
};

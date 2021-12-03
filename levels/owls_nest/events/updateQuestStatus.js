const LEVEL = 'owls_nest';

// Based on the current level state, determine what 
function updateQuestStatus(event, world, worldState) {
  let description = world.getTranslatedString('owls_nest.updateQuestStatus.description');
  let complete = false;

  if (worldState.movementSwitch) {
    description = world.getTranslatedString('owls_nest.updateQuestStatus.movementSwitch');
  }

  if (worldState.firstObjectiveHacked) {
    description = world.getTranslatedString('owls_nest.updateQuestStatus.firstObjectiveHacked');
  }

  if (worldState.fredricThreatReceived) {
    description = world.getTranslatedString('owls_nest.updateQuestStatus.fredricThreatReceived');
  }

  if (worldState.ryanSaved) {
    description = world.getTranslatedString('owls_nest.updateQuestStatus.ryanSaved');
  }

  if (worldState.missionComplete) {
    description = world.getTranslatedString('owls_nest.updateQuestStatus.missionComplete');
    complete = true;
  }

  world.updateQuestStatus(LEVEL, world.getTranslatedString('owls_nest.updateQuestStatus.title'),
    description, complete, event.name === 'languageRefresh');
}

module.exports = updateQuestStatus
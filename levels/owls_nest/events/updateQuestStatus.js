const LEVEL = 'owls_nest';
const TITLE = `Leaving the Owl's Nest`;

// Based on the current level state, determine what 
function updateQuestStatus(event, world, worldState) {
  let description = `
    Use WASD or arrow keys to move, spacebar to interact. Flip the blue switch!
  `;
  let complete = false;

  if (worldState.movementSwitch) {
    description = `
      Get the hacking tool from the pedestal and use it to bypass the security
      terminal.
    `;
  }

  if (worldState.firstObjectiveHacked) {
    description = `
      Talk to Kevin and Cedric, then take command of the Fog Owl!
    `;
  }

  if (worldState.fredricThreatReceived) {
    description = `
      Get the self-destruct override codes from Ryan! You'll need a fire 
      extinguisher.
    `;
  }

  if (worldState.ryanSaved) {
    description = `
      Use the override codes to abort the Fog Owl's self-destruct sequence!
    `;
  }

  if (worldState.missionComplete) {
    description = `
      Board the Fog Owl and begin your adventure!
    `;
    complete = true;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
}

module.exports = updateQuestStatus
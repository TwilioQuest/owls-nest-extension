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
      Talk to Kevin and Cedric to take command of the Fog Owl!
    `;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
}

module.exports = updateQuestStatus
/**
 * Handle scripting and interaction for the movement tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleMovementTutorial(event, world, worldState) {
  console.log(event);
  // Handle interaction
  if (
    event.name === 'playerDidInteract' &&
    event.target.key === 'medbay_switch'
  ) {
    worldState.movementSwitch = true;
  }

  // Render appropriate state
  if (worldState.movementSwitch) {
    world.destroyEntities('medbay_switch');
    world.destroyEntities('security_pylon');
  }
}

module.exports = handleMovementTutorial;

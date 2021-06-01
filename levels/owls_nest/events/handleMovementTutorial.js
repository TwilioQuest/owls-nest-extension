/**
 * Handle scripting and interaction for the movement tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleMovementTutorial(event, world, worldState) {
  // Handle interaction
  if (event.name === 'playerDidInteract') {
    if (event.target.key === 'switch1') {
      worldState.movementSwitches.one = true;
    }
    if (event.target.key === 'switch2') {
      worldState.movementSwitches.two = true;
    }
    if (event.target.key === 'switch3') {
      worldState.movementSwitches.three = true;
    }
  }

  // Render appropriate state
  if (worldState.movementSwitches.one) {
    world.destroyEntities('switch1');
  }
  if (worldState.movementSwitches.two) {
    world.destroyEntities('switch2');
  }
  if (worldState.movementSwitches.three) {
    world.destroyEntities('switch3');
  }
  if (
    worldState.movementSwitches.one &&
    worldState.movementSwitches.two &&
    worldState.movementSwitches.three
  ) {
    world.destroyEntities('movement_pylon');
  }
}

module.exports = handleMovementTutorial;

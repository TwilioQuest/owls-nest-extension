/**
 * Handle scripting and interaction for the movement tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleMovementTutorial(event, world, worldState) {
  if (event.name === 'levelDidLoad') {
    // Trigger Chiara conversation, if required
    if (!worldState.chiaraInitialGreeting) {
      world.startConversation('chiaraDefault', 'chiaraNeutral.png', 500);
    }
  }
  
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
    world.hideEntities('floating_arrow_switch');
  }
}

module.exports = handleMovementTutorial;

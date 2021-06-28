/**
 * Handle scripting and interaction for the Fredric invasion event
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleFredric(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'kevinCedricDialogTrigger' &&
    !worldState.kevinCedricInitialGreeting
  ) {
    // Trigger Kevin/Cedric conversation, if required
    world.startConversation('kevinCedricDefault', 'cedricNeutral.png');
  }

  // Show fuel line fires, if required
  if (!worldState.fredricThreatReceived) {
    world.hideEntities('fuel_line_fire_right');
    world.hideEntities('fuel_line_fire_left');
  } else {
    world.showEntities('fuel_line_fire_right');
    world.showEntities('fuel_line_fire_left');
  }
}

module.exports = handleFredric;

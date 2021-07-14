// Manage module-level state of whether or not the Margaret conversation
// trigger has happened
let KC_CONVO_TRIGGERED = false;

/**
 * Handle scripting and interaction for the Fredric invasion event
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleFredric(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'kevinCedricDialogTrigger' &&
    !worldState.kevinCedricInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 636,
      y: 512,
    });
    await world.wait(1000);

    // Trigger Kevin/Cedric conversation, if required
    world.startConversation('kevinCedricDefault', 'cedricNeutral.png');
    KC_CONVO_TRIGGERED = true;
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'kevinCedricDefault' &&
    KC_CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    KC_CONVO_TRIGGERED = false;
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

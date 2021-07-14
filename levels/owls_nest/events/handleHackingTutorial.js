// Manage module-level state of whether or not the Margaret conversation
// trigger has happened
let M_CONVO_TRIGGERED = false;

/**
 * Handle scripting and interaction for the hacking tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
 async function handleHackingTutorial(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'margaretDialogTrigger' &&
    !worldState.margaretInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 720,
      y: 840,
    });
    await world.wait(1000);

    // Trigger Margaret conversation
    world.startConversation('margaretDefault', 'margaretNeutral.png');
    M_CONVO_TRIGGERED = true;
  }

  // This should only trigger if the Margaret animation script executed
  // after the module was loaded - not on any other time the player
  // talks to margaret
  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'margaretDefault' &&
    M_CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    M_CONVO_TRIGGERED = false;
  }

  const completedObjectives = world.getContext('completedObjectives');
  if (completedObjectives['owls_nest.hacking_tool_objective']) {
    worldState.firstObjectiveHacked = true;
  }
}

module.exports = handleHackingTutorial;

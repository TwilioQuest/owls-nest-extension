module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const passcode = helper.getNormalizedInput('passcode');
  const worldState = helper.context.levelState['com.twilioquest.owls_nest'];

  if (!worldState.hackingToolAcquired) {
    return helper.fail(`
      Bypassing this system requires the <strong>hacking tool</strong>. 
      Get the hacking tool by walking to the pedestal in this room and pressing 
      the spacebar.
    `);
  }

  if (!passcode) {
    return helper.fail('BZZZT! Laser override passcode is required.');
  }

  if (passcode !== 'level up') {
    return helper.fail(`
      Passcode not recognized. Please read the "Objective" section of the
      hack interface to reveal the correct passcode.
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    You enter the passcode needed to bypass the lasers. Soon after, the lasers
    retract and clear your path forward to the Fog Owl!
  `);
};

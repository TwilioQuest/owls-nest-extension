const STATE_KEY = 'com.twilioquest.owls_nest';

function toggleAnimations(self, event, world) {
  const levelState = world.getState(STATE_KEY) || {};
  if (levelState.fredricThreatReceived) {
    self.playAnimation('worried', true);
  } else {
    self.playAnimation('idle', true);
  }
}

module.exports = {
  animations: {
    idle: {
      frames: [
        8, 9, 10, 11, 12, 13, // shift left
    
        25, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, // blink
    
        8, 9, 10, 11, 12, 13, // shift left
    
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, // blink
    
        0, 1, 2, 3, 4, 5, // wipe sweat
    
        25, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, // blink
    
        16, 17, 18, 19, 20, 21, // shift right
    
        25, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24,
        25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, // blink
    
        0, 1, 2, 3, 4, 5, // wipe sweat
      ],
      frameRate: 6
    },
    worried: {
      frames: Array.from({ length: 32 }, (_, i) => i + 88),
      frameRate: 8
    }
  },
  spriteSheets: {
    OWLN_ryan: {
      fileName: 'ryan.png',
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_ryan',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: toggleAnimations,
    onPlayerDidInteract: (self, event, world) => {
      if (
        event.target.type === 'owln_ryan'
      ) {
        world.startConversation('ryanDefault', 'ryanNeutral.png');
      }
    },
  }
};

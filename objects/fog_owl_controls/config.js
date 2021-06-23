const STATE_KEY = 'com.twilioquest.owls_nest';

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 1, 2, 1],
      frameRate: 2
    },
    danger: {
      frames: [3, 4, 5],
      frameRate: 3
    }
  },
  spriteSheets: {
    OWLN_control_panel: {
      fileName: 'controls.png',
      frameDimensions: {
        width: 48,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_control_panel',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      const levelState = world.getState(STATE_KEY);
      if (levelState.fredricThreatReceived) {
        self.playAnimation('danger', true);
      } else {
        self.playAnimation('idle', true);
      }
    },
    onConversationDidEnd: (self, event, world) => {
      const levelState = world.getState(STATE_KEY);
      if (levelState.fredricThreatReceived) {
        self.playAnimation('danger', true);
      } else {
        self.playAnimation('idle', true);
      }
    },
  }
};

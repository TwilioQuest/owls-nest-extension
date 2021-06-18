const STATE_KEY = 'com.twilioquest.owls_nest';

module.exports = {
  animations: {
    idle: {
      frames: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23
      ],
      frameRate: 4
    }
  },
  spriteSheets: {
    OWLN_fredric: {
      fileName: 'fredric_holo.png',
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_fredric',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation('idle', true);
    },
    onPlayerDidInteract: (self, event, world) => {
      
    },
  }
};

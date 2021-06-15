function onMapDidLoad(self, event, world) {
  self.sprite.body.enable = false;
}

module.exports = {
  animations: {},
  spriteSheets: {
    OWLN_hacking_tool: {
      fileName: 'HackingDevice.png',
      frameDimensions: {
        width: 24,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_hacking_tool',
      layers: [],
    },
  },
  events: {
    onMapDidLoad
  }
};

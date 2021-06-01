module.exports = {
  animations: {
    objectiveNotCompleted: {
      frames: [0],
      frameRate: 1,
    },
    objectiveCompleted: {
      frames: [0, 1],
      frameRate: 2,
    },
    objectiveCompleting: {
      frames: [0, 1],
      frameRate: 2,
    },
  },
  spriteSheets: {
    chiara: {
      fileName: 'spritesheet_chiara.png',
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'chiara',
      layers: [],
    },
  },
};

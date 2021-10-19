const STATE_KEY = 'com.twilioquest.owls_nest';

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameRate: 6
    },
    empty: {
      frames: [10],
      frameRate: 1
    }
  },
  spriteSheets: {
    OWLN_hacking_tool: {
      fileName: 'HackingDevicewithPedestal.png',
      frameDimensions: {
        width: 24,
        height: 48,
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
    onMapDidLoad: (self, event, world) => {
      const levelState = world.getState(STATE_KEY) || {};
      if (levelState.hackingToolAcquired) {
        self.playAnimation('empty', true);
        self.interactable = false;
      } else {
        self.playAnimation('idle', true);
      }
    },
    onPlayerDidInteract: (self, event, world) => {
      const levelState = world.getState(STATE_KEY) || {};

      if (
        event.target.key === 'hacking_device' &&
        !levelState.hackingToolAcquired
      ) {
        world.showNotification(`
          <i>このハッキングツールを使えば、この部屋のレーザーバリアーを制御する<span class="highlight">端末をハック</span>できるはずだ。</i>
          <br/><br/>
          (オブジェクトをハックするには、オブジェクトに近づき、<span class="highlight">スペースキー</span>を押すと、ハッキングのインターフェースが表示される）。
        `);

        levelState.hackingToolAcquired = true;
        self.playAnimation('empty', true);
        self.interactable = false;
      }
    },
  }
};

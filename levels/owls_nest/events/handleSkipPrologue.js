const SKIP_BUTTON_PROLOGUE_ID = "skip-prologue-button";
const STYLE_TAG_TITLE = "skip-button-style-sheet";

function handleSkipPrologue(event, world, worldState) {
  if (event.name === "levelDidLoad" || event.name === "mapDidLoad") {
    if (document.getElementById(SKIP_BUTTON_PROLOGUE_ID)) {
      // If element already exists, we don't need to add a new copy
      return;
    }

    const skipPrologueButton = document.createElement("button");

    skipPrologueButton.textContent = world.getTranslatedString('owls_nest.handleSkipPrologue.skip');
    skipPrologueButton.id = SKIP_BUTTON_PROLOGUE_ID;

    skipPrologueButton.onclick = () => {
      if (
        window.confirm(world.getTranslatedString('owls_nest.handleSkipPrologue.confirm'))
      ) {
        worldState.shouldSkipPrologue = true;
        world.warp("fog_owl");
      }
    };

    document.body.appendChild(skipPrologueButton);

    // Style the button
    const skipPrologueStyles = document.createElement("style");
    skipPrologueStyles.title = STYLE_TAG_TITLE;

    skipPrologueStyles.innerHTML = `
      #${SKIP_BUTTON_PROLOGUE_ID} {
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;

        font-size: 1.5rem;
        font-family: 'Roboto Mono', Consolas, monospace;

        background-color: transparent;
        color: #777;
        border: none;
      }

      #${SKIP_BUTTON_PROLOGUE_ID}:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `;

    document.head.appendChild(skipPrologueStyles);
  }

  if (event.name === "levelWillUnload") {
    // Remove button and style elements on level unload
    const skipPrologueButton = document.getElementById(SKIP_BUTTON_PROLOGUE_ID);
    document.body.removeChild(skipPrologueButton);

    const skipPrologueStyles = document.querySelector(
      `style[title=${STYLE_TAG_TITLE}]`
    );
    document.head.removeChild(skipPrologueStyles);
  }
}

module.exports = handleSkipPrologue;

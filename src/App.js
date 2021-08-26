import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "☀️": "sunny",
  "☔": "umbrella",
  "☁️": "cloud",
  "❄️": "snowflake",
  "⛄": "snowman",
  "⚡": "zap",
  "🌀": "cyclone",
  "🌁": "foggy",
  "🌊": "ocean",
  "🐩": "poodle",
  "🐾": "paw_prints",
  "💐": "bouquet",
  "🌸": "cherry_blossom",
  "🌷": "tulip",
  "🍀": "four_leaf_clover",
  "🌹": "rose",
  "🌻": "sunflower",
  "🌺": "hibiscus",
  "🍁": "maple_leaf",
  "🍃": "leaves",
  "🍂": "fallen_leaf",
  "🌿": "herb",
  "🍄": "mushroom",
  "🌵": "cactus",
  "🌴": "palm_tree",
  "🌲": "evergreen_tree",
  "🌳": "deciduous_tree",
  "🌰": "chestnut",
  "🌱": "seedling",
  "🌼": "blossom",
  "🌾": "ear_of_rice",
  "🐚": "shell",
  "🌐": "globe_with_meridians",
  "🌞": "sun_with_face",
  "🌝": "full_moon_with_face",
  "🌚": "new_moon_with_face"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "We do not have this in our database";
    }

    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={inputHandler}></input>
      <h1>{meaning}</h1>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji, index) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

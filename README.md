
## 🎮 **Simon Says Game**

This is a modern, web-based version of the classic **"Simon Says"** game. Test your memory and pattern-recognition skills by following an increasingly complex sequence of color flashes and sounds as you advance through the levels!


## 🛠️ Project Structure

This game is built using **HTML**, **CSS**, and **JavaScript**.

- **JavaScript** handles the game logic, user input, color/sound sequence generation, and level progression.
- **HTML** defines the layout with circular color buttons and headings.
- **CSS** styles the UI with a dark theme, center circle layout, and animation effects.


## 🎮 How to Play

1. **Start the Game**: Press any key to begin. A color flashes with a unique sound.
2. **Follow the Pattern**: Click the buttons in the same order the game showed.
3. **Level Up**: Each successful attempt adds a new color to the sequence.
4. **Game Over**: If you click the wrong button, the game ends and shows your score. Press any key to restart.



## ✨ Features & Improvements

- 🎨 **Modern circular layout** matching the original game.
- 🎵 **Exact Simon game sounds** added using online audio.
- 🌑 **Dark background theme** with consistent black borders between buttons.
- ⚡ **Smooth flash animations** without white outer glow.
- 🧾 **Score display and reset mechanism**.
- 🙋 **Credit footer** with developer name: _KOTHAPALLY CHANDU_.



## 📂 Code Overview

### JavaScript (`app.js`)

**Variables:**
- `gameSeq[]` – Stores game-generated sequence.
- `userSeq[]` – Stores player’s clicks.
- `level` – Tracks game level.
- `started` – Boolean flag for game state.

**Main Functions:**
- `levelUp()` – Advances the game level and shows next color.
- `btnFlash(btn)` – Flashes a button visually and plays its sound.
- `checkAns(idx)` – Compares user input with game sequence.
- `btnPress()` – Handles button clicks.
- `reset()` – Resets the game after a failure.

### HTML (`index.html`)
- Structure with title, instruction, and four quadrant buttons.
- Developer credit added at the bottom.

### CSS (`style.css`)
- Styled into a **perfect circular layout** with four quadrant buttons.
- All gaps and borders blend into a black background.
- Smooth flash effect using `background-color` override.
- Added credit line styled at the bottom.


Open `index.html` in any browser to start playing.



## 📜 License

This project is open-source under the **MIT License**.

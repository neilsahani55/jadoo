# Jadoo

 An attempt to recreate the computer interface from the 2003 movie [Koi Mil Gaya](https://en.wikipedia.org/wiki/Koi..._Mil_Gaya)

 On desktop press <kbd>Enter</kbd> and play the notes with the <kbd>B</kbd>–<kbd>F</kbd> keys; on phones and tablets just tap to start and use the on-screen keypad.

<a href="https://neilsahani55.github.io/jadoo">![jadoo screenshot](assets/jadoo.png)</a>

## What's new in this version

The original project was desktop-only. This version adds:

- **Full mobile support** — proper viewport scaling, tap to start, and an on-screen CRT-style <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> <kbd>E</kbd> <kbd>F</kbd> keypad so the notes can be played on touch screens
- **Responsive layout** — the interface re-arranges itself for portrait phones and tablets, while landscape and desktop keep the original composition
- **Smoother animations** — the wave field now animates on the GPU compositor instead of re-triggering layout every frame, and heavy blur effects are skipped on mobile GPUs
- **Cleanups** — removed dead tracking code, fixed duplicate stylesheet loading, and added a `#start` URL hash that jumps straight into the interface

## Credits

Based on [jadoo](https://github.com/arjunnn/jadoo) by Arjun Munji, which built the original desktop experience.

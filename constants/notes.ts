import Note from "../models/note"

const Notes: Note[] = [
  { frequency: 261.63, name: 'C', keyType: 'white', keyCode: 'KeyA' },
  { frequency: 277.18, name: 'C#', keyType: 'black', keyCode: 'KeyS' },
  { frequency: 293.66, name: 'D', keyType: 'white', keyCode: 'KeyD' },
  { frequency: 311.13, name: 'D#', keyType: 'black', keyCode: 'KeyF' },
  { frequency: 329.63, name: 'E', keyType: 'white', keyCode: 'KeyG' },
  { frequency: 349.23, name: 'F', keyType: 'white', keyCode: 'KeyH' },
  { frequency: 369.99, name: 'F#', keyType: 'black', keyCode: 'KeyJ' },
  { frequency: 392.00, name: 'G', keyType: 'white', keyCode: 'KeyK' },
  { frequency: 415.30, name: 'G#', keyType: 'black', keyCode: 'KeyN' },
  { frequency: 440.00, name: 'A', keyType: 'white', keyCode: 'KeyM' },
  { frequency: 466.16, name: 'A#', keyType: 'black', keyCode: 'Comma' },
  { frequency: 493.88, name: 'B', keyType: 'white', keyCode: 'Period' },
]

export default Notes
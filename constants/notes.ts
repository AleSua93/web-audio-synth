import Note from "../models/note"

const Notes: Note[] = [
  { frequency: 261.63, name: 'C', keyType: 'white', keyCode: 'KeyZ' },
  { frequency: 277.18, name: 'C#', keyType: 'black', keyCode: 'KeyS' },
  { frequency: 293.66, name: 'D', keyType: 'white', keyCode: 'KeyX' },
  { frequency: 311.13, name: 'D#', keyType: 'black', keyCode: 'KeyD' },
  { frequency: 329.63, name: 'E', keyType: 'white', keyCode: 'KeyC' },
  { frequency: 349.23, name: 'F', keyType: 'white', keyCode: 'KeyV' },
  { frequency: 369.99, name: 'F#', keyType: 'black', keyCode: 'KeyG' },
  { frequency: 392.00, name: 'G', keyType: 'white', keyCode: 'KeyB' },
  { frequency: 415.30, name: 'G#', keyType: 'black', keyCode: 'KeyH' },
  { frequency: 440.00, name: 'A', keyType: 'white', keyCode: 'KeyN' },
  { frequency: 466.16, name: 'A#', keyType: 'black', keyCode: 'KeyJ' },
  { frequency: 493.88, name: 'B', keyType: 'white', keyCode: 'KeyM' },
]

export default Notes
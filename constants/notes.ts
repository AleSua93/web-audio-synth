import Note from "../models/note"

const Notes: Note[] = [
  { frequency: 261.63, name: 'C', keyType: 'white' },
  { frequency: 277.18, name: 'C#', keyType: 'black' },
  { frequency: 293.66, name: 'D', keyType: 'white' },
  { frequency: 311.13, name: 'D#', keyType: 'black' },
  { frequency: 329.63, name: 'E', keyType: 'white' },
  { frequency: 349.23, name: 'F', keyType: 'white' },
  { frequency: 369.99, name: 'F#', keyType: 'black' },
  { frequency: 392.00, name: 'G', keyType: 'white' },
  { frequency: 415.30, name: 'G#', keyType: 'black' },
  { frequency: 440.00, name: 'A', keyType: 'white' },
  { frequency: 466.16, name: 'A#', keyType: 'black' },
  { frequency: 493.88, name: 'B', keyType: 'white' },
]

export default Notes
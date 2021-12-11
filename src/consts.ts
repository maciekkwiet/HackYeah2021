export const piecesCategory = [
  'ZABAWKI',
  'TRANSPORTERY',
  'KOCE',
  'AKCESORIA',
  'SRODKI_HIGIENY',
  'SMAKOŁYKI',
  'MISKI',
  'INNE',
];
export const weightCategory = ['KARMA', 'SMAKOŁYKI', 'INNE'];

export const allCategories = [...new Set([...piecesCategory, ...weightCategory])].sort();

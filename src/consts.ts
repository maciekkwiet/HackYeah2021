export const piecesCategory = [
  'ZABAWKI',
  'TRANSPORTERY',
  'KOCE',
  'AKCESORIA',
  'SRODKI HIGIENY',
  'SMAKOŁYKI',
  'MISKI',
  'INNE',
];
export const weightCategory = ['KARMA', 'SMAKOŁYKI', 'INNE'];

export const allCategories = [...new Set([...piecesCategory, ...weightCategory])].sort();

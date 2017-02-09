export interface User {
  name: string; // text
  age?: number; // number
  gender?: string; // radio
  role?: string; // select (primitive)
  theme?: Theme; // select (object)
  topics?: string[]; // multiple select
  isActive?: boolean; // checkbox
  toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
}

// theme.interface.ts

export interface Theme {
  display: string;
  backgroundColor: string;
  fontColor: string;
}

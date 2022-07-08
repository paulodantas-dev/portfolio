export interface IThemeProvider {
  children: React.ReactNode;
}

export interface ITheme {
  theme: string;
  toggleTheme: () => void;
}

export const defaultTheme = 'system'; // 'light' | 'dark' | 'system'

export function getThemePreference(): 'light' | 'dark' {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  }
  
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  
  return 'light';
}

export function setTheme(theme: 'light' | 'dark') {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
  
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
  }
}

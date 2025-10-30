import { languages as defaultLanguages } from "./constants.js";

const LOCAL_STORAGE_KEY = 'selectedLanguages';

export function saveSelectedLanguages(languages) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(languages));
}

export function getSelectedLanguages() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : defaultLanguages.map(lang => lang.value);
}

export function filterLanguages(allLanguages, selectedLanguageCodes) {
  if (selectedLanguageCodes.length === 0) {
    return defaultLanguages; // Si no hay seleccionados, mostrar los idiomas por defecto
  }
  return allLanguages.filter(lang => selectedLanguageCodes.includes(lang.value));
}
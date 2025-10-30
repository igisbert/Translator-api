import { allLanguages } from "./constants.js";
import { getSelectedLanguages, filterLanguages } from "./languageSettings.js";

export function updateLanguageSelectorOptions(selector, languages, currentSelectedValue) {
  selector.innerHTML = ""; // Limpiar opciones existentes
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.value;
    option.textContent = lang.label;
    if (lang.value === currentSelectedValue) {
      option.selected = true;
    }
    selector.appendChild(option);
  });
}

export function initLanguageSelectors() {
  document.addEventListener("DOMContentLoaded", () => {
    const currentSelected = getSelectedLanguages();
    const initialFilteredLanguages = filterLanguages(allLanguages, currentSelected);

    const sourceSelector = document.getElementById("source-language");
    const targetSelector = document.getElementById("target-language");

    if (sourceSelector && targetSelector) {
      const initialSourceValue = sourceSelector.value;
      const initialTargetValue = targetSelector.value;

      updateLanguageSelectorOptions(sourceSelector, initialFilteredLanguages, initialSourceValue);
      updateLanguageSelectorOptions(targetSelector, initialFilteredLanguages, initialTargetValue);
    }
  });
}

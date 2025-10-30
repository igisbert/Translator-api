import { allLanguages } from "./constants.js";
import { getSelectedLanguages, filterLanguages } from "./languageSettings.js";
import { updateLanguageSelectorOptions } from "./initLanguageSelectors.js";

export function handleLanguageUpdates() {
  document.addEventListener("languages-updated", () => {
    const currentSelected = getSelectedLanguages();
    const newFilteredLanguages = filterLanguages(allLanguages, currentSelected);

    const sourceSelector = document.getElementById("source-language");
    const targetSelector = document.getElementById("target-language");

    if (sourceSelector && targetSelector) {
      const currentSourceValue = sourceSelector.value;
      const currentTargetValue = targetSelector.value;

      updateLanguageSelectorOptions(sourceSelector, newFilteredLanguages, currentSourceValue);
      updateLanguageSelectorOptions(targetSelector, newFilteredLanguages, currentTargetValue);
    }
  });
}

export async function handleTranslation(sourceText, targetText, sourceLanguage, targetLanguage, loader) {
  let loaderTimeout;

  if (!sourceText.value) {
    sourceText.classList.add("shake");
    sourceText.addEventListener(
      "animationend",
      () => {
        sourceText.classList.remove("shake");
      },
      { once: true }
    );
    return;
  }

  const sourceLanguageValue = sourceLanguage.value;
  const targetLanguageValue = targetLanguage.value;

  if (sourceLanguageValue === targetLanguageValue) {
    document.dispatchEvent(
      new CustomEvent("notification", {
        detail: { message: "Los idiomas no pueden ser iguales." },
      })
    );
    return;
  }

  const text = sourceText.value;

  loaderTimeout = setTimeout(() => {
    loader.classList.remove("hidden");
  }, 300);

  try {
    const translator = await Translator.create({
      sourceLanguage: sourceLanguageValue,
      targetLanguage: targetLanguageValue,
    });

    const translation = await translator.translate(text);
    targetText.value = translation;
  } catch (error) {
    console.error("Error durante la traducción:", error);
    document.dispatchEvent(
      new CustomEvent("notification", {
        detail: {
          message: "Error al traducir. Por favor, inténtalo de nuevo.",
        },
      })
    );
    targetText.value = "No se pudo traducir el texto."; 
  } finally {
    clearTimeout(loaderTimeout);
    loader.classList.add("hidden");
  }
}

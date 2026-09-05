import { CURRENT_PROFILE_MODE, PROFILE_MODES } from "./content.js";

const content = PROFILE_MODES[CURRENT_PROFILE_MODE];

document.documentElement.dataset.profileMode = CURRENT_PROFILE_MODE;

document.querySelectorAll("[data-mode-field]").forEach((field) => {
  const value = content?.[field.dataset.modeField];
  if (value) field.textContent = value;
});

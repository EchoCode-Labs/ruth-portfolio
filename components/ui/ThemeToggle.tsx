"use client";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useColorScheme } from "@mui/material/styles";

/**
 * Toggles between light and dark. Reads/writes through MUI's CssVarsProvider
 * state, which persists the visitor's explicit choice in localStorage and
 * otherwise falls back to their OS-level preference.
 *
 * `mode` is `undefined` until the color-scheme init script has run on the
 * client, so we render a neutral placeholder until then instead of managing
 * our own mount effect.
 */
export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  if (mode === undefined) {
    return (
      <IconButton aria-label="Toggle color mode" size="small" disabled>
        <LightModeRoundedIcon fontSize="small" />
      </IconButton>
    );
  }

  const resolvedMode = mode === "system" ? systemMode : mode;
  const isDark = resolvedMode === "dark";

  return (
    <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        aria-label="Toggle color mode"
        onClick={() => setMode(isDark ? "light" : "dark")}
        size="small"
      >
        {isDark ? (
          <LightModeRoundedIcon fontSize="small" />
        ) : (
          <DarkModeRoundedIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
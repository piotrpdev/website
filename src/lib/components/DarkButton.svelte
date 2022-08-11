<script>
    // ? https://dev.to/lenaschnedlitz/create-a-simple-dark-mode-toggle-with-svelte-4b3g

    import { onMount } from "svelte";
    import SunSvg from "./svg/SunSVG.svelte";
    import MoonSvg from "./svg/MoonSvg.svelte";
    import { browser } from "$app/env";

    const STORAGE_KEY = 'theme';
    const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
  
    const THEMES = {
      DARK: 'dark',
      LIGHT: 'light',
    };

    let currentTheme;
  
    const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

    const applyTheme = () => {
        const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
        currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

        if (currentTheme === THEMES.DARK) {
        document.body.classList.remove(THEMES.LIGHT);
        document.body.classList.add(THEMES.DARK);
        } else {
        document.body.classList.remove(THEMES.DARK);
        document.body.classList.add(THEMES.LIGHT);
        }
    };
  
    const toggleTheme = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
  
      if (stored) {
        // clear storage
        localStorage.removeItem(STORAGE_KEY);
      } else {
        // store opposite of preference
        localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
      }
  
      // TODO: apply new theme
        applyTheme();
    };

    onMount(() => {
        if (browser) {
          applyTheme();
          window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
        }
    });
  </script>

<button class="dark-toggle" on:click={toggleTheme}>
    {#if currentTheme === THEMES.LIGHT}
        <SunSvg />
    {:else}
        <MoonSvg />
    {/if}
</button>
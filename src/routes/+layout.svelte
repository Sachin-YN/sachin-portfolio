<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  export const theme = writable<'light'|'dark'>('light');

  onMount(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    theme.set(initial);
    document.documentElement.classList.add(initial);
  });

  function toggle() {
    theme.update(cur => {
      const next = cur === 'light' ? 'dark' : 'light';
      document.documentElement.classList.replace(cur, next);
      localStorage.setItem('theme', next);
      return next;
    });
  }
</script>

<div class="flex font-sans">
  <button on:click={toggle} class="fixed top-4 left-4 z-50 p-2 bg-accent rounded-full">
    Toggle Theme
  </button>
  <main class="ml-0 pr-20 h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
    <slot />
  </main>
</div>

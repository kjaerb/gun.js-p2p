<script lang="ts">
    import Chat from './Chat.svelte';
    import Header from './Header.svelte'
    import { username } from './gun'
    import Login from './Login.svelte';
</script>

<main class="app">
  <div class="container">
    <Header />
    {#if $username}
      <Chat />
    {:else}
      <Login />
    {/if}
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }

  .app {
    height: 100vh;
    width: 100vw;
    background: rgb(45, 45, 75);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    height: 100vh;
    width: 50%;
  }
</style>

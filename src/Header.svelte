<script lang="ts">
    import { user, username } from './gun'

    export function signOut() {
        user.leave()
        username.set('')
    }

</script>

<div class="header">
    <h3>
        Gun.js p2p
    </h3>
    {#if $username}
        <div>
            Some text
        </div>
        <button on:click={signOut}>
            Sign out
        </button>
    {:else}
        <h3>
            Login to see
        </h3>
    {/if}
    
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fafafa;
        height: 5%;
        padding: 1rem;
    }

    button {
        border: none;
        background: rgb(73, 73, 73);
        color: white;
        padding: .5rem;
        border-radius: .25rem;
        cursor: pointer;
    }
</style>
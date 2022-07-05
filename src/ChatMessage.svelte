<script lang="ts">
    import type { ChatMsg } from './lib/ChatInterface'
    import { username } from './user'

    export let msg = ""
    export let author = ""
    export let timestamp = ""

    let message:ChatMsg = {
        message: msg,
        author: author,
        timestamp: timestamp
    }

</script>

{#if $username == author}
    <div class="chat-msg">
        <img src={`https://avatars.dicebear.com/api/human/${author}.svg`} alt="avatar">
        <div class="msg-container">
            <p class="msg">{message.message}</p>
            <p class="timestamp">{message.timestamp}</p>
        </div>
    </div>
{:else}
    <div class="chat-msg reversed">
        <img src={`https://avatars.dicebear.com/api/human/${author}.svg`} alt="avatar">
        <div class="msg-container">
            <p class="msg">{message.message}</p>
            <p class="timestamp">{message.timestamp}</p>
        </div>
    </div>
{/if}
    

<style>
    .chat-msg {
        display: flex;
        margin: .5rem;
        align-self: flex-end;
        align-items: center;
        flex-direction: row-reverse;
        width: 80%;
    }

    .reversed {
        align-self: flex-start;
        flex-direction: row;
    }

    .reversed .msg-container .msg {
        align-self: baseline;
    }

    img {
        height: 3rem;
        background: white;
        border-radius: 50%;
        padding: .25rem;
        margin: 0 .25rem;
    }

    .msg-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .msg {
        padding: .75rem;
        margin-top: .5rem;
        background: rgb(51, 51, 233);
        border-radius: .5rem;
        color: white;
        text-overflow: clip;
        overflow-wrap: break-word;
        align-self: flex-end;
        width: fit-content;
        max-width: 100%;
    }

    .timestamp {
        font-size: .75em;
    }
</style>
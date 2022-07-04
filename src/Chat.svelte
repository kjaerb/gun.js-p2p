<script lang="ts">
    import { onMount } from 'svelte';
    import type { Writable } from 'svelte/store';
    import ChatMessages from './ChatMessages.svelte';
    import type { ChatMsg } from './lib/ChatInterface'


    import { gun, chatDB } from './gun';
    import { username } from './gun'

    let newMsg = ""
    let messages:ChatMsg[] = []

    onMount(() => {
        chatDB.map()
              .once(async (data, id) => {
                if (data) {
                    let chatMsg:ChatMsg = {
                        message: data.msg,
                        author: data.author,
                        timestamp: data.timestamp
                    }

                    messages = [...messages.slice(-100), chatMsg]
                }
        })
    })

    async function sendMessage() {
        let index = new Date().toISOString()

        var message:ChatMsg = {
            message: newMsg,
            author: "me",
            timestamp: index
            
        }
        chatDB.get(index).put(message)
        newMsg = ""
    }
</script>

<div class="chat">
    <div class="chat-container">
        <ul>
            {#each messages as message}
                <ChatMessages msg={message.message} author={message.author} timestamp={message.timestamp} />
            {/each}
        </ul>
    </div>
    <form class="msg-box" on:submit|preventDefault={sendMessage}>
        <input type="text" name="message" placeholder="Type a message..." bind:value={newMsg}>
        <button type="submit">Send</button>
    </form>
</div>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 95%;
        width: 100%;
        background-color: #c6c6c6;
    }

    .chat-container {

    }

    .msg-box {
        height: 3rem;
        width: 100%;

    }
    
    .msg-box input {
        height: 100%;
        padding: .5rem;
        font-size: 16px;
        overflow: hidden;
        margin: 0;
        border: none;
        width: 80%;
    }

    .msg-box button {
        height: 100%;
        padding: 0;
        margin: 0;
        border: none;
        width: 19%;
    }
</style>
<script lang="ts">

    import { onMount } from 'svelte';
    import type { Writable } from 'svelte/store';
    import ChatMessage from './ChatMessage.svelte';
    import type { ChatMsg } from './lib/ChatInterface'
    import 'gun/sea'


    import { gun, chatDB, user } from './user';
    import { username } from './user'
    import { SEA } from 'gun';

    let newMsg = ""
    let messages = []

    const key = "#foo"

    onMount(() => {
        chatDB.map()
              .once(async (data, id) => {
                if (data && data.msg != undefined) {
                    let msg = {
                        message: (await SEA.decrypt(data.msg, key)) + '',
                        author: gun.user(data).get('alias'),
                        timestamp: new Date(Gun.state.is(data, 'msg'))
                    }

                    messages = [...messages.slice(-100), msg]
                }
        })

    })

    async function sendMessage() {

        if(newMsg == "") {
            console.log('no message')
            return
        }

        let index = new Date().toISOString()
        let secret = await SEA.encrypt(newMsg, key)
        let message = user.get('all').set({
            msg: secret,
        })

        chatDB.get(index).put(message)
        newMsg = ""
    }
</script>

<div class="chat">
    <div class="chat-container">
        {#each messages as message}
            <ChatMessage msg={message.message} author={message.author._.put} timestamp={message.timestamp} />
        {/each}
    </div>
    <form class="msg-box" on:submit|preventDefault={sendMessage}>
        <input type="text" name="message" placeholder="Type a message..." bind:value={newMsg}>
        <button type="submit">✉️</button>
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
        height: max-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
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
        font-size: 1.25em;
        background: rgb(0, 185, 0);
    }
</style>
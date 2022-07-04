<script lang="ts">
    import type { ChatMsg } from './lib/ChatInterface'

    export let msg = ""
    export let author = ""
    export let timestamp = ""

    let message:ChatMsg = {
        message: msg,
        author: author,
        timestamp: timestamp
    }

</script>

<div class="chat-msg">
    <li>
        {message.message}
    </li>
</div>

<style>
    .chat-msg {

    }
</style>
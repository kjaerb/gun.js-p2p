<script lang="ts">
import { user, username } from "./user";



    let usernameInput:string
    let passwordInput:string

    function login() {
        user.auth(usernameInput, passwordInput, ({err}) => err && alert(err))
    }

    function signUp() {
        user.create(usernameInput, passwordInput, ({err}) => {
            if(err) {
                alert(err)
            } else {
                login()
            }
        })
    }

    function keyLogin(e:KeyboardEvent) {
        if(e && e.keyCode == 13) {
            login()
        }
    }
    

</script>

<div class="login">
    <h1>
        Login to see chat
    </h1>
    <form>
        <input type="text" name="username" placeholder="Username" bind:value={usernameInput} on:keypress={keyLogin}>
        <input type="password" name="password" placeholder="Password" bind:value={passwordInput} on:keypress={keyLogin}>
    </form>
    <button on:click={login}>
        Login
    </button>
    <button on:click={signUp}>
        Sign up
    </button>
</div>

<style>
    .login {
        height: 95%;
        background: #c6c6c6;
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        margin: 1rem auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input, button {
        padding: .5rem;
        margin: .5rem;
        border: none;
        cursor: pointer;
        
    }
</style>
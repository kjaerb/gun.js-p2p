import GUN from 'gun'
import { writable } from 'svelte/store'
import 'gun/axe'
import 'gun/sea'

export const gun = GUN()

export const chatDB = gun.get('chat-p2p')

export const user = gun.user().recall({sessionStorage: true})

export const username = writable('')

user.get('alias').on((v:string) => username.set(v))

gun.on('auth', async() => {
    const alias = await user.get('alias')
    username.set(alias)

    console.log(`Signed in as ${alias}`)
})




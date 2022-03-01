import { writable } from 'svelte/store'

export const userName
	= writable (localStorage.getItem ('userName') ?? "webjeda")

userName.subscribe (val => localStorage.setItem ('userName', val))
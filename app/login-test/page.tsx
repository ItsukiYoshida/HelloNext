'use client'
import { useActionState } from 'react'
import { loginAction } from './login'
const initialState = { message: '' }

export default function Page() {
	const [state, formAction, isPending] = useActionState(loginAction, initialState)
	return (
		<>
			<h1>Login Test</h1>
			<form action={formAction}>
				<div><input type="text" name="user_id" placeholder="User ID" /></div>
				<div><input type="password" name="password" placeholder="Password" /></div>
				<button type="submit">Login</button>
				<p>{state?.message}</p>
			</form>
		</>
	)
}
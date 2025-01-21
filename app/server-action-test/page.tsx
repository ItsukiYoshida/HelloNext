export default function Page() {
	async function action_test(form) {
		'use server'
		const message = form.get('message')
		console.log({message})
	}
	return (
		<>
			<h1>Server Action Test</h1>
			<form action={action_test}>
				<input type="text" name="message" defaultValue="hoge huga" />
				<button type="submit">Ok</button>
			</form>
		</>
	)
}
'use client'

export default function GlobalError({error, reset,}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<html>
			<body>
				<h2>Global Error</h2>
				<div>{error.message}</div>
				<button onClick={reset}>Try Again</button>
			</body>
		</html>
	)
}
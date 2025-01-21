import { headers } from 'next/headers'
export async function GET(request: Request) {
	const user_agent = (await headers()).get('User-Agent')
	return new Response('OK', {status: 200, headers: {'X-Test-Header': user_agent}} )
}
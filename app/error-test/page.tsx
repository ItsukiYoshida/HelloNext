export default function Page({param, searchParams}) {
	const error = searchParams?.error
	if (error) {
		throw new Error('ERROR!!!!!')
	}
	return <h1>Error Test</h1>
}
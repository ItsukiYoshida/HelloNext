import Image from 'next/image'

export default function Page() {
	return (
		<>
			<h1>Image Test</h1>
			<Image src="/image/sample.jpg" width={600} height={600} alt="Sample Image" />
		</>
	)
}
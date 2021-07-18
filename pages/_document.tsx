import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="../../public/fonts/Eurostile-Bold.otf" />
					<link href="../../public/fonts/Eurostile-Regular.otf" />
					<title>BNO</title>
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

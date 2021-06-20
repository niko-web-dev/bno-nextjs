// @ts-ignore
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="static/fonts/Eurostile-Bold.otf" rel="stylesheet" />
					<link href="static/fonts/Eurostile-Regular.otf" rel="stylesheet" />
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

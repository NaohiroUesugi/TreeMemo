import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <>
        <style jsx global>{`
          html {
            height: 100%;
          }
          body {
            height: 100%;
            margin: 0;
          }
          #__next {
            height: 100%;
          }
        `}</style>
        <Html lang="en">
          <DocumentHead />
          <body>
            <Main />
            <BlitzScript />
          </body>
        </Html>
      </>
    )
  }
}

export default MyDocument

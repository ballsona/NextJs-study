// _document.tsx
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      // sheet을 사용해 정의된 모든 스타일을 수집
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      // Documents의 initial props
      const initialProps = await Document.getInitialProps(ctx); // props와 styles를 반환
      return {
        ...initialProps,
        styles: (
          <>
            {" "}
            {initialProps.styles} {sheet.getStyleElement()}{" "}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

// styled-components 를 서버사이드 렌더링에서 사용하면, 서버단에서 미리 만든 페이지에 css를 적용시키는 방식이기 때문에
// 사용자에게 css가 적용되지 않은 페이지가 먼저 보여지게 된다.
// 이를 방지하기 위해 css 를 미리 수집해서 처리하는 과정이 필요하다.

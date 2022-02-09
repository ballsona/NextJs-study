### Pre-rendering

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

서버 사이드 렌더링(nextjs)은 클라이언트 사이드 렌더링(react)와 달리 각 페이지별로 즉각적으로 HTML를 생성한다. (리액트는 첫 로딩때 한번에 함.)
이는 성능이나 seo 면에서 더 좋음. 

### Two forms of Pre-rendering

- Static Generation (Recommended): 
    - The HTML is generated at build time and will be reused on each request.
    - getStaticProps, getStaticPaths (api 요청 전에 프리 랜더링해야할 경우 적절.)
- Server-side Rendering
    - The HTML is generated on each request.
    - getServerSideProps (api 요청/업데이트가 자주 있는 경우에 적절.)

static generation는 빌드타임에 html를 생성하고 각 요청마다 재사용하므로 성능이 좋기 때문에 추천하지만, 때로는 ssr을 써야 효율적인 경우들이 있다. (ex. api request가 잦은 경우)

https://nextjs.org/docs/basic-features/pages
/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/old-blog/:post-id",
        destination:"/new-blog/:post-id",
        permanent:false,
      }
    ]
    // redirects : source URL 를 입력하면 destination로 URL이 변하면서 이동.
  },
  async rewrites(){
    return [
      {
        source : "/api/movies",
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source : "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
    // rewrites : source URL 를 입력하면 URL은 변하지 않으면서 destination로 이동.
  }
}

module.exports = nextConfig

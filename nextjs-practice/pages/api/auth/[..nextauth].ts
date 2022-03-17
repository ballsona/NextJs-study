import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: "3f4c2b7709f55a1e3dcadc0f9c5871c7",
      clientSecret: "Iamthebest",
    }),
  ],
});

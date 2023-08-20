import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  server: {
    port: 3000,
    proxy: {
      "/auth": {
        // 요청 전달 대상 서버 주소 설정
        target: "http://localhost:4100",
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
        changeOrigin: true,
        // SSL 인증서 검증 무시
        secure: false,
      },
      "/user": {
        target: "http://localhost:4100",
        changeOrigin: true,
        secure: false,
      },
      "/vote": {
        target: "http://localhost:4100",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import type { Metadata, Viewport } from "next";
import "./globals.built.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "HA-SOLUTIONS | Đối Tác Chuyển Đổi Số & Công Nghệ Thông Minh Cho Doanh Nghiệp",
  description: "HA-SOLUTIONS đồng hành cùng doanh nghiệp hiện đại hóa vận hành, tinh gọn quy trình, kết nối hệ sinh thái phần mềm và ứng dụng trí tuệ nhân tạo (AI) thực tiễn.",
  keywords: ["chuyển đổi số", "phần mềm doanh nghiệp", "tự động hóa AI", "tích hợp hệ thống", "HA-SOLUTIONS", "digital transformation"],
  authors: [{ name: "HA-SOLUTIONS" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth antialiased dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeNetlifyBadge() {
                  var b = document.getElementById('nl-badge-frame') || document.getElementById('nl-hud-frame');
                  if (b) b.remove();
                }
                if (typeof window !== 'undefined') {
                  var obs = new MutationObserver(removeNetlifyBadge);
                  obs.observe(document.documentElement, { childList: true, subtree: true });
                  window.addEventListener('DOMContentLoaded', removeNetlifyBadge);
                  window.addEventListener('load', removeNetlifyBadge);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200 overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

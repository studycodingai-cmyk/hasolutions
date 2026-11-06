import type { Metadata, Viewport } from "next";
import "./globals.built.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://cungcapgiaiphap.com"),
  title: "HA-SOLUTIONS | Đối Tác Chuyển Đổi Số & Công Nghệ Thông Minh Cho Doanh Nghiệp",
  description: "HA-SOLUTIONS đồng hành cùng doanh nghiệp hiện đại hóa vận hành, tinh gọn quy trình, kết nối hệ sinh thái phần mềm và ứng dụng trí tuệ nhân tạo (AI) thực tiễn.",
  keywords: [
    "cung cấp giải pháp",
    "cung cấp giải pháp công nghệ",
    "cung cấp giải pháp chuyển đổi số",
    "chuyển đổi số",
    "phần mềm doanh nghiệp",
    "tự động hóa AI",
    "tích hợp hệ thống",
    "HA-SOLUTIONS",
    "digital transformation",
    "enterprise AI",
    "custom software"
  ],
  authors: [{ name: "HA-SOLUTIONS", url: "https://cungcapgiaiphap.com" }],
  creator: "HA-SOLUTIONS",
  publisher: "HA-SOLUTIONS",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  alternates: {
    canonical: "https://cungcapgiaiphap.com",
    languages: {
      "vi-VN": "https://cungcapgiaiphap.com",
      "en-US": "https://cungcapgiaiphap.com",
      "zh-CN": "https://cungcapgiaiphap.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://cungcapgiaiphap.com",
    siteName: "HA-SOLUTIONS | Cung Cấp Giải Pháp Công Nghệ",
    title: "HA-SOLUTIONS | Đối Tác Chuyển Đổi Số & Công Nghệ Thông Minh Cho Doanh Nghiệp",
    description: "HA-SOLUTIONS đồng hành cùng doanh nghiệp hiện đại hóa vận hành, tinh gọn quy trình, kết nối hệ sinh thái phần mềm và ứng dụng trí tuệ nhân tạo (AI) thực tiễn.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HA-SOLUTIONS - Đối Tác Chuyển Đổi Số & Cung Cấp Giải Pháp Công Nghệ Doanh Nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HA-SOLUTIONS | Đối Tác Chuyển Đổi Số & Công Nghệ Thông Minh Cho Doanh Nghiệp",
    description: "HA-SOLUTIONS đồng hành cùng doanh nghiệp hiện đại hóa vận hành, tinh gọn quy trình, kết nối hệ sinh thái phần mềm và ứng dụng trí tuệ nhân tạo (AI) thực tiễn.",
    images: ["/og-image.png"],
    creator: "@ha_solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cungcapgiaiphap.com/#organization",
      "name": "HA-SOLUTIONS",
      "url": "https://cungcapgiaiphap.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://cungcapgiaiphap.com/#logo",
        "url": "https://cungcapgiaiphap.com/logo.svg",
        "caption": "HA-SOLUTIONS Logo",
      },
      "image": "https://cungcapgiaiphap.com/og-image.png",
      "description": "Đối Tác Chuyển Đổi Số & Cung Cấp Giải Pháp Công Nghệ Thông Minh Cho Doanh Nghiệp",
      "email": "studycodingai@gmail.com",
      "sameAs": ["https://ha-solutions.tech"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://cungcapgiaiphap.com/#service",
      "name": "HA-SOLUTIONS - Cung Cấp Giải Pháp Chuyển Đổi Số & AI Doanh Nghiệp",
      "url": "https://cungcapgiaiphap.com",
      "logo": "https://cungcapgiaiphap.com/logo.svg",
      "image": "https://cungcapgiaiphap.com/og-image.png",
      "description": "Tư vấn kiến trúc giải pháp, thiết kế hệ thống phần mềm may đo, tự động hóa quy trình nghiệp vụ và tích hợp Agentic AI cho doanh nghiệp.",
      "email": "studycodingai@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "VN",
      },
      "priceRange": "$$",
    },
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

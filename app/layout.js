import "./globals.css";

export const metadata = {
  title: "LifeScience Intelligence",
  description:
    "生命科学智能平台 | Biomedical Intelligence Platform"
};

export default function RootLayout({ children }) {

  return (
    <html lang="zh-CN">

      <body>

        {children}

      </body>

    </html>
  );
}

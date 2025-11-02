import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './styles/globals.css';
import './styles/portfolio.css';
import AntdRegistry from './AntdRegistry';

export const metadata = {
  title: 'Kiruthika Subramani - AI Professional Portfolio',
  description: 'Portfolio of Kiruthika Subramani - AI Professional, Data Scientist, and Author',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply theme immediately before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const darkMode = saved ? saved === 'dark' : prefersDark;
                document.documentElement.classList.add(darkMode ? 'dark-theme' : 'light-theme');
              })();
            `,
          }}
        />
        <style>
          {`
            /* Hide until theme class + styles load */
            html:not(.dark-theme):not(.light-theme) body {
              visibility: hidden;
            }
          `}
        </style>
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1890ff',
                borderRadius: 8,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

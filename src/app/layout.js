import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design CSS here
import './styles/globals.css';

export const metadata = {
  title: 'Kiruthika Subramani - AI Professional Portfolio',
  description: 'Portfolio of Kiruthika Subramani - AI Professional, Data Scientist, and Author',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  )
}
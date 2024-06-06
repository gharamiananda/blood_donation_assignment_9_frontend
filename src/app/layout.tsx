

import Providers from '@/lib/Providers/Providers';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';


import "../assets/css/animate.css"
// import "../assets/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';


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
               <>
                  <>
                     <Toaster position='top-center' />
                     {children}
                  </>
               </>

            </body>
         </html>
      </Providers>
   );
}

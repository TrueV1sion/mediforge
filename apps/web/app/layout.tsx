import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediForge - AI-Powered Healthcare Application Generator',
  description: 'Generate HIPAA-compliant healthcare applications with AI. Support for EHR, telemedicine, pharmacy, laboratory, and payer systems.',
  keywords: 'healthcare, medical software, HIPAA, FHIR, EHR, telemedicine, AI, code generation',
  authors: [{ name: 'MediForge Team' }],
  openGraph: {
    title: 'MediForge - Healthcare App Generator',
    description: 'Build HIPAA-compliant healthcare applications in minutes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
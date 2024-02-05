import type { Metadata } from 'next';
import React from 'react';
import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Bardle',
  description: 'Bardle Official',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
metadataBase: new URL('https://center-next99.eu.org/'),
alternates: {
canonical: 'https://center-next99.eu.org/'
},
title: '&#8203;',
description:
'&#8203;',
verification: {
// tambahkan token verifikasi di sini
other: {
"facebook-domain-verification": ["kk3nu12ws6v9t2ldzzl3odp04hxiun"],
google: 'REPLACE_WITH_GOOGLE_TOKEN',
yandex: 'REPLACE_WITH_YANDEX_TOKEN'
}
},
keywords: [
'Seattle web design',
'technical SEO agency',
'technical SEO service',
'web development Seattle',
'branding & design',
'AI business solutions',
'SEO optimization',
'digital marketing'
]
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<header style={{ padding: 20, borderBottom: '1px solid #eee' }}>
<h1>Serbyte Development — Demo</h1>
</header>
<main style={{ padding: 20 }}>{children}</main>
<footer style={{ padding: 20, borderTop: '1px solid #eee' }}>
<small>© Serbyte Demo</small>
</footer>
</body>
</html>
)
}

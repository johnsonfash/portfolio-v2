import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="gtag" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSQPV9WX');` }} strategy="afterInteractive" />
        <link rel="icon" href="/profile.png" />
        <title>TDigital | Innovative Solutions in UI Design and Development | Number One Website Development Company in Lagos Nigeria | Best Mobile App Development Company in Lagos Nigeria | Best Desktop App Development Company in Lagos Nigeria | Best Developers in Lagos Nigeria</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TDigital is a team of expert engineers specializing in UI design, and developing mobile, web, and desktop applications. We also provide comprehensive consultation services to bring your ideas to life." />
        <meta name="keywords" content="TDigital, portfolio, UI design, mobile apps, web apps, desktop apps, consultation, software development, engineering team" />
        <meta name="author" content="TDigital Team" />
        <meta property="og:title" content="TDigital | Innovative Solutions in UI Design and Development" />
        <meta property="og:description" content="Explore TDigital's portfolio showcasing our expertise in UI design and application development. We offer exceptional consultation services to help you achieve your goals." />
        <meta property="og:image" content="https://tdigital.ng/profile.png" />
        <meta property="og:url" content="https://tdigital.ng" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TDigital | Innovative Solutions in UI Design and Development" />
        <meta name="twitter:description" content="Explore TDigital's portfolio showcasing our expertise in UI design and application development. We offer exceptional consultation services to help you achieve your goals." />
        <meta name="twitter:image" content="https://tdigital.ng/profile.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased" >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSQPV9WX"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}

import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@stewbracken" />
                <meta name="twitter:creator" content="@stewbracken" />
                <meta property="og:title" content="Hyperion" />
                <meta property="og:description" content="Opening a portal to the next chapter of what NFTs are, Hyperion is generative art of a completely unique nature." />
                <meta property="og:image" content="https://www.hyperionnft.art/twitter-share.jpg" />

                <meta
                    name="description"
                    content="Hyperion NFT on Stargaze"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
                
                        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet" /> 

                
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
)
}

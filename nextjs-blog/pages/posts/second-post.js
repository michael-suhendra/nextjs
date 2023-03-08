import { useAmp } from 'next/amp'
import Head from 'next/head';

function About(props) {
    const isAmp = useAmp()

    return (
        <div>
            <Head>
                <script async custom-element="amp-gfycat" src="https://cdn.ampproject.org/v0/amp-gfycat-0.1.js"></script>
            </Head>
            <h3>My AMP About Page!</h3>
            {isAmp ? (
                <amp-img
                    width="300"
                    height="300"
                    src="../../public/images/hoffmann.png"
                    alt="Thomas Hoffmann grüsst dich"
                    layout="responsive"
                />
            ) : (
                <img width="300" height="300" src="/public/hoffmann.png" alt="Thomas Hoffmann grüsst dich" />
            )}
            <amp-gfycat
                data-gfyid="TautWhoppingCougar"
                width="640"
                height="360"
                layout="responsive"
            >
            </amp-gfycat>
        </div>
    )
}

export default About
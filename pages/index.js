import Head from 'next/head';
import Calculator from '../components/Calculator';

export default function Home() {
    return (
        <div>
            <Head>
                <title>계산기 웹앱</title>
                <meta name="description" content="넥스트.js 기반의 계산기 웹앱" />
            </Head>
            <main>
                <Calculator />
            </main>
        </div>
    );
}

import Head from 'next/head';
import Calculator from '../components/Calculator';

export default function Home() {
    return (
        <div>
            <Head>
                <title>똥강아지꺼 계산기</title>
                <meta name="naver-site-verification" content="a52ffc20b08c5cb435463d730cb3f299838f38dd" />
                <meta name="description" content="넥스트.js 기반의 계산기 웹앱" />
                <meta name="keywords" content="똥강아지 계산기, 똥강아지, 계산기" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={styles.main}>
                <Calculator />
            </main>
        </div>
    );
}

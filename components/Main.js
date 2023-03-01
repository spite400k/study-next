import Head from 'next/head'
import styles from './Main.module.css'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
    return (

        <main className={styles.main}>
            <Headline page={props.page}>
                {<code className={styles.code}>pages/{props.page}.js</code>}
            </Headline>
            <Links />
        </main>
    )
}

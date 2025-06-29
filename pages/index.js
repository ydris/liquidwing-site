import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('opportunity');

  const sections = {
    opportunity: (
      <div className={styles.section}>
        <h2>The Greatest Re-allocation of Human Time In History</h2>
        <p>
          There is over $15T in wasted time and energy for humans and the businesses they power...
          [rest of the copy from "A World of Opportunity"]
        </p>
        <p>
          › Intrigued? <a href="mailto:founders@liquidwing.ai">Write us at founders@liquidwing.ai</a>
        </p>
      </div>
    ),
    approach: (
      <div className={styles.section}>
        <h2>Dissolve Redesign Automate</h2>
        <p>
          We have all used “state of the art” AI tools and hate them... 
          [rest of "The LiquidWing Approach"]
        </p>
        <p>
          › Intrigued? <a href="mailto:founders@liquidwing.ai">Contact → founders@liquidwing.ai</a>
        </p>
      </div>
    ),
    beyond: (
      <div className={styles.section}>
        <h2>When Drudgery Disappears, Possibility Expands</h2>
        <p>
          Imagine a society where a 40-hour grind is optional...
          [rest of "Beyond Labour"]
        </p>
        <p>
          › Join the conversation → <a href="mailto:founders@liquidwing.ai">founders@liquidwing.ai</a>
        </p>
      </div>
    )
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LiquidWing AI</title>
        <meta name="description" content="LiquidWing AI - Rebuilding business for the age of intelligent agents." />
      </Head>

      <header className={styles.header}>
        <Image src="/logo.png" alt="LiquidWing Logo" width={180} height={60} className={styles.logo} />
        <h1 className={styles.title}>LiquidWing AI</h1>
        <p className={styles.subtitle}><strong>Today we are announcing LiquidWing AI, a startup focused on recreating business in the world of AI.</strong></p>
        <nav className={styles.nav}>
          <button onClick={() => setActiveTab('opportunity')}>A World of Opportunity</button>
          <button onClick={() => setActiveTab('approach')}>The LiquidWing Approach</button>
          <button onClick={() => setActiveTab('beyond')}>Beyond Labour</button>
        </nav>
      </header>

      <main className={styles.main}>{sections[activeTab]}</main>
    </div>
  );
}

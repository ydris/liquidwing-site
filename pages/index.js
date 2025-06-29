// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LiquidWing AI</title>
        <meta name="description" content="Radically reimagining business with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>LiquidWing AI</h1>
        <h2 className={styles.subtitle}>
          <strong>Today we are announcing LiquidWing AI, a startup focused on recreating business in the world of AI</strong>
        </h2>

        <nav className={styles.nav}>
          <a href="#opportunity">A World of Opportunity</a>
          <a href="#approach">The LiquidWing Approach</a>
          <a href="#beyond">Beyond Labour</a>
        </nav>

        <section id="opportunity" className={styles.section}>
          <h2>A World of Opportunity</h2>
          <p>The Greatest Re-allocation of Human Time In History</p>
          <p>There is over $15T in wasted time and energy for humans and the businesses they power. We are betting that the lions share of that can be freed up using the latest advances in Artificial Intelligence.</p>
          <p>These benefits won’t come from AI copilots helping their human counterparts (smart-Clippy, anyone?), not from bolting AI functions onto existing enterprise software, and certainly not from expensive “moonshot” projects aimed at replicating humans in silicon form...</p>
          <p>The market potential here is absurdly large... We put the total market opportunity here at $46T and the addressable market opportunity at $15T.</p>
          <p>The question isn’t “Will AI change everything?” it’s “Who will capitalize on the systems that make that change?”</p>
          <p><strong>‣ Intrigued?</strong> Write us at <a href="mailto:founders@liquidwing.ai">founders@liquidwing.ai</a></p>
        </section>

        <section id="approach" className={styles.section}>
          <h2>The LiquidWing Approach</h2>
          <p><strong>Dissolve Redesign Automate</strong></p>
          <p>We have all used “state of the art” AI tools and hate them... That isn’t what LiquidWing is doing! We meet you - our customer - where you are today with an approach to AI technology that reimagines your critical business processes from the ground up...</p>
          <p>We’re not building digital workers. We’re building fully fledged business processes using intelligent agents.</p>
          <p><strong>‣ Intrigued?</strong> Contact → <a href="mailto:founders@liquidwing.ai">founders@liquidwing.ai</a></p>
        </section>

        <section id="beyond" className={styles.section}>
          <h2>Beyond Labour</h2>
          <p>When Drudgery Disappears, Possibility Expands</p>
          <p>Imagine a society where a 40-hour grind is optional... Freedom is the point - but to make that happen society has to evolve.</p>
          <p>LiquidWing supports and advocates for universal basic income pilots, micro-grants for citizen science, and open-access education so reclaimed hours become human flourishing, not idle despair...</p>
          <p><strong>‣ Join the conversation</strong> → <a href="mailto:founders@liquidwing.ai">founders@liquidwing.ai</a></p>
        </section>
      </main>
    </div>
  );
}

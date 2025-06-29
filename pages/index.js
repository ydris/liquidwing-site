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
          There is over $15T in wasted time and energy for humans and the businesses they power. We are betting that the lion's share of that can be freed up using the latest advances in Artificial Intelligence.
        </p>
        <p>
          These benefits won’t come from AI copilots helping their human counterparts (smart-Clippy, anyone?), not from bolting AI functions onto existing enterprise software, and certainly not from expensive “moonshot” projects aimed at replicating humans in silicon form — today’s AI approaches all have serious shortcomings rendering most of the enormous value out of reach. The options available to business today lack vision, are unreliable and lack a robust relevance to day-to-day business.
        </p>
        <p>
          The market potential here is absurdly large: workers are paid around $60T annually and of that sum an estimated 61% is spent in administrative overhead and 9% is wasted by burned out and disengaged employees — in addition, shelfware, failed enterprise software implementations and employee workarounds cost a further $4T in aggregate. We put the total market opportunity here at $46T and the addressable market opportunity at $15T.
        </p>
        <p>
          The question isn’t “Will AI change everything?” it’s “Who will capitalize on the systems that make that change?”
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
          We have all used “state of the art” AI tools and hate them — like when you’re trying to speak with your bank and you’re forced to use its outmoded and limited chat engine… or the copilot your employer gives you to access to — just another tool to learn. That isn’t what LiquidWing is doing!
        </p>
        <p>
          We meet you — our customer — where you are today with an approach to AI technology that reimagines your critical business processes from the ground up using AI agents working independently from humans to drive your business forward.
        </p>
        <p>
          The vast amount of value from AI in business will not come from augmenting existing workers, or trying to bolt on AI functions but by deconstructing inefficient processes with self-guided agentified ones. From automating the ordinary tasks that make up everyday life in business not helping humans be faster at inefficient tasks.
        </p>
        <p>
          We’re not building digital workers. We’re building fully fledged business processes using intelligent agents.
        </p>
        <p>
          › Intrigued? Contact → <a href="mailto:founders@liquidwing.ai">founders@liquidwing.ai</a>
        </p>
      </div>
    ),
    beyond: (
      <div className={styles.section}>
        <h2>When Drudgery Disappears, Possibility Expands</h2>
        <p>
          Imagine a society where a 40-hour grind is optional. Some will paint, compose, or code open-source satellites. Some will care for elders. Yes—some will play Call of Duty all afternoon. Freedom is the point — but to make that happen society has to evolve.
        </p>
        <p>
          LiquidWing supports and advocates for universal basic income pilots, micro-grants for citizen science, and open-access education so reclaimed hours become human flourishing, not idle despair.
        </p>
        <p>
          We work with policymakers and academics to seed frameworks that value contribution, not clock-hours.
        </p>
        <p>
          A future without mandatory labour is only dystopian if we design it that way.
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <Image src="/logo-icon.png" alt="LiquidWing Logo" width={180} height={180} className={styles.logo} />
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

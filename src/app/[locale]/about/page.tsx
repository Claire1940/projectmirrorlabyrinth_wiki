import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.projectmirrorlabyrinth.wiki'
  const path = '/about'

  return {
    title: 'About Project Mirror Labyrinth Wiki - Your Ultimate Roblox Game Resource',
    description: 'Learn about Project Mirror Labyrinth Wiki, a community-driven resource hub providing codes, cards, outfits, Reflections, EGO guides, and dungeon routes for the Project Mirror Labyrinth Roblox roguelite deck builder.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Project Mirror Labyrinth Wiki',
      title: 'About Project Mirror Labyrinth Wiki',
      description: 'Learn about our mission to provide the best Project Mirror Labyrinth codes, builds, cards, and dungeon guides.',
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 768,
          height: 432,
          alt: 'Project Mirror Labyrinth Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Project Mirror Labyrinth Wiki',
      description: 'Learn about our mission to provide the best Project Mirror Labyrinth codes, builds, and dungeon guides.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Project Mirror Labyrinth Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for Project Mirror Labyrinth
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Project Mirror Labyrinth Wiki</h2>
            <p>
              Project Mirror Labyrinth Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping players
              master the Roblox game &quot;Project Mirror Labyrinth&quot; — a Project Moon-inspired roguelite deck builder that fuses the
              combat of <em>Library of Ruina</em> and <em>Limbus Company</em> with the run-based progression of <em>Slay the Spire</em>.
              We are a community-driven platform that provides comprehensive codes, card guides, outfit and Reflection info,
              EGO breakdowns, dungeon routes, and deck-building strategies to enhance your runs.
            </p>
            <p>
              Whether you&apos;re a new player redeeming your first codes and learning the basics of dungeon crawling, or a
              seasoned veteran optimizing your Reflection pulls and EGO Gifts for deep Luxcavation runs, Project Mirror
              Labyrinth Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to empower Project Mirror Labyrinth players with accurate, up-to-date information
              and powerful tools</strong> that help them succeed in the labyrinth. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our content updated with the latest game changes, new codes, balance patches, and Reflection/outfit additions</li>
              <li><strong>Build useful tools:</strong> Develop tier lists, deck-building guides, and dungeon route planners that help players make informed decisions</li>
              <li><strong>Foster community:</strong> Create a welcoming space where players can share builds, trade strategies, and grow together</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for players of all skill levels</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Project Mirror Labyrinth Wiki as the <strong>go-to destination</strong> for every Project Mirror Labyrinth player
              seeking to improve their runs. We want to be the resource that players trust and rely on, whether they need the
              latest working codes, want to compare Outfits and Cards, or are looking for advanced EGO and Luxcavation tactics.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎟️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Codes &amp; Rewards</h3>
              <p className="text-slate-300">
                Always-up-to-date list of working Project Mirror Labyrinth codes, the rewards each one grants, and
                step-by-step redemption instructions so you never miss free pulls and currency.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🃏</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cards &amp; Decks</h3>
              <p className="text-slate-300">
                Detailed breakdowns of every card type — attack, defense, and Block — plus recommended deck cores,
                synergies, and which cards to prioritize for stable clears.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">👔</div>
              <h3 className="text-xl font-semibold text-white mb-2">Outfits &amp; Defragment</h3>
              <p className="text-slate-300">
                Full Outfit roster with stats, rarity, sources, and Defragment upgrade priorities so you know exactly
                which outfits to invest in first.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🔮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Reflections</h3>
              <p className="text-slate-300">
                Pull rates, ticket types (SR / Mega Reflection Ticket), Fragment costs, and beginner-friendly advice on
                when to spend and when to save your pulls.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">💀</div>
              <h3 className="text-xl font-semibold text-white mb-2">EGO &amp; EGO Gifts</h3>
              <p className="text-slate-300">
                Clear explanations of what EGO is, how EGO Tickets and EGO Gifts work, and how to pick the right Gifts
                for the dungeon route you&apos;re running.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🗺️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Dungeon Routes</h3>
              <p className="text-slate-300">
                Route recommendations, enemy breakdowns, reward priorities, and Luxcavation guides to help you clear
                the labyrinth efficiently from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Project Mirror Labyrinth Wiki is built <strong>by the community, for the community</strong>. We welcome contributions,
              feedback, and suggestions from players of all skill levels. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Player feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community discoveries:</strong> New deck synergies, hidden EGO interactions, and pro tips shared by players</li>
              <li><strong>Game updates:</strong> We monitor official patches and adjust our tier lists and guides accordingly</li>
              <li><strong>Meta shifts:</strong> We track which Outfits, Cards, and Reflections rise and fall as the meta evolves</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you&apos;ve found a new code, discovered a strong deck combo, mapped out a
              new dungeon route, or have suggestions for new guides, we&apos;d love to hear from you! Reach out through our
              contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Project Mirror Labyrinth Wiki is maintained by a dedicated team of passionate gamers and developers who love
              Project Mirror Labyrinth as much as you do. We&apos;re players first, constantly testing decks, crawling dungeons,
              and staying updated with the latest patches and discoveries.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>Game analysis:</strong> Deep understanding of Project Mirror Labyrinth&apos;s combat, deck-building, and roguelite mechanics</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, helpful guides and tutorials</li>
              <li><strong>Community management:</strong> Listening to player feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Navigating the mirror labyrinth, one deck at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Project Mirror Labyrinth Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with the developers of Project Mirror Labyrinth, Roblox Corporation, Project Moon,
              or any official entities.
            </p>
            <p>
              All game content, trademarks, characters, and assets are the property of their respective owners.
              We use game-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Project Mirror Labyrinth Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We&apos;d love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@projectmirrorlabyrinth.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@projectmirrorlabyrinth.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@projectmirrorlabyrinth.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@projectmirrorlabyrinth.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@projectmirrorlabyrinth.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@projectmirrorlabyrinth.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@projectmirrorlabyrinth.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@projectmirrorlabyrinth.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest codes, builds, and Project Mirror Labyrinth news.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}

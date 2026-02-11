'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  const reels = [
    { title: 'RecapReels Project 1', src: '/reels/v1.mp4' },
    { title: 'RecapReels Project 2', src: '/reels/v1 copy.mp4' },
    { title: 'RecapReels Project 3', src: '/reels/v1 copy 2.mp4' },
    { title: 'RecapReels Project 4', src: '/reels/v1 copy 3.mp4' },
    { title: 'RecapReels Project 5', src: '/reels/v1 copy 4.mp4' },
  ];

  const handleCtaMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    event.currentTarget.style.setProperty('--x', `${x}%`);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-12 leading-tight tracking-tight">
              Grow Your Business with
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Short-Form Video Content</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-24 leading-relaxed max-w-3xl mx-auto">
              Professional reels, event highlights, promotional content, and brand storytelling 
              that drives engagement, generates leads, and accelerates business growth.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/contact"
                className="cta-pill cta-pill--violet"
                onMouseMove={handleCtaMove}
                onMouseEnter={handleCtaMove}
              >
                <span className="cta-pill__text">Book a Demo</span>
                <span className="cta-pill__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h12" strokeLinecap="round" />
                    <path d="M13 6l6 6-6 6" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="cta-pill cta-pill--dark"
                onMouseMove={handleCtaMove}
                onMouseEnter={handleCtaMove}
              >
                <span className="cta-pill__text">Get a Quote</span>
                <span className="cta-pill__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 8h12" strokeLinecap="round" />
                    <path d="M6 12h8" strokeLinecap="round" />
                    <path d="M6 16h6" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 tracking-tight">
              What We Offer
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive short-form video solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-br from-white to-neutral-50/60 shadow-[0_30px_80px_-50px_rgba(79,70,229,0.35)]">
              <div className="reel-marquee">
                <div className="reel-track">
                  {[...reels, ...reels].map((reel, index) => (
                    <div
                      key={`${reel.src}-${index}`}
                      className="reel-card"
                    >
                      <div className="reel-media">
                        <video
                          src={reel.src}
                          className="reel-img"
                          loading="lazy"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                        <div className="reel-overlay">
                          <div className="reel-badge">RecapReels</div>
                          <div className="reel-title">{reel.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-neutral-500 mt-6">
              Scroll showcasing recent reels. Replace placeholders with your videos anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-56 bg-gradient-to-br from-neutral-900 via-indigo-950 to-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
              Built for Business Growth
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              We understand what businesses need: results, not just content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                stat: '10x',
                label: 'Average Engagement Increase',
                description: 'Businesses see significant growth in engagement rates',
              },
              {
                stat: '48hrs',
                label: 'Fast Delivery',
                description: 'Quick turnaround without compromising quality',
              },
              {
                stat: '100%',
                label: 'Business-Focused',
                description: 'Every video designed to drive measurable results',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center px-4 py-14 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-7xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-16">
                  {item.stat}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-10">{item.label}</h3>
                <p className="text-neutral-400 leading-relaxed text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-24">
            <Button href="/why-recapreels" variant="primary" className="text-lg px-10 py-5 font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-56 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl md:text-2xl mb-24 text-white/90 leading-relaxed">
              Let's discuss how RecapReels can help your business grow through powerful short-form video content.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <Button href="/contact" variant="secondary" className="text-lg px-10 py-5 bg-white text-indigo-600 hover:bg-neutral-100 font-semibold">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

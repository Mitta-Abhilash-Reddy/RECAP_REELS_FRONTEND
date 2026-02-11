'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PricingCard = memo(({ planKey, config }: { planKey: string, config: any }) => {
  const [selectedDuration, setSelectedDuration] = useState(
    planKey === 'premium' ? '1week' : '2weeks'
  );

  const handleDurationChange = useCallback((duration: string) => {
    setSelectedDuration(duration);
  }, []);

  const currentContent = config.content[selectedDuration];
  const hasBadge = Boolean(config.badge);
  const hasTopLabel = Boolean(config.topLabel);
  const hasIcon = Boolean(config.icon);
  const hasCommon = Boolean(config.common);
  const hasComplimentary = Boolean(config.complimentary?.length);

  return (
    <div
      className="pricing-card relative bg-gradient-to-br from-violet-900 via-violet-800 to-violet-900 rounded-3xl p-8 lg:p-10 shadow-2xl border-2 border-yellow-400/50 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-yellow-400/20 hover:shadow-3xl flex flex-col h-full"
      style={{
        boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(250, 204, 21, 0.3), 0 0 20px rgba(250, 204, 21, 0.1)'
      }}
    >
      {/* Plan Header */}
      <div className="text-center mb-8">
        {/* Top Label */}
        <div className="mb-4 min-h-[20px] flex items-center justify-center">
          {hasTopLabel ? (
            <span className="text-violet-300 text-sm font-medium tracking-wide">
              {config.topLabel}
            </span>
          ) : (
            <span className="invisible text-sm">.</span>
          )}
        </div>
        
        {/* Icon (for Elite and Premium) */}
        <div className="text-5xl mb-4 min-h-[48px] flex items-center justify-center">
          {hasIcon ? (
            <span>{config.icon}</span>
          ) : (
            <span className="invisible">★</span>
          )}
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
          {config.title}
        </h2>
        <p className="text-xl text-violet-200 mb-4">
          {config.subtitle}
        </p>
        
        {/* Refined Trust Badge */}
        <div className="mb-8 min-h-[44px] flex items-center justify-center">
          {hasBadge ? (
            <div className="inline-flex items-center border border-yellow-400/40 rounded-full px-4 py-2">
              <span className="text-yellow-400 text-sm mr-2">⭐</span>
              <span className="text-yellow-400 font-medium text-sm">
                {config.badge}
              </span>
            </div>
          ) : (
            <span className="invisible text-sm">.</span>
          )}
        </div>
      </div>

      {/* Duration Tabs */}
      <div className="mb-10">
        <div className="flex bg-violet-800/50 backdrop-blur-sm rounded-2xl p-2 border border-violet-600/30">
          {config.tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => handleDurationChange(tab)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                selectedDuration === tab
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-violet-900 shadow-lg transform scale-105'
                  : 'text-violet-200 hover:text-white hover:bg-violet-700/50'
              }`}
            >
              {config.tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Price */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDuration}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
            {currentContent.price}
          </div>
          <div className="text-violet-300 text-lg">
            + GST
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Features */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDuration}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h4 className="text-yellow-400 font-semibold text-lg mb-4">
            What's Included:
          </h4>
          <ul className="space-y-3 mb-8">
            {currentContent.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start"
              >
                <svg
                  className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-base leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Common Section */}
      {hasCommon && (
        <div className="mb-6">
          <div className="bg-violet-800/30 rounded-2xl p-4 border border-violet-600/30">
            <p className="text-yellow-400 font-semibold text-center">
              {config.common}
            </p>
          </div>
        </div>
      )}

      {/* Complimentary Section */}
      {hasComplimentary && (
        <div className="border-t border-violet-600/30 pt-8 mb-10">
          <h4 className="text-yellow-400 font-semibold text-lg mb-4">
            Complimentary:
          </h4>
          <ul className="space-y-3">
            {config.complimentary.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-violet-200 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center mt-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-5 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-violet-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-yellow-400/30 hover:shadow-xl transition-all duration-300"
          style={{
            boxShadow: '0 10px 25px rgba(250, 204, 21, 0.3)'
          }}
        >
          {config.cta}
        </motion.button>
      </div>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

export default function Services() {
  const bookReelRef = useRef<HTMLDivElement>(null);
  const oneDayPlanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = [bookReelRef.current, oneDayPlanRef.current];

      targets.forEach((target) => {
        if (!target) return;

        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: false,
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: false,
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const planConfigs = {
    gold: {
      title: 'GOLD PLAN',
      subtitle: 'Best for consistent social media growth',
      badge: 'Most Chosen by Local Businesses',
      tabs: ['1week', '2weeks', '4weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks', '4weeks': '4 Weeks' },
      content: {
        '1week': {
          price: '₹7,999',
          features: [
            '4 Reels',
            '1 Poster + 1 Story Poster',
            'Full Page Handling',
            'Content Support'
          ]
        },
        '2weeks': {
          price: '₹15,999',
          features: [
            '8 Reels',
            '3 Posters + 2 Story Posters',
            'Full Page Handling',
            'Content Support'
          ]
        },
        '4weeks': {
          price: '₹29,999',
          features: [
            '15 Reels',
            '6 Posters + 4 Story Posters',
            'Full Page Handling',
            'Content Support',
            'Posting Assistance'
          ]
        }
      },
      common: 'Drone, Insta360 & AI Editing Included',
      complimentary: [
        'Complete Page Handling',
        '25 Edited Pictures',
        'No Extra Charges for Creator, Mic, or Light',
        '24/7 Service Support'
      ],
      cta: 'Book Gold Plan',
      icon: null,
      topLabel: 'Most Chosen'
    },
    elite: {
      title: 'ELITE PLAN',
      subtitle: 'For brands that want premium growth & speed',
      badge: null,
      tabs: ['1week', '2weeks', '4weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks', '4weeks': '4 Weeks' },
      content: {
        '1week': {
          price: '₹17,999',
          features: [
            '5 Premium Reels',
            'Creative Posters & Story Designs',
            'Priority Editing & Fast Delivery'
          ]
        },
        '2weeks': {
          price: '₹34,999',
          features: [
            '12 Premium Reels',
            'Advanced Poster & Story Designs',
            'Enhanced Editing',
            'Content Planning Support'
          ]
        },
        '4weeks': {
          price: '₹49,999',
          features: [
            '18 Premium Reels',
            'High-End Posters & Story Creatives',
            'Complete Page Handling',
            'Posting Strategy Support'
          ]
        }
      },
      common: 'Drone, Insta360 & AI Editing Included',
      complimentary: [
        'Complete Page Handling',
        '50 Edited Pictures',
        'No Extra Charges for Creator, Mic, or Light',
        'Priority Editing & Faster Delivery',
        '24/7 Service Support'
      ],
      cta: 'Book Elite Plan',
      icon: '⚡'
    },
    premium: {
      title: 'PREMIUM PLAN',
      subtitle: 'High-end, full-scale content & event dominance',
      badge: null,
      tabs: ['1week', '2weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks' },
      content: {
        '1week': {
          price: '₹29,000',
          features: [
            '15 Reels',
            'Complete Page Handling',
            'Daily Updates',
            '5 Drone Videos',
            '4 Live Streaming Videos',
            '6 Professionally Edited Videos',
            '4 Story Posters',
            '4 Creative Posters',
            'Delivery in Landscape & Portrait Formats'
          ]
        },
        '2weeks': {
          price: '₹59,000',
          features: [
            '30 Reels',
            'Complete Page Handling',
            'Daily Updates',
            '10 Drone Videos',
            '8 Live Streaming Videos',
            '12 Professionally Edited Videos',
            '8 Story Posters',
            '8 Creative Posters',
            'Delivery in Landscape & Portrait Formats'
          ]
        }
      },
      common: null,
      complimentary: [],
      cta: 'Book Premium Plan',
      icon: '💎'
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Premium Pricing Plans
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 leading-relaxed max-w-3xl mx-auto">
              Choose from our Gold, Elite, and Premium plans with flexible duration options. 
              Professional social media management tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Menu + One Day Plan */}
      <section className="py-20 bg-white text-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] text-violet-200 mb-4">
              Service Menu
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Service Menu
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl mt-4">
              Quick, transparent pricing for reels and event coverage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">
            {/* Book a Reel + Add-ons */}
            <div
              ref={bookReelRef}
              className="relative bg-gradient-to-br from-violet-950 via-indigo-900 to-violet-950 border border-violet-700/40 rounded-3xl p-8 lg:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] overflow-hidden text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.14),transparent_45%)]"></div>
              <div className="absolute -top-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent"></div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-semibold">Book a Reel</h3>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  { label: '1 Reel Shot on iPhone', price: '₹1,899' },
                  { label: 'iPhone + Insta360 X5 Reel', price: '₹2,099' },
                  { label: 'Drone + Insta360 X5 + iPhone Reel', price: '₹2,999' },
                  { label: 'Live Streaming – Per Event', price: '₹1,999' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start justify-between gap-4">
                    <span className="text-violet-100">• {item.label}</span>
                    <span className="text-yellow-300 font-semibold whitespace-nowrap bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 rounded-full text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-2xl font-semibold mb-5">Add ons</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Customize Edit Changes', price: '₹299' },
                    { label: 'Hand light', price: '₹399' },
                    { label: 'Collar Microphone', price: '₹399' },
                    { label: 'Photo Sessions', price: '₹499' },
                    { label: 'Extra Hour', price: '₹799' },
                    { label: 'Extra reel', price: '₹1,499' },
                    { label: 'Extra Creator', price: '₹1,699' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-4">
                      <span className="text-violet-100">• {item.label}</span>
                      <span className="text-yellow-300 font-semibold whitespace-nowrap bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 rounded-full text-sm">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* One Day Plan */}
            <div
              ref={oneDayPlanRef}
              className="relative bg-gradient-to-br from-violet-950 via-indigo-900 to-violet-950 border border-violet-700/40 rounded-3xl p-8 lg:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] overflow-hidden text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14),transparent_45%)]"></div>
              <div className="absolute -top-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent"></div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-semibold">One Day Plan</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-fuchsia-200/80">Event Focus</span>
              </div>

              <div className="space-y-10">
                {[
                  {
                    title: 'Basic Event Coverage',
                    price: '₹5,500',
                    bullets: [
                      'One AI-edited overall highlight video',
                      'Two professionally edited reels (total 3 reels)',
                      'One complete event coverage – up to 3 hours',
                      'Total 3 reels delivered',
                    ],
                  },
                  {
                    title: 'Half Day Event Coverage',
                    price: '₹9,500',
                    bullets: [
                      'One drone reel included',
                      'Two AI-edited reels or professionally edited reels (as per client choice)',
                      'One complete event coverage – up to 5 hours',
                      'Two customized edited reels',
                      'Total 5 reels delivered',
                    ],
                  },
                  {
                    title: 'Full Day Event Coverage',
                    price: '₹13,999',
                    bullets: [
                      '2 AI-edited videos & 1 complementary reel',
                      '3 Insta360 & drone videos',
                      '3 professionally edited videos',
                      'A total of 9 reels delivered',
                      'Up to 9 hours of event coverage',
                    ],
                  },
                ].map((plan) => (
                  <div key={plan.title} className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-2xl font-semibold">{plan.title}</h4>
                      <span className="text-yellow-300 font-semibold whitespace-nowrap bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 rounded-full text-sm">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="space-y-2 text-violet-100">
                      {plan.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pricing Cards Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
            <PricingCard planKey="gold" config={planConfigs.gold} />
            <PricingCard planKey="elite" config={planConfigs.elite} />
            <PricingCard planKey="premium" config={planConfigs.premium} />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-gradient-to-br from-violet-600 to-violet-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">
              Join hundreds of businesses who trust our premium plans for consistent social media growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-violet-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Premium Journey
              </button>
              <button className="bg-violet-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/30 hover:bg-violet-500/30 transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


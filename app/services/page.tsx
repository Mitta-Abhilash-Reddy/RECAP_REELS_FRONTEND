'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Services() {
  const services = [
    {
      title: 'Short-Form Video Creation for Brands',
      description: 'Professional short-form videos tailored to your brand identity and marketing objectives. From concept to delivery, we create content that resonates with your target audience and drives business results.',
      features: [
        'Custom creative concepts',
        'Brand-aligned storytelling',
        'Platform-specific optimization',
        'A/B testing variants',
      ],
    },
    {
      title: 'Event Recap Videos',
      description: 'Capture the essence of your events with professionally edited recap videos. Perfect for conferences, product launches, corporate gatherings, trade shows, and networking events.',
      features: [
        'Multi-camera coverage',
        'Highlight reels',
        'Speaker spotlights',
        'Social media cutdowns',
      ],
    },
    {
      title: 'Social Media Reels & Ads',
      description: 'Engaging reels and video ads designed for maximum impact on Instagram, TikTok, LinkedIn, YouTube Shorts, and Facebook. Content that stops the scroll and drives action.',
      features: [
        'Platform-native formats',
        'Trend-aware content',
        'Performance optimization',
        'Engagement-focused design',
      ],
    },
    {
      title: 'Content Strategy for Businesses',
      description: 'Strategic video content planning that aligns with your business goals. We help you develop a content calendar, identify opportunities, and create a cohesive video marketing strategy.',
      features: [
        'Content audits',
        'Strategy development',
        'Calendar planning',
        'Performance tracking',
      ],
    },
    {
      title: 'Editing & Post-Production',
      description: 'Expert video editing with professional color grading, motion graphics, sound design, and visual effects. We ensure every frame meets the highest standards of quality.',
      features: [
        'Color correction & grading',
        'Motion graphics & animation',
        'Sound design & music',
        'Visual effects',
      ],
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality. We understand that in business, timing matters. Get your content delivered when you need it most.',
      features: [
        'Rush delivery options',
        'Consistent quality',
        'Streamlined workflow',
        'Real-time collaboration',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-56 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-12 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              Comprehensive short-form video solutions designed to help your business 
              grow, engage audiences, and achieve measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-48">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
              >
                <div className="flex-1">
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl px-20 md:px-30 lg:p-0">
                    <div className="text-8xl text-white/20">📹</div>
                  </div>
                </div>
                <div className="flex-1 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-600 mb-16 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-700 text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-56 bg-gradient-to-br from-neutral-900 via-indigo-950 to-purple-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 mb-24 leading-relaxed">
              Let's discuss your video content needs and create a custom solution for your business.
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-10 py-5 font-semibold">
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


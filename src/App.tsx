import React from 'react';
import { Target, TrendingUp, Users, BarChart2, Globe, Shield, Zap, CheckCircle2, Megaphone, Building, Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import BenefitItem from './components/BenefitItem';
import FAQ from './components/FAQ';
import CaseStudy from './components/CaseStudy';
import MistakeCard from './components/MistakeCard';
import ProgrammaticBenefit from './components/ProgrammaticBenefit';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1536819114556-1c7906228ed2?auto=format&fit=crop&q=80" 
            alt="Hemp field background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-primary-blue">Hemp</span> & <span className="text-primary-green">Cannabis</span> Advertising
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Compliant programmatic advertising solutions for the cannabis industry in 2024. Reach verified 21+ audiences across premium networks.
            </p>
            <a 
              href="https://hempaware.com/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-darkgreen transition duration-300 shadow-lg inline-flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get Your FREE Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cannabis Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed specifically for the cannabis and hemp industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Target}
              title="Programmatic Advertising"
              description="Reach verified 21+ audiences across premium networks with compliant display and video ads."
            />
            <ServiceCard
              icon={Globe}
              title="SEO & Content Marketing"
              description="Dominate search results with expert cannabis SEO and engaging content strategies."
            />
            <ServiceCard
              icon={Users}
              title="Social Media Management"
              description="Build and engage your community while staying compliant with platform policies."
            />
            <ServiceCard
              icon={BarChart2}
              title="Analytics & Tracking"
              description="Make data-driven decisions with comprehensive performance tracking and reporting."
            />
            <ServiceCard
              icon={Shield}
              title="Compliance Management"
              description="Stay compliant with state-specific cannabis advertising regulations and guidelines."
            />
            <ServiceCard
              icon={Zap}
              title="Conversion Optimization"
              description="Maximize ROI with optimized landing pages and conversion funnels."
            />
          </div>
        </div>
      </section>

      {/* Programmatic Benefits Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Programmatic Cannabis Advertising</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage data-driven targeting and premium inventory for maximum ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgrammaticBenefit
              icon={Target}
              title="Precise Audience Targeting"
              description="Reach verified 21+ cannabis consumers across premium networks."
              metrics={["Age verification", "Behavioral targeting", "Geographic targeting"]}
            />
            <ProgrammaticBenefit
              icon={Shield}
              title="Brand Safety"
              description="Ensure your ads appear only on approved, brand-safe websites."
              metrics={["Pre-approved inventory", "Content verification", "Compliance monitoring"]}
            />
            <ProgrammaticBenefit
              icon={BarChart2}
              title="Performance Tracking"
              description="Monitor and optimize your campaigns in real-time."
              metrics={["Real-time analytics", "Conversion tracking", "ROI reporting"]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HempAware for your Hemp and Cannabis Advertising Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with experts who understand the unique challenges of cannabis marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <BenefitItem text="Compliant advertising strategies that protect your brand" />
              <BenefitItem text="Access to premium, brand-safe advertising networks" />
              <BenefitItem text="Advanced audience targeting and verification" />
              <BenefitItem text="Comprehensive performance tracking and analytics" />
              <BenefitItem text="Expert campaign optimization and management" />
            </div>
            <div className="space-y-6">
              <BenefitItem text="Industry-specific landing page optimization" />
              <BenefitItem text="Regular compliance audits and updates" />
              <BenefitItem text="Dedicated account management team" />
              <BenefitItem text="Transparent reporting and communication" />
              <BenefitItem text="Proven ROI-focused strategies" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Misconceptions Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Cannabis Advertising Misconceptions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's clear up some common myths about cannabis and hemp advertising.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MistakeCard
              title="You Can't Advertise Cannabis Online"
              description="Many believe cannabis advertising is completely prohibited online."
              solution="While there are restrictions, compliant programmatic advertising allows you to reach verified audiences across premium networks."
            />
            <MistakeCard
              title="Social Media is Off-Limits"
              description="Some think social media marketing isn't possible for cannabis brands."
              solution="Strategic content and community management can build strong social presence while maintaining compliance."
            />
            <MistakeCard
              title="Only Local Advertising Works"
              description="There's a misconception that cannabis advertising must be limited to local markets."
              solution="Programmatic advertising enables compliant national campaigns with proper geographic targeting."
            />
            <MistakeCard
              title="Compliance Prevents Effective Marketing"
              description="Many believe compliance requirements make effective marketing impossible."
              solution="Our strategies work within compliance guidelines while delivering strong ROI and brand growth."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="success-stories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cannabis and Hemp Advertising Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our cannabis and hemp industry clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudy
              title="CBD Wellness Brand Growth"
              challenge="Limited digital advertising options due to strict platform policies."
              solution="Implemented compliant programmatic advertising strategy across premium networks."
              results={[
                "300% increase in qualified traffic",
                "45% reduction in acquisition costs",
                "2.5x ROAS improvement"
              ]}
              industry="CBD & Wellness"
              image="https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80"
            />
            <CaseStudy
              title="Hemp Product Launch"
              challenge="New brand entering a competitive market with no existing audience."
              solution="Developed targeted campaign across multiple compliant channels."
              results={[
                "50,000+ qualified visitors in first month",
                "28% conversion rate on landing pages",
                "4.2x return on ad spend"
              ]}
              industry="Hemp Products"
              image="https://images.unsplash.com/photo-1580913428023-02c695666d61?auto=format&fit=crop&q=80"
            />
            <CaseStudy
              title="Cannabis Dispensary Chain"
              challenge="Needed to increase foot traffic across multiple locations while maintaining compliance."
              solution="Implemented local-focused programmatic campaigns with geo-targeting."
              results={[
                "185% increase in store visits",
                "32% growth in new customer acquisition",
                "3.8x ROI on advertising spend"
              ]}
              industry="Cannabis Retail"
              image="https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about cannabis and hemp advertising.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Cannabis Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule your free strategy session and discover how we can help you reach more customers while staying compliant.
          </p>
          <a
            href="https://hempaware.com/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-green px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg inline-flex items-center"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Get Your FREE Strategy Session
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
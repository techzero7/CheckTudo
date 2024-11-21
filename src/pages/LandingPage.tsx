import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  BarChart, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { HeroSection } from '../components/landing/HeroSection';
import { FeatureSection } from '../components/landing/FeatureSection';
import { TestimonialSection } from '../components/landing/TestimonialSection';
import { PricingSection } from '../components/landing/PricingSection';
import { DemoSection } from '../components/landing/DemoSection';
import { CTASection } from '../components/landing/CTASection';
import { Footer } from '../components/landing/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
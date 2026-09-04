import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { HeroSection } from '../components/home/HeroSection';
import { QuickOverview } from '../components/home/QuickOverview';
import { CareerPreview } from '../components/home/CareerPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TeaserCards } from '../components/home/TeaserCards';

export const HomePage: React.FC = () => {
  useDocumentTitle(
    'YagnaSri Reddy Mukku | AI Engineer & Python Full-Stack Developer',
    'Portfolio of YagnaSri Reddy Mukku, an AI Engineer and Python Full-Stack Developer with experience in Artificial Intelligence, AI production, software development, Shopify, web development, and digital products.'
  );

  return (
    <div className="space-y-4">
      <HeroSection />
      <QuickOverview />
      <CareerPreview />
      <FeaturedProjects />
      <TeaserCards />
    </div>
  );
};

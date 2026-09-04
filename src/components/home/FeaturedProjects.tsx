import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProjectCard } from '../projects/ProjectCard';
import { PROJECTS } from '../../data/projects';
import { staggerContainer } from '../../utils/animations';

export const FeaturedProjects: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-12 md:py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <Badge variant="brand" className="mb-2.5">Selected Portfolio</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]">
              Featured Work & Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-xl leading-relaxed">
              Highlights of AI-powered platforms, creative generative storytelling, and enterprise commerce platforms.
            </p>
          </div>

          <Button
            to="/projects"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

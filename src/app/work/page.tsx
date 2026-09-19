import React from 'react';
import type { Metadata } from 'next';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import Timeline from '../../components/Timeline/Timeline';
import experiences from '../../components/Timeline/experiences';
import ProjectList from '../../components/ProjectList/ProjectList';
import projects from '../../components/ProjectCard/projects';
import SkillList from '../../components/SkillList/SkillList';
import skills from '../../components/SkillList/skills';

export const metadata: Metadata = {
  title: 'Work',
};

const Work = () => {
  return (
    <>
      <Title
        title="work"
        subtitle="A showcase of my notable experiences, software projects, and technical skills."
      />
      <Section title="experiences">
        <Timeline items={experiences} />
      </Section>
      <Section title="projects">
        <ProjectList items={projects} />
      </Section>
      <Section title="skills">
        <SkillList sections={skills} />
      </Section>
    </>
  );
};

export default Work;

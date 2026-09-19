import React from 'react';
import type { Metadata } from 'next';
import FullScreenTitle from '../components/FullScreenTitle/FullScreenTitle';
import Section from '../components/Section/Section';
import AboutMeList from '../components/AboutMeList/AboutMeList';
import aboutMeItems from '../components/AboutMeList/aboutMeItems';

export const metadata: Metadata = {
  title: { absolute: 'Melvin Rajendran | A Software Engineer | About' },
};

const About = () => {
  return (
    <>
      <FullScreenTitle
        title="hey, i'm melvin."
        subtitle="A software engineer."
        imageSrc="/images/profile/melvin-portrait.jpg"
        imageAlt="Portrait of Melvin Rajendran"
      />
      <Section title="about me">
        <AboutMeList items={aboutMeItems} />
      </Section>
    </>
  );
};

export default About;

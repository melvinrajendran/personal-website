import React, { useEffect } from 'react';
import FullScreenTitle from '../../components/FullScreenTitle/FullScreenTitle';
import Section from '../../components/Section/Section';
import AboutMeList from '../../components/AboutMeList/AboutMeList';
import aboutMeItems from '../../components/AboutMeList/aboutMeItems';

const About = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | A Software Engineer | About';
  });

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

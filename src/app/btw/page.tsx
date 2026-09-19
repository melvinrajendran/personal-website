import React from 'react';
import type { Metadata } from 'next';
import Title from '../../components/Title/Title';
import Section from '../../components/Section/Section';
import AlbumList from '../../components/AlbumList/AlbumList';
import albums from '../../components/AlbumCard/albums';
import Blog from '../../components/Blog/Blog';

export const metadata: Metadata = {
  title: 'BTW',
};

const BTW = () => {
  return (
    <>
      <Title
        title="by the way"
        subtitle="Life updates, random ideas, and other cool things that I'm up to."
      />
      <Section title="blog" hideTitle>
        <Blog />
      </Section>
      <Section title="on repeat">
        <AlbumList items={albums} />
      </Section>
    </>
  );
};

export default BTW;

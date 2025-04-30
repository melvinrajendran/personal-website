/* eslint-disable react/jsx-key */
import React from 'react';
import { includes } from 'lodash';

type CalendarMonth = {
  month: string;
  year: number;
};

const blogPosts = [
  // {
  //   iconClass: 'fas fa-robot',
  //   title: 'job security in the age of ai',
  //   month: 'April',
  //   day: 30,
  //   year: 2025,
  //   body: [
  //     <p>
  //       As I&apos;m sure you&apos;ve already noticed, AI can do a lot in 2025: [insert list here],
  //       among other things. In years to come, this list will likely get bigger and bigger. With this
  //       comes an interesting question for many professionals to think about: In the future of my
  //       industry, where will humans add value?
  //     </p>,
  //     <p>Answer TBD whenever I finish this post.</p>,
  //   ],
  // },
  {
    iconClass: 'fas fa-microphone',
    title: 'a blog post about another blog',
    month: 'May',
    day: 19,
    year: 2024,
    body: [
      <p>
        I (also) started an Instagram blog! Not sure exactly what kinds of posts I&apos;ll want to
        make in the future — maybe men&apos;s fashion, fitness, lifestyle, and/or tech-related stuff
        — but for now, I&apos;m reviewing some of my favorite new album releases. If you&apos;re
        interested, feel free to follow{' '}
        <a
          href="https://www.instagram.com/mellytalksabout/"
          className="link-off-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mellytalksabout
        </a>
        .
      </p>,
    ],
  },
  {
    iconClass: 'fas fa-key',
    title: 'and throw away the key',
    month: 'April',
    day: 24,
    year: 2024,
    body: [
      <p>
        A little over a month ago, I came across an ad for{' '}
        <a
          href="https://getbrick.app/"
          className="link-off-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brick
        </a>
        , a productivity app for iPhone that pairs with a physical device to prevent distractions.
        Being a productivity junkie myself, and having been underwhelmed by Apple&apos;s native App
        Limits feature for some time, it was an obvious pickup.
      </p>,
      <p>
        The device itself is a 3D-printed &quot;brick&quot; with an NFC tag inside. After selecting
        apps to allow, you tap your phone against the Brick to enter &quot;bricked&quot; mode. This
        blocks all other apps, even preventing the bypasses that are built into the App Limits
        feature (i.e. &quot;Ignore Limit For Today&quot;). To &quot;unbrick&quot; your phone, simply
        tap your phone against the Brick again and all apps become useable. The idea is that the
        Brick is the &quot;key&quot; to your distracting apps that you leave in one location as you
        go about your day.
      </p>,
      <p>
        Even just a few weeks into using my Brick, my screen time has been cut in half and I feel
        noticeably less distracted during the day. I tap my Brick every morning on my way out of my
        apartment, and *boom*, Instagram, TikTok, and YouTube are no longer at my fingertips until I
        get home. Despite Brick&apos;s lack of convenient features like integrating with Focus and
        providing detailed analytics, I&apos;m sure that the team is already hard at work on these
        features and more.
      </p>,
      <p>
        Altogether, using my Brick reminds me of something my high-school chemistry teacher used to
        say: &quot;Whatever job you do, do it with your phone off ◡̈&quot;.
      </p>,
      <img
        className="rounded-corners shadow my-4 img-fluid mx-auto d-block"
        src="images/blog/brick.jpeg"
        alt="Brick"
      />,
    ],
  },
  {
    iconClass: 'fas fa-rocket',
    title: 'be ambitious',
    month: 'April',
    day: 10,
    year: 2023,
    body: [
      <p>
        I received this advice from my manager on my very first day working as an intern:{' '}
        <em>&quot;Be ambitious&quot;</em>. Over time, it has really resonated with me, applying far
        beyond just the office. This advice has motivated me to set bold goals for myself, be the
        hardest-working person I know, and pursue opportunities even if they seem out of reach.
      </p>,
      <p>To whoever needs this, I know you can do the same.</p>,
    ],
  },
  {
    iconClass: 'fas fa-tablet-alt',
    title: 'on being an ipad kid',
    month: 'January',
    day: 16,
    year: 2023,
    body: [
      <p>Here’s my six-month review of the 2021 iPad Pro that nobody asked for:</p>,
      <p>I love it.</p>,
      <p>
        There’s a certain feeling that comes with handwriting notes, and it helps me better retain
        information. At the same time, typed notes are often more organized and of higher quality,
        leveraging the suite of tools within apps like Google Docs or Microsoft Word. The iPad
        succeeds at providing both key features: handwritten note-taking and the digital tools to
        elevate it.
      </p>,
      <p>
        Using the iPad Pro has truly changed my life as a student. I walk to class with nothing but
        my laptop and iPad in my backpack, making cross-campus trips easier. My notes are better
        than ever, complete with images, annotated lecture slides, screenshots of textbook pages,
        and an assortment of colors, pens, and highlights. I can also use my iPad as a second screen
        when using my laptop, playing videos or displaying notes to improve my productivity.
      </p>,
      <p>
        As long as I take care of it, I can see myself using my iPad far beyond college and into my
        professional life.
      </p>,
      <p>What tech has transformed your day-to-day?</p>,
    ],
  },
  {
    iconClass: 'fa fa-keyboard',
    title: 'codersthetic',
    month: 'May',
    day: 28,
    year: 2022,
    body: [
      <p>
        Just wanted to romanticize my workspace for this upcoming summer. I think it&apos;s pretty
        cool.
      </p>,
      <img
        className="rounded-corners shadow mt-4 img-fluid mx-auto d-block"
        width="450"
        height="600"
        src="images/blog/workspace.jpg"
        alt="Melvin's workspace"
      />,
    ],
  },
  {
    iconClass: 'fas fa-compact-disc',
    title: 'humble beginnings of a record collection',
    month: 'July',
    day: 4,
    year: 2021,
    body: [
      <p>
        After years of putting it off, I finally got around to buying my first vinyl record and
        starting a collection.
      </p>,
      <p>
        A couple of friends and I spent the day walking around Princeton, and as we were about to
        drive home, we realized that we had parked next to a local record exchange. Curious, we
        stepped inside the quaint, retro-inspired store and immediately noticed the aisles of crates
        packed with vinyl from all different eras and genres of music. I probably flipped through
        over a hundred records before landing on one of my favorite hip-hop releases:{' '}
        <a
          href="https://open.spotify.com/album/42fyKPanos0Q3woi848ktg?si=l70SrdDYTV-7hOoYjQkn4Q&dl_branch=1"
          className="link-off-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Imperial</em>
        </a>{' '}
        by Denzel Curry. Of course I bought it.
      </p>,
      <p>
        Now, as I format the &lt;p&gt; tags for what I hope will be a long-term blog, this album is
        playing in the background. While I’m still in search of the perfect turntable and speakers
        to hear the “crisp, warm” quality that audiophiles preach comes with vinyl, Spotify will cut
        it for now.
      </p>,
      <p>
        There&apos;s something so special about vinyl records (and physical media in general).
        They&apos;re nostalgic and cozy. There&apos;s no Instagram notifications interrupting the
        listening experience. And it&apos;s fun to own the music you listen to and connect with your
        favorite artists in a unique way. I&apos;m really excited to grow my collection, and I
        can&apos;t wait to always have a record playing at home.
      </p>,
    ],
  },
];
const activeMonths: Array<CalendarMonth> = [];

export default blogPosts;

blogPosts.forEach((post) => {
  const currentMonth = {
    month: post.month,
    year: post.year,
  };

  if (!includes(activeMonths, currentMonth)) {
    activeMonths.push(currentMonth);
  }
});

export { activeMonths };

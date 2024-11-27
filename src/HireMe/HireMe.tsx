import React, { useState } from 'react';
import './HireMe.scss';

const linksArray = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skullyflower',
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/skullyflower',
    extra: 'Personal account that houses my experiments',
  },
  { name: 'Resumé', href: '/DragonMessmerwebResume.pdf' },
  {
    name: 'EPMX',
    href: 'https://epmexperience.com',
    extra: 'Professional Project: Mortage Portal',
  },
  {
    name: 'RARRecover',
    href: 'https://rarr-recovery.skullyflower.com',
    extra: 'Fun, useful 12 step site.',
  },
  {
    name: 'Skully Flower',
    href: 'https://www.skullyflower.com',
    extra: 'Personal Art Site where I experiment.',
  },
  // {
  //   name: 'Hello Calculator',
  //   href: '/calc',
  //   extra: 'Hosted example of code exercise in typescript, unfinished.',
  // },
];

type SlideLinkType = { name: string; href: string; extra: string | null };
const SlideLink = ({ name, href, extra }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <a href={href} target={name} rel='noopener'>
        {name}
      </a>
      {extra && <p>{extra}</p>}
    </div>
  );
};

export const HireMe = () => {
  const [textExpanded, setTextExpaned] = useState(false);

  return (
    <main id='pagebody'>
      <section>
        <div className='content'>
          <h1>Dragon Messmer</h1>
          <div className={textExpanded ? 'description expanded' : 'description'}>
            <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>
              Purpose driven, Frontend focused, Sr. Software Engineer, with 10+ years of remote work
              experience.
            </h3>
            <p>
              I&apos;m passionate about bringing excellent designs to life with real data. I work
              well within cross functional teams, boldly and tenaciously meeting the challenges of
              good UX design, difficult to realize requirements, or complex data manipulations. I
              have experience creating fully responsive sites from scratch with pure css, but am
              also comfortable working with UI frameworks, like Chakra or Bootstrap. I have a record
              of delighting impossible to please clients, and other stakeholders.
            </p>

            {textExpanded && (
              <>
                <p>
                  &ldquo;Dragon is a fantastic front-end developer who is an asset to every team she
                  joins. She brings both deep technical knowledge and a willingness to jump in and
                  help with anything. In fact, that customer focus/product mindset is one of her
                  biggest strengths. She was often requested by name by our professional services
                  customers because of her attention to detail and focus on helping the customer
                  achieve their vision.&rdquo; -{' '}
                  <i>
                    <a
                      href='https://www.linkedin.com/in/aaron-witt-1455783/'
                      target='aaron'
                      rel='noopener'
                    >
                      Aaron Witt, Enterprise Cloud Architect | Engineering Leader | DevOps Devotee
                    </a>
                  </i>
                </p>

                <p>
                  In recent years, my career has brought me into the mortgage industry,
                  creating/expanding/maintaining mortgage portal, SaaS apps. Although the challenges
                  these sites pose are juicy, my creative side is dying, and I am looking to make a
                  change back to more visually interesting and client centered challenges.
                </p>
                <p>
                  I myself am no designer - I&apos;m more of a weird artist. However, I work well
                  with excellent designers. I am able to not only replicate a static design, but
                  also turn it into a dynamic, living piece of code, that responds to the screen on
                  which it is displayed, and to variations in the data, that it will contain.
                </p>
              </>
            )}
          </div>
          <p
            style={{ fontSize: '1em', textAlign: 'right', cursor: 'pointer' }}
            onClick={() => setTextExpaned(!textExpanded)}
          >
            {textExpanded ? 'Show less' : '... Show more'}
          </p>
          <div className='links'>
            {linksArray.map((link) => (
              <SlideLink
                key={link.name}
                name={link.name}
                href={link.href}
                extra={link.extra ?? null}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

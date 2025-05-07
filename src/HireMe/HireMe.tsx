import { useState } from 'react';
import './HireMe.scss';

export const linksArray = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skullyflower',
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/skullyflower',
    extra: [
      'Personal account that houses my experiments',
      'See code for this site, RARR Recovery, and other experiments.',
    ],
  },
  { name: 'Resumé', href: '/DragonMessmerwebResume.pdf' },
  {
    name: 'EPMX',
    href: 'https://epmexperience.com',
    extra: [
      `Professional Project: Mortage Portal`,
      '( React, Typescript,  Redux, Node, Express, MongoDB) Highly configurable, mortgage broker facing, portal to encompass.',
      `I've been priviaged to develop this well designed tool since 12/2024. It is a great example of my work. I'd be proud to show you.`,
    ],
  },
  {
    name: 'RARR Recover',
    href: 'https://rarr-recovery.skullyflower.com',
    extra: [
      'Fun, useful 12 step recovery site.',
      '(React, Typescript, Chakra) Site, still in development, for Ragers and Rampagers Recovering, a ficticious 12 step program, with real 10th step, spot check, inventory forms. Results can be copied and sent to an accountability buddy.',
      'The monster recovery theme came from a comic I self published.',
    ],
  },
  {
    name: 'SkullyFlower',
    href: 'https://www.skullyflower.com',
    extra: [
      'My personal art site.',
      'For almost 20 years, this has housed my personal brand. I have a lot of fun with it.',
      'I coded my own database-less cart and gallery system, and a separate admin app, using node, to maintain the JSON files the site uses for data.',
      'And it is haunted every Fall with various ghosts!',
      'Every time I learn a new language, trick or framework, I rebuilt the site to use it. Currently, I am slowly reworking it to use TypeScript and zustand. Because it’s so old there is a lot to clean up.',
    ],
  },
  // {
  //   name: 'Hello Calculator',
  //   href: '/calc',
  //   extra: 'Hosted example of code exercise in typescript, unfinished.',
  // },
];

type SlideLinkType = { name: string; href: string; extra: string[] | null };
const SlideLink = ({ name, href, extra }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <div>
        <a href={href} target={name} rel='noopener'>
          {name}
        </a>
        {extra?.map((p, i) => <p key={i}>{p}</p>)}
      </div>
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
          <div className='wraptop'>
            <div className={textExpanded ? 'description expanded' : 'description'}>
              <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>
                Purpose driven, Frontend focused, Sr. Software Engineer, with 10+ years of remote
                work experience.
              </h3>
              <p>
                I&apos;m passionate about bringing excellent designs to life with real data. I work
                well within cross functional teams, boldly and tenaciously meeting the challenges of
                good UX design, difficult to realize requirements, or complex data manipulations. I
                have experience creating fully responsive sites from scratch with pure css, but am
                also comfortable working with UI frameworks, like Chakra or Bootstrap. I have a
                record of delighting impossible to please clients, and other stakeholders.
              </p>

              {textExpanded && (
                <>
                  <blockquote>
                    <p>
                      &ldquo;Dragon is a fantastic front-end developer who is an asset to every team
                      she joins. She brings both deep technical knowledge and a willingness to jump
                      in and help with anything. In fact, that customer focus/product mindset is one
                      of her biggest strengths. She was often requested by name by our professional
                      services customers because of her attention to detail and focus on helping the
                      customer achieve their vision.&rdquo; -{' '}
                      <i>
                        <a
                          href='https://www.linkedin.com/in/aaron-witt-1455783/'
                          target='aaron'
                          rel='noopener'
                        >
                          Aaron Witt, Enterprise Cloud Architect | Engineering Leader | DevOps
                          Devotee
                        </a>
                      </i>
                    </p>
                  </blockquote>
                  <p>
                    I am full-stack capable and adept at quickly learning new languages and
                    frameworks, and have never held a purely front-end position. My experience spans
                    from PHP to C# to Node.js, and from HTML and jQuery to modern libraries like
                    React. I have worked with various databases, version control systems, and
                    hosting environments, collaborating effectively within diverse teams. I am
                    well-versed in agile methodologies and have comprehensive experience with the
                    entire software development life cycle—ranging from requirements gathering and
                    architecture design to deployment and ongoing maintenance.
                  </p>
                  <p>
                    While I wouldn&apos;t call myself a designer ( I consider myself more of a
                    quirky artist ) I do work well with designers, not simply replicating static
                    designs but transforming them into dynamic, responsive pieces of code that adapt
                    seamlessly to different screens and varying data. I have experience with tools
                    like Figma and Zeplin and am highly comfortable with the process of bringing a
                    design from concept to fully functional code.
                  </p>
                  <p>
                    In recent years, my career has led me into the mortgage industry, where I have
                    been involved in creating, expanding, and maintaining mortgage portal, SaaS
                    applications. While the challenges presented by these projects are
                    intellectually engaging, I find myself missing the more visually dynamic and
                    client-centered challenges that characterized my earlier career.
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
          </div>

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

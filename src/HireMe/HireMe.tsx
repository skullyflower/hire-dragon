import React, { useState } from 'react';
import './HireMe.scss';

const linksArray = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skullyflower',
  },
  { name: 'GitHub', href: 'https://www.github.com/skullyflower' },
  { name: 'Resumé', href: '/DragonMessmerResume.pdf' },
  { name: 'Hello Calculator', href: '/calc' },
  { name: 'Skullyflower', href: 'https://www.skullyflower.com' },
];

type SlideLinkType = { name: string; href: string };
const SlideLink = ({ name, href }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <a href={href} target={name}>
        {name}
      </a>
    </div>
  );
};

export const HireMe = () => {
  const [textExpanded, setTextExpaned] = useState(false);

  return (
    <main id='pagebody'>
      <section>
        <div className='content'>
          <h1>About me, Dragon Messmer.</h1>
          <div className={textExpanded ? 'description expanded' : 'description'}>
            <p>
              For over a decade, I&apos;ve been working remotely as a front-end software engineer.
              My specialty is ReactJS. I enjoy writing original code, and creating solutions to
              those problems that haven&apos;t been solved yet.
            </p>
            {textExpanded && (
              <>
                <p>
                  The front-end is my jam, but I am full-stack capable, and can update an API or SQL
                  table. I&apos;ve always got the purpose, connected systems, and the end users of
                  what I&apos;m working on in mind. It makes me better at communicating technical
                  subjects to non-engineers.
                </p>
                <p>
                  I&apos;m a natural. A few friends and I all got into web creation at the same
                  time, but I am the only one still writing code, and I still love to do it. From
                  the very start of my career, I&apos;ve been learning new languages and techniques,
                  and been quickly applying them. My first job started building static HTML pages
                  out of images in tables, but I quickly figured out how to create reusable, data
                  driven, PHP templates and alleviate the repetitious work of creating the same
                  document over and over. Although today I do my development work primarily using
                  NodeJs and the cloud, my personal computer always has an apache web server running
                  on it as a staging environment.
                </p>
                <p>
                  Since then I&apos;ve built sites and apps, with various iterations of php and
                  .net, Javascript, created custom frameworks and systems, refactored and reskinned
                  others, and used many more. Through the years I&apos;ve built up my CSS,
                  Javascript, REST, and Object Oriented coding patterns knowledge and skill. But the
                  landscape is always changing, and there is always something new to learn and
                  I&apos;m still open and able to learn. Every time I learn something particularly
                  interesting or useful my site, skullyflower.com, gets refactored to use it.
                </p>
                <p>
                  In the last 6 or so years, I&apos;ve really fallen in love with React. It&apos;s a
                  joy to work in, and makes it easy to separate concerns, reuse and organize code.
                </p>
                <p>
                  Early in my career, I worked primarily alone, but lately have benefitted from
                  working in teams of 5-10 devs, writing and receiving code reviews and otherwise
                  collaborating.
                </p>
                <p>When I can, I draw monsters and comics. I also occasionally paint.</p>
              </>
            )}
            <p
              style={{ fontSize: '1em', textAlign: 'right', cursor: 'pointer' }}
              onClick={() => setTextExpaned(!textExpanded)}
            >
              {textExpanded ? '... Show less' : 'Show more ...'}
            </p>
          </div>
          <div className='links'>
            {linksArray.map((link) => (
              <SlideLink key={link.name} name={link.name} href={link.href} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

import React, { useState } from 'react';
import './HireMe.scss';

const linksArray = [
  {
    name: 'LinkedIn',
    href: "'https://www.linkedin.com/in/skullyflower'",
  },
  { name: 'GitHub', href: 'https://www.github.com/skullyflower' },
  { name: 'Resumé', href: '/DragonMessmerResume.pdf' },
  { name: 'Instagram', href: 'https://www.instagram.com/dragonmessmer' },
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
              I&apos;m a front-end software engineer specializing in ReactJS, who enjoys writing
              original code, creating solutions to those problems that haven&apos;t been solved yet.
            </p>
            {textExpanded && (
              <>
                <p>
                  I&apos;ve been working remotely for over a decade. I specialize in front-end, but
                  am fullstack capable.
                </p>
                <p>
                  From the very start of my career, I&apos;ve been learning new languages and
                  techniques. My first job started building static pages with images in tables, with
                  some mouseover effects, but quickly became creating reusable, data driven, PHP
                  templates.
                </p>
                <p>
                  Since then I&apos;ve built sites and apps with various iterations of php and .net,
                  Javascript, created custom frameworks and systems, refactored and reskinned, and
                  used many more. Through the years I&apos;ve built up my CSS, Javascript, REST, and
                  Object Oriented coding pattern knowledge and skill. But the lanscape is always
                  changing, and there is always something new to learn. Every time I learn something
                  particularly interesting or useful, my site skullyflower.com gets refactored to
                  use it. My personal computer always has an apache web server running on it as a
                  staging environment.
                </p>
                <p>
                  In the last 6 or so years I&apos;ve really fallen in love with REACT. It&apos;s a
                  joy to work in and is, by design, easy to keep concerns separate.
                </p>
                <p>
                  I&apos;m a practical engineer. I&apos;ve always got the purpose, connected
                  systems, and the end users of the code in mind. It&apos;s why I&apos;m better at
                  talking to non engineers about technical subjects than some.
                </p>
              </>
            )}
            <p
              style={{ textAlign: 'right', cursor: 'pointer' }}
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

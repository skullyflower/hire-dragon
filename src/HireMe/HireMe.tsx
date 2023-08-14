import React, { useState } from 'react';
import './HireMe.scss';

const linksArray = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skullyflower',
  },
  { name: 'GitHub', href: 'https://www.github.com/skullyflower' },
  { name: 'Resumé', href: '/DragonMessmerwebResume.pdf' },
  { name: 'Hello Calculator', href: '/calc' },
  { name: 'Skully Flower', href: 'https://www.skullyflower.com' },
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
            <h3 style={{ textAlign: 'center' }}>An adaptable and well rounded software engineer</h3>
            <p>
              I have finally abandoned the impostor syndrome. I can learn anything and can apply
              what I learn in a professional setting, rather quickly.
            </p>
            <p>
              I&apos;ve been learning and applying new languages and methodologies since my first
              tech gig. I barely knew HTML before I had to start scripting in PHP. The next job
              required Javascript which is a very different language from PHP.
            </p>
            {textExpanded && (
              <>
                <p>
                  When I started at Unite, I&apos;d never used a Windows computer (I was Mac/ unix)
                  was insecure about my Javascript knowledge, and had never even heard of C# or
                  asp.net, but was quickly up and running in it all, and soon became the dev most
                  requested by the pickiest clients.
                </p>
                <p>
                  Then at Homepoint I got the opportunity to get into React and have come into
                  myself. I love the way React lends itself to clean, organized reusable code. Not
                  that you cannot make a mess of it. I wonder where my next position will bring me?
                  Ruby on Rails perhaps?
                </p>
                <p>
                  I used to become so scared and defensive when asked to do something outside my
                  comfort zone. Now I&apos;ve learned to ask questions, look things up, and ask for
                  help.
                </p>
                <p>
                  I love to share knowledge. I write decent documentation. I&apos;m still a little
                  shy and have a difficult time posting my writing and ideas into the world at
                  large, but in the context of a company, where there is a general agreement or
                  I&apos;ve been assigned as the expert, I&apos;ll keep records and make sure that
                  others understand what they need to know.
                </p>
              </>
            )}
          </div>
          <p
            style={{ fontSize: '1em', textAlign: 'right', cursor: 'pointer' }}
            onClick={() => setTextExpaned(!textExpanded)}
          >
            {textExpanded ? '... Show less' : 'Show more ...'}
          </p>
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

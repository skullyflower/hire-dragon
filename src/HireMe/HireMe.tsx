import React, { useState } from 'react';
import './HireMe.scss';

const linksArray = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skullyflower',
  },
  { name: 'GitHub', href: 'https://www.github.com/skullyflower' },
  { name: 'Resumé', href: '/DragonMessmerwebResume.pdf' },
  { name: 'Skully Flower', href: 'https://www.skullyflower.com' },
  { name: 'Doug Mac Art', href: 'https://dougmac.skullyflower.com' },
  { name: 'Hello Calculator', href: '/calc' },
];

type SlideLinkType = { name: string; href: string };
const SlideLink = ({ name, href }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <a href={href} target={name} rel='noopener'>
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
              &ldquo;Dragon is a fantastic front-end developer who is an asset to every team she
              joins. She brings both deep technical knowledge and a willingness to jump in and help
              with anything. In fact, that customer focus/product mindset is one of her biggest
              strengths. She was often requested by name by our professional services customers
              because of her attention to detail and focus on helping the customer achieve their
              vision.&rdquo; -{' '}
              <i>
                <a
                  href='https://www.linkedin.com/in/aaron-witt-1455783/'
                  target='aaron'
                  rel='noopener'
                >
                  Aaron Witt, engineering leader
                </a>
              </i>
            </p>
            {textExpanded && (
              <>
                <p>
                  My passion is bringing excellent designs to life with real data. I work well with
                  in cross functional teams, boldly and tenaciously meeting the challenges of good
                  UX design or complex data manipulations. I have experience creating fully
                  responsive sites from scratch in pure css and html, and also with the aid of UI
                  frameworks. I have a record of delighting impossible to please clients.
                </p>
                <p>
                  A child of chaotic circumstances, I&apos;m the first in my family to have a
                  professional career. I enjoy the quiet control of being able to make functioning
                  machines out of typed script. When I&apos;m not coding, I&apos;m creating
                  creatures and worlds in ink and paper. Socially, I&apos;m compassionate and
                  supportive, but also quick to laugh and joke around.
                </p>
                <p>
                  Professionally, I have finally abandoned the impostor syndrome. I&apos;ve proven I
                  can learn anything and apply it in a professional setting, rather quickly. I ask
                  questions, look things up, and ask for help.
                </p>
                <p>
                  I&apos;ve been learning and applying new languages and methodologies since my
                  first tech gig. I barely knew HTML before I had to start scripting in PHP. The
                  next job required Javascript which is a very different language from PHP. Since
                  then I&apos;ve worked in C#, angularJs, JQuery, and other languages and
                  frameworks, up and down the stack.
                </p>
                <p>
                  Then at Homepoint I had the opportunity to start building with React and have come
                  to love the way React lends itself to clean, organized reusable code. (Not that
                  you cannot make a mess of it.){' '}
                </p>
                <p>I wonder where my next position will bring me? Ruby on Rails perhaps?</p>
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
              <SlideLink key={link.name} name={link.name} href={link.href} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

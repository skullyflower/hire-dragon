import { useState } from 'react';
import './HireMe.scss';
import textValues from './hireMe.json';

type SlideLinkType = { name: string; href: string; extra: string[] | null };
const SlideLink = ({ name, href, extra }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <div onClick={() => window.open(href, name)}>
        <a href={href} target={name} rel='noopener'>
          {name}
        </a>
        {extra?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export const HireMe = () => {
  const [textExpanded, setTextExpaned] = useState(false);
  const { linksArray, hiremeText } = textValues;
  return (
    <main id='pagebody'>
      <section>
        <div className='content'>
          <h1>Dragon Messmer</h1>
          <div className='wraptop'>
            <div
              data-testid='description'
              className={textExpanded ? 'description expanded' : 'description'}
            >
              <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>{hiremeText.intro}</h3>
              <div>
                <p>{hiremeText.visable}</p>
                {hiremeText.hidden.map((paragraph, i) => (
                  <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            <p
              style={{ fontSize: '1em', textAlign: 'right', cursor: 'pointer' }}
              onClick={() => setTextExpaned(!textExpanded)}
            >
              {textExpanded ? 'Show less' : '... Show more'}
            </p>
          </div>

          <div className='links'>
            {linksArray.map((link: SlideLinkType) => (
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

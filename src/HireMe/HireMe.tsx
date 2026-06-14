import { useState } from 'react';
import './HireMe.css';
import textValues from './hireMe.json';

type SlideLinkType = { name: string; href: string; extra: string[] | null };
const SlideLink = ({ name, href, extra }: SlideLinkType) => {
  return (
    <div className='slideLink'>
      <button popoverTarget={name}>{name}</button>
      {extra && (
        <div popover='auto' id={name} onClick={() => window.open(href, name)}>
          <a href={href} target={name} rel='noopener'>
            <h2>{name}</h2>
            <hr />
            {extra?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className='right'>Go to {name} &rarr;</p>
          </a>
        </div>
      )}
    </div>
  );
};

export const HireMe = () => {
  const [textExpanded, setTextExpaned] = useState(false);
  const { linksArray, hiremeintro, hiremeText } = textValues;
  return (
    <div className='wrapper'>
      <main id='pagebody'>
        <section>
          <div className='content'>
            <h1>Dragon Messmer</h1>
            <div className='wraptop'>
              <div
                data-testid='description'
                className={textExpanded ? 'description expanded' : 'description'}
              >
                <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>{hiremeintro}</h3>
                <div>
                  {hiremeText.map((paragraph, i) => (
                    <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '1em', textAlign: 'right' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => setTextExpaned(!textExpanded)}>
                  {textExpanded ? 'Show less' : '... Show more'}
                </span>
              </p>
            </div>

            <div className='links'>
              {linksArray.map((link: SlideLinkType) => (
                <SlideLink
                  key={link.name.replace(/[^\w]/g, '')}
                  name={link.name}
                  href={link.href}
                  extra={link.extra ?? null}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

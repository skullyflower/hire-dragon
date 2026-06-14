import strings from './resume.json';

const transformInlineContent = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    return m ? <strong key={i}>{m[1]}</strong> : part;
  });
};

const transformContent = (string: string) => {
  const match = string.match(/^\((.*)\)\[(.*)\]$/);
  if (match) {
    const url = match[2];
    const text = match[1];
    return (
      <div key={string}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      </div>
    );
  }
  if (string.match(/^\*\*(.*)\*\*$/)) {
    return (
      <div key={string}>
        <strong>{string.replace(/^\*\*(.*)\*\*$/, '$1')}</strong>
      </div>
    );
  }
  return <div key={string} dangerouslySetInnerHTML={{ __html: string }} />;
};

export const Resume = () => {
  return (
    <div className='wrapper'>
      <main id='pagebody'>
        <section>
          <div className='content' style={{ padding: '1em' }}>
            <h1>{strings.heading}</h1>
            <div
              style={{
                paddingTop: '0.5rem',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                justifyContent: 'center',
              }}
            >
              <strong>Contact:</strong>
              {strings.contact.map((contact) => transformContent(contact))}
            </div>
            <div>
              <div>
                <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>
                  {strings.subHeading}
                </h3>
              </div>

              <div style={{ textAlign: 'left' }}>
                <p
                  style={{
                    fontSize: '18px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid',
                  }}
                >
                  {strings.summary}
                </p>
              </div>
              <h3 style={{ textAlign: 'left' }}>Career Experience</h3>
              <div style={{ textAlign: 'left' }}>
                {strings.experience.map((job, i) => {
                  const [company, ...rest] = job.where.split(',');
                  const location = rest.join(',');
                  return (
                    <div key={`job-${i}`} style={{ marginBottom: '2rem' }}>
                      <p style={{ margin: '0 0 0.25rem' }}>
                        <strong>{company},</strong>
                        <span style={{ color: 'var(--accent, #c87941)', marginLeft: '0.4rem' }}>
                          {location}
                        </span>
                      </p>
                      <p style={{ margin: '0 0 0.75rem', fontSize: '0.95rem' }}>{job.what}</p>
                      <div style={{ marginLeft: '1.25rem', marginBottom: '0.75rem' }}>
                        <p style={{ margin: '0 0 0.5rem' }}>
                          <strong>
                            {job.role} ({job.when})
                          </strong>
                        </p>
                        <p style={{ margin: '0 0 0.25rem' }}>{job.project}</p>
                        {job.link && (
                          <p style={{ margin: '0 0 0.75rem' }}>
                            Project Link:{' '}
                            <a href={job.link} target='_blank' rel='noopener noreferrer'>
                              {job.link}
                            </a>
                          </p>
                        )}
                        <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                          {job.accomplishments.map((acc, j) => (
                            <li key={j}>{transformInlineContent(acc)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 style={{ textAlign: 'left' }}>Additional Experience</h3>
              <ul style={{ textAlign: 'left', paddingLeft: '1.5rem', margin: 0 }}>
                {strings.additionalExperience.map((exp, i) => (
                  <li key={`additional-${i}`}>
                    <strong>{exp.role}:</strong> {exp.where}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

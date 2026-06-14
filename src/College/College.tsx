import strings from './college.json';

export const College = () => {
  return (
    <div className='wrapper'>
      <main id='pagebody'>
        <section>
          <div className='content'>
            <h1>{strings.heading}</h1>
            <div className='wraptop'>
              <div>
                <h3 style={{ textAlign: 'center', borderBottom: '1px solid' }}>
                  {strings.subHeading}
                </h3>
                <div style={{ textAlign: 'left' }}>
                  {strings.content.map((paragraph, i) => (
                    <p key={`p-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

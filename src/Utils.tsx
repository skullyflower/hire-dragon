export const TransformContent = (mdString: string) => {
  //content is a markdown link?
  const match = mdString.match(/^\(([^)]+)\)\[([^\]]+)\]$/);
  if (match) {
    const url = match[2];
    const text = match[1];
    return (
      <div key={mdString}>
        <a
          href={url}
          target={url.startsWith('/') ? undefined : '_blank'}
          rel={url.startsWith('/') ? undefined : 'noopener noreferrer'}
        >
          {text}
        </a>
      </div>
    );
  }
  // content is bolded text heading
  if (mdString.match(/^\*\*(.*)\*\*$/)) {
    return (
      <div key={mdString}>
        <strong>{mdString.replace(/^\*\*(.*)\*\*$/, '$1')} </strong>
      </div>
    );
  }
  return <div key={mdString}> {mdString} </div>;
};

export const TransformInlineBoldedContent = (mdString: string) => {
  // content is a line that might contain a bolded string
  const parts = mdString.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    return m ? <strong key={i}>{m[1]}</strong> : part;
  });
};
export const TransformInlineLinkedContent = (mdString: string) => {
  // content is a line that might contain a bolded string
  const parts = mdString.split(/(\([^)]+\)\[[^\]]+\])/g);
  return parts.map((part, i) => {
    const m = part.match(/\(([^)]+)\)\[([^\]]+)\]/);
    console.log(m);

    return m ? (
      <a key={i} href={m[2]}>
        {m[1]}
      </a>
    ) : (
      part
    );
  });
};

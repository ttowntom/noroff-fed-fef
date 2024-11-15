export default function Button({ style, children }) {
  let styling = 'border-navy rounded border px-4 py-2 hover:bg-cat';

  if (style === 'primary') {
    styling += ' bg-navy text-blue-zodiac-50 hover:text-navy';
  }

  return <button className={styling}>{children}</button>;
}

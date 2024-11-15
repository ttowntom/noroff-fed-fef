export default function Button({ style, children }) {
  let styling = 'border-navy rounded border px-4 py-2';

  if (style === 'primary') {
    styling += ' bg-navy text-blue-zodiac-50';
  }

  return <button className={styling}>{children}</button>;
}

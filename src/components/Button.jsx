export default function Button({ style, grow, children }) {
  let styling = 'border-navy rounded border px-4 py-2 hover:bg-cat ';

  if (style === 'primary') {
    styling += ' bg-navy text-blue-zodiac-50 hover:text-navy';
  }

  if (grow) {
    styling += ' w-full';
  }

  return <button className={styling}>{children}</button>;
}

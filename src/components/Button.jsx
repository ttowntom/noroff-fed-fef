export default function Button({ style, grow, inverse, children }) {
  let styling = 'border-navy rounded border px-4 py-2 hover:bg-cat ';

  if (style === 'primary') {
    styling += ' bg-navy text-blue-zodiac-50 hover:text-navy';
  }

  if (grow) {
    styling += ' w-full';
  }

  if (inverse) {
    styling +=
      ' bg-navy border border-white text-white hover:bg-white hover:text-navy';
  }

  return <button className={styling}>{children}</button>;
}

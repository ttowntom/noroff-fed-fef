export default function Button({ style, grow, inverse, children, ...props }) {
  let styling = 'border-navy rounded border px-4 py-2 hover:bg-cat ';

  if (props.disabled) {
    return (
      <button
        className="cursor-not-allowed rounded border !bg-gray-300 px-4 py-2 !text-gray-500 hover:!bg-gray-300"
        disabled
        {...props}
      >
        {children}
      </button>
    );
  }

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

  return (
    <button {...props} className={styling}>
      {children}
    </button>
  );
}

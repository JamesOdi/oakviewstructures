export function MyButton(props: {
  label: string;
  style?: 'outlined' | 'solid';
  color?: string;
}) {
  props = Object.assign(
    {
      label: 'Button',
      style: 'solid',
      color: '--primary',
    },
    props
  );

  let border: string | undefined = undefined;
  let backgroundColor: string | undefined = undefined;
  let color: string | undefined = undefined;

  if (props.style === 'outlined') {
    border = `2px solid ${props.color}`;
    color = 'var(--text-primary)';
  } else {
    backgroundColor = `var(${props.color})`;
    if (props.color === '--primary') {
      color = 'var(--text-primary-contrast)';
    } else {
      color = 'var(--text-primary)';
    }
    border = `2px solid ${props.color}`;
  }

  return (
    <div
      style={{
        margin: '5px',
      }}
    >
      <label
        style={{
          padding: '10px 30px',
          cursor: 'pointer',
          border,
          backgroundColor,
          color,
          borderRadius: '5px',
        }}
      >
        {props.label}
      </label>
    </div>
  );
}

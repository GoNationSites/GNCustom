// example base theme from @theme-ui/presets
export default {
  breakpoints: ['768px', '1199px', '1400px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Times New Roman',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 100,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#F7F9FA',
    primary: '#E03626',
    muted: '#69656A',
    lightText: '#2a2a2a',
  },
  forms: {
    input: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'white!important',
      borderRadius: 0,
      color: 'white',
      mb: 4,
      '&::placeholder': {
        // color: ${props =>
        color: 'white',
      },
    },
    textarea: {
      borderRadius: '3px',
      borderBottom: '1px solid',
      borderColor: 'white',
      borderRadius: 0,
      fontFamily: 'body',
      mb: 4,
      '&::placeholder': {
        // color: ${props =>
        color: 'white',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '3px',
    },
  },
  buttons: {
    white: {
      background: 'transparent',
      border: '1px solid white',
      borderRadius: '3px',
      width: '100%',
      fontFamily: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      transition: 'all .4s!important',
      '&:hover': {
        cursor: 'pointer',
        color: 'text',
        background: 'white',
        transition: 'all .4s!important',
      },
    },
    black: {
      background: 'transparent',
      border: '1px solid',
      borderColor: 'lightText',
      borderRadius: '3px',
      width: '100%',
      fontFamily: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      color: 'lightText',
      transition: 'all .4s!important',
      '&:hover': {
        cursor: 'pointer',
        color: 'white',
        bg: 'lightText',
        transition: 'all .4s!important',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',

      div: {
        outlineColor: 'transparent!important',
      },
      img: {
        width: '100%',
      },
      a: {
        color: 'white',
        textDecoration: 'none',
        '-webkit-tap-highlight-color': `rgba(255, 255, 255, 0)`,
        '-webkit-tap-highlight-color': `transparent`,
        outline: ` none !important`,
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};

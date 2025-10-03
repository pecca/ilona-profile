// Type declarations to resolve MUI Grid TypeScript issues
declare module '@mui/material/Grid' {
  interface GridPropsVariantOverrides {
    item?: true
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export {}

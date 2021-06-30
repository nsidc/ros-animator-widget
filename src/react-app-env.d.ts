/// <reference types="react-scripts" />

import 'react';

declare module 'react' {
  interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
    orient?: 'horizontal' | 'vertical';
  }
}

/// <reference types="react-scripts" />

import React from 'react';

declare module 'react' {
  interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
    orient?: 'horizontal' | 'vertical';
  }
}

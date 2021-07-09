import React, { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  container,
  heading,
} from './layout.module.css';

import Divider from './Divider';
import Message from './Message';

const shortcodes = { Divider, Message };

const BlogLayout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <main className={container}>
        <h1 className={heading}>Página do Blog</h1>
        {children}
      </main>
    </MDXProvider>
  )
}
export default memo(BlogLayout)
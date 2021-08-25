import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { codeHig, SyntaxHighlighter } from './CodeHig';
import remarkGfm from 'remark-gfm';
import './index.less';

export default props => {
    const { style, contentTheme, onScroll, value, codeHigTheme, ...otherProps } = props;

    const components = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={codeHig[codeHigTheme]}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    children={String(children).replace(/\n$/, '')}
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <div
            id="md-content"
            onScroll={onScroll}
            className={`md-content md-editor-preview-theme-${contentTheme}`}
            style={style}
            {...otherProps}
        >
            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                {value}
            </ReactMarkdown>
        </div>
    );
};

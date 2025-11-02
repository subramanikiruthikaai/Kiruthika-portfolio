'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function AntdRegistry({ children }) {
    const cache = React.useMemo(() => createCache(), []);

    useServerInsertedHTML(() => {
        const styleText = extractStyle(cache, true);
        if (!styleText) return null;
        return (
            <style
                id="antd"
                dangerouslySetInnerHTML={{ __html: styleText }}
            />
        );
    });

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
}

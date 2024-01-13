'use client';

import React, { useState, type FC, useRef } from 'react';
import type { PreType } from '~/types/mdx';
import { MdContentCopy } from 'react-icons/md';
import { LuClipboardCheck } from 'react-icons/lu';

const Pre: FC<PreType> = ({ children }) => {
  const textArea = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (!textArea.current) return;
    setHovered(false);
    setCopied(true);
    const { textContent } = textArea.current;
    const copiedContent = textContent?.replace(/(\$ |copy)/g, ' ');

    if (!copiedContent) return;

    void navigator.clipboard.writeText(copiedContent);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      ref={textArea}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {hovered && (
        <button
          onClick={handleCopy}
          className={`absolute right-2 top-2 rounded-md border p-1 transition-all ${copied ? 'border-celtic' : 'border-secondary'}`}
          disabled={copied}
        >
          {copied ? (
            <LuClipboardCheck className="text-xl text-celtic" />
          ) : (
            <MdContentCopy className="text-xl text-secondary" />
          )}
        </button>
      )}
      <pre>{children}</pre>
    </div>
  );
};

export default Pre;

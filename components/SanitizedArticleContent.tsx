"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

// Add this to your component
export const SanitizedArticleContent = ({ content }: { content: string }) => {
  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    // Configure DOMPurify
    const clean = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "strong",
        "em",
        "u",
        "ol",
        "ul",
        "li",
        "a",
        "blockquote",
        "div",
        "span",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "class", "style"],
      FORBID_ATTR: ["style", "onclick"],
      ADD_ATTR: ["target"],
      ADD_TAGS: ["iframe"], // Only if you need embedded content
      KEEP_CONTENT: true,
    });

    // Preserve paragraph spacing by ensuring <p> tags have proper margins
    const withSpacing = clean
      .replace(/<p>/g, '<p class="mb-4">') // Add tailwind margin class
      .replace(/<br\s*\/?>/g, '<br class="my-2" />'); // Add vertical space for line breaks

    setSanitizedContent(withSpacing);
  }, [content]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className='prose prose-lg dark:prose-invert max-w-none mb-16'>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </motion.article>
  );
};



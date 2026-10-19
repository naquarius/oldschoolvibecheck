import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { vibesShareText } from '@/lib/share';
import { useState } from 'react';
import styles from './ShareButton.module.css';

interface ShareButtonProps {
  result: GuaResultType;
}

// Native share sheet on phones; copies the message + link where sharing isn't available
export const ShareButton = ({ result }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const strings = i18n.getUiStrings();

  const handleShare = async () => {
    const { body, url, full } = vibesShareText(result);

    if (navigator.share) {
      try {
        await navigator.share({ title: 'vibe check', text: body, url });
      } catch {
        // Closing the share sheet isn't an error worth surfacing
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button onClick={handleShare} className={styles.shareButton}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 2.6 16.7 7.3l-1.4 1.4L13 6.4V15h-2V6.4L8.7 8.7 7.3 7.3zM5 11h2v8h10v-8h2v10H5z"
          fill="currentColor"
        />
      </svg>
      <span role="status" aria-live="polite">
        {copied ? strings.copied : strings.share}
      </span>
    </button>
  );
};

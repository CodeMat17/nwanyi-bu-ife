"use client";

import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ShareButtonProps {
  path?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: "icon" | "button" | "text-icon";
  iconSize?: "sm" | "md" | "lg";
  buttonText?: string;
  showText?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nwanyi-bu-ife.com.ng';

export function ShareButton({
  path = "",
  title = "",
  description = "",
  className = "",
  variant = "icon",
  iconSize = "md",
  buttonText = "Share",
  showText = false,
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  const fullUrl = `${BASE_URL}${normalizedPath ? `/${normalizedPath}` : ""}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title || document.title,
          text: description || "",
          url: fullUrl,
        });
      } else {
        setIsOpen(true);
      }
    } catch (err) {
      if (!(err instanceof Error) && err?.toString().includes("AbortError")) {
        // User cancelled share - no action needed
      } else {
        console.error("Share failed:", err);
      }
    }
  };

  const shareTargets = [
    {
      id: "facebook",
      icon: Facebook,
      label: "Facebook",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      color: "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        description || title || ""
      )}&url=${encodeURIComponent(fullUrl)}`,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    },
    {
      id: "whatsapp",
      icon: WhatsAppIcon,
      label: "WhatsApp",
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      url: `https://wa.me/?text=${encodeURIComponent(
        `${description || title || ""} ${fullUrl}`
      )}`,
    },
    {
      id: "email",
      icon: Mail,
      label: "Email",
      color: "bg-gray-100 dark:bg-gray-700",
      url: `mailto:?subject=${encodeURIComponent(
        title || document.title
      )}&body=${encodeURIComponent(`${description || ""}\n\n${fullUrl}`)}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <>
      {/* Icon Only Variant */}
      {variant === "icon" && !showText && (
        <button
          onClick={handleShare}
          className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
          aria-label={`Share ${title || "this content"}`}
          title={`Share ${title || "this content"}`}>
          <Share2 className={iconSizes[iconSize]} />
        </button>
      )}

      {/* Button Variant */}
      {variant === "button" && (
        <Button
          onClick={handleShare}
          variant='outline'
          className={`flex items-center gap-2 ${className}`}
          aria-label={`Share ${title || "this content"}`}>
          <Share2 className={iconSizes[iconSize]} />
          <span className={textSizes[iconSize]}>{buttonText}</span>
        </Button>
      )}

      {/* Text + Icon Variant or Forced Text */}
      {(variant === "text-icon" || (variant === "icon" && showText)) && (
        <button
          onClick={handleShare}
          className={`flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
          aria-label={`Share ${title || "this content"}`}>
          <Share2 className={iconSizes[iconSize]} />
          <span className={`${textSizes[iconSize]} whitespace-nowrap`}>
            {buttonText}
          </span>
        </button>
      )}

      {/* Share Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Share this content</DialogTitle>
          </DialogHeader>
          <div className='grid grid-cols-3 gap-4 py-4'>
            {shareTargets.map((target) => (
              <a
                key={target.id}
                href={target.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                onClick={() => setIsOpen(false)}
                aria-label={`Share on ${target.label}`}>
                <div className={`p-3 rounded-full ${target.color}`}>
                  <target.icon className='w-6 h-6' />
                </div>
                <span className='text-sm'>{target.label}</span>
              </a>
            ))}

            <button
              onClick={copyToClipboard}
              className='flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
              aria-label={copied ? "Link copied!" : "Copy link to clipboard"}>
              <div className='p-3 bg-purple-100 dark:bg-purple-900 rounded-full'>
                <LinkIcon className='w-6 h-6 text-purple-600 dark:text-purple-400' />
              </div>
              <span className='text-sm'>
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
      fill='currentColor'
      aria-hidden='true'>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
    </svg>
  );
}

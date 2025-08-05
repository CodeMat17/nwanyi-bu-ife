"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  variant?:
    | "outline"
    | "ghost"
    | "link"
    | "default"
    | "destructive"
    | "secondary";
  className?: string;
}

export const ShareButton = ({
  title,
  text,
  url,
  variant = "outline",
  className = "",
}: ShareButtonProps) => {
  const handleShare = () => {
    const shareData = { title, text, url };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        toast.error("Failed to share");
      });
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => toast.success("Link copied to clipboard!"))
        .catch(() => toast.error("Failed to copy link"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}>
      <Button
        variant={variant}
        className={`flex items-center gap-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-md transition-all ${className}`}
        onClick={handleShare}>
        <Share2 className='h-4 w-4' />
        Share
      </Button>
    </motion.div>
  );
};

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";

interface NotificationProps {
  show: boolean;
  onClose: () => void;
}

export function Notification({ show, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {show && null}
    </AnimatePresence>
  );
}
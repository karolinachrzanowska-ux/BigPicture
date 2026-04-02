import { motion } from "motion/react";
import chatIconSvg from "../../assets/efadf3008368f7aa7bd42926a8fa2580aad62e36.png";

interface ChatButtonProps {
  onClick: () => void;
  isThinking: boolean;
  hasNotification: boolean;
}

export function ChatButton({ onClick, isThinking, hasNotification }: ChatButtonProps) {
  console.log('ChatButton render:', { isThinking, hasNotification }); // Debug
  
  return (
    <motion.button
      onClick={onClick}
      className="fixed top-6 right-6 w-16 h-16 flex items-center justify-center z-[60]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsujący efekt podczas myślenia - świecący pierścień wokół ikony */}
      {isThinking && (
        <motion.div
          className="absolute w-9 h-9 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
          style={{ backgroundColor: '#1868DB' }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Ikona chatbota */}
      <img src={chatIconSvg} alt="AI Chat" className="w-8 h-8 relative z-10 rounded-lg" />

      {/* Badge notyfikacji - UPROSZCZONA WERSJA */}
      {hasNotification && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute rounded-full border-2 border-white shadow-lg"
          style={{ 
            zIndex: 100, 
            backgroundColor: '#F5A623',
            top: '16px',
            right: '16px',
            width: '10px',
            height: '10px'
          }}
        />
      )}
    </motion.button>
  );
}
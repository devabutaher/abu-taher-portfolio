"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiCheckCircle, FiX, FiAlertCircle } from "react-icons/fi";

const NOTIFICATION_TTL = 4000;

const icons = {
  success: FiCheckCircle,
  error: FiAlertCircle,
};

export const NotificationContainer = ({ notifications, removeNotif }) => {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col-reverse gap-3 pointer-events-none min-w-[340px] max-w-[420px] w-auto">
      <AnimatePresence>
        {notifications.map((n) => (
          <NotificationItem key={n.id} notification={n} onRemove={removeNotif} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const NotificationItem = ({ notification, onRemove }) => {
  const { id, type, text } = notification;
  const Icon = icons[type] || icons.success;

  useEffect(() => {
    const timer = setTimeout(() => onRemove(id), NOTIFICATION_TTL);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-4 flex items-start gap-3 rounded-xl pointer-events-auto relative overflow-hidden"
      style={{
        background: "var(--background-card)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${
          type === "error"
            ? "rgba(239, 68, 68, 0.25)"
            : "var(--border-subtle)"
        }`,
        boxShadow:
          type === "error"
            ? "0 0 24px rgba(239, 68, 68, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 0 24px var(--brand-glow), 0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Gradient overlay — same as glass cards */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            type === "error"
              ? "linear-gradient(135deg, rgba(239, 68, 68, 0.06), transparent 60%)"
              : "linear-gradient(135deg, rgba(139, 92, 246, 0.08), transparent 60%)",
        }}
      />
      <Icon
        size="1.8rem"
        className="mt-0.5 shrink-0 relative z-[1]"
        style={{ color: type === "error" ? "#ef4444" : "var(--brand)" }}
      />
      <span className="text-[var(--text)] text-[1.5rem] font-medium leading-snug relative z-[1] flex-1">
        {text}
      </span>
      <button
        onClick={() => onRemove(id)}
        className="mt-0.5 shrink-0 text-[var(--text-darker)] hover:text-[var(--text)] transition-colors relative z-[1]"
        aria-label="Dismiss"
      >
        <FiX size="1.6rem" />
      </button>
    </motion.div>
  );
};

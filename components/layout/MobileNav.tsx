"use client";

import Link from "next/link";
import { X, Shield, Cpu, Scale, Brain, Home, BookOpen, Briefcase, Mail, Calculator, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnsBadge from "@/components/ui/EnsBadge";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/metodologia", label: "Metodología", icon: BookOpen },
  { href: "/casos", label: "Casos", icon: Briefcase },
  { href: "/operator", label: "Operator", icon: User },
  { href: "/contacto", label: "Contacto", icon: Mail },
  { href: "/calculadora-reynolds", label: "Calculadora Re", icon: Calculator },
];

const serviceItems = [
  { href: "/servicios/fase-1", label: "Intelligence Brief", icon: Shield },
  { href: "/servicios/fase-2", label: "Structural Integrity", icon: Cpu },
  { href: "/servicios/fase-3", label: "Vortex Engineering", icon: Scale },
  { href: "/servicios/hardening", label: "Hardening", icon: Brain },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring" as const, damping: 30, stiffness: 300 } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-bg-primary/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        >
          <motion.aside
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-bg-secondary border-l border-border-subtle flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border-subtle">
              <EnsBadge size="sm" />
              <button
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <motion.nav className="flex-1 overflow-y-auto p-5" variants={stagger} initial="hidden" animate="visible">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.href} variants={itemVariant}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 text-base text-text-secondary hover:text-accent-cold transition-colors min-h-[48px] px-3 rounded-lg hover:bg-bg-tertiary"
                      >
                        <Icon size={18} className="text-text-subtle shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Servicios section */}
              <div className="mt-6 pt-6 border-t border-border-subtle">
                <p className="text-[10px] uppercase tracking-widest text-text-subtle mb-3 px-3">
                  Servicios
                </p>
                <div className="space-y-1">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.href} variants={itemVariant}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-cold transition-colors min-h-[44px] px-3 rounded-lg hover:bg-bg-tertiary"
                        >
                          <Icon size={16} className="text-accent-cold/60 shrink-0" />
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.nav>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-border-subtle">
              <Link
                href="/calculadora-reynolds"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-gradient-to-r from-accent-warm to-accent-warning text-bg-primary font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform will-change-transform"
              >
                <Calculator size={16} />
                Calcular Reynolds
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

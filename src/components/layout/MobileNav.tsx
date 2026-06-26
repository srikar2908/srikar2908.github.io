import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LinkItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  resumeUrl: string;
}

const navLinks: LinkItem[] = [
  { name: 'Home', href: '/#' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'GitHub', href: '/#github' },
  { name: 'Contact', href: '/#contact' },
];

export default function MobileNav({ resumeUrl }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger */}
      <button
        onClick={toggleMenu}
        className="p-2.5 rounded-xl border border-border bg-transparent hover:bg-secondary/50 text-muted-foreground hover:text-accent transition-colors"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black z-[90]"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-border p-6 z-[100] shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="text-xl font-extrabold tracking-wider font-heading text-primary">Srikar.</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg border border-border bg-transparent hover:bg-secondary/50 text-muted-foreground"
                    aria-label="Close menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-4 pt-8">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="text-lg font-medium py-2.5 border-b border-border/50 text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer footer details */}
              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-hover rounded-xl shadow-sm transition-colors text-center w-full"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

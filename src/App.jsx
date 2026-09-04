import myPhoto from './assets/myphoto.png';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';

import {
  FaReact,
  FaLaravel,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaDesktop,
  FaPhp,
  FaDatabase,
  FaServer,
  FaCode,
  FaExternalLinkAlt,
  FaEnvelope,
  FaArrowUp,
  FaDownload,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaChevronRight,
  FaChevronLeft,
  FaSearch,
  FaRegCopy,
  FaExclamationCircle,
  FaSpinner
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiDocker,
  SiJira
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

import { MdAccessibility } from 'react-icons/md';

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback
} from 'react';

const CONTACT_EMAIL = 'gayashihasinika482@gmail.com';

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    id: 1,
    title: 'Appointment Booking Platform',
    short: 'Full-featured booking system built with React & Laravel.',
    description:
      'A production-style booking platform focused on a clear customer journey, responsive interfaces, business logic, REST APIs and database-backed workflows.',
    image: project1,
    technologies: ['React', 'Laravel', 'Tailwind CSS', 'MySQL'],
    category: 'Full Stack',
    liveUrl: 'https://trypod.lk/',
    highlights: [
      'Responsive booking experience',
      'React frontend with Laravel backend',
      'REST API integration',
      'MySQL data management'
    ]
  },
  {
    id: 2,
    title: 'Crop Management System',
    short: 'Agriculture management system with advanced features.',
    description:
      'A web-based agriculture management system designed to manage crop-related operational workflows with a modern responsive interface.',
    image: project2,
    technologies: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: 'https://agriops-staging.on-forge.com/',
    highlights: [
      'Modern management dashboard',
      'Responsive business UI',
      'Laravel-powered backend',
      'Database-driven workflows'
    ]
  }
];

/* -------------------------------------------------------------------------- */
/*                                   Skills                                   */
/* -------------------------------------------------------------------------- */

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FaCode />,
    skills: [
      { icon: <FaReact />, name: 'React', level: 85 },
      { icon: <FaJs />, name: 'JavaScript', level: 80 },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 85 },
      { icon: <FaHtml5 />, name: 'HTML5', level: 90 },
      { icon: <FaCss3Alt />, name: 'CSS3', level: 85 }
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    skills: [
      { icon: <FaLaravel />, name: 'Laravel', level: 75 },
      { icon: <FaPhp />, name: 'PHP', level: 75 },
      { icon: <SiMysql />, name: 'MySQL', level: 75 },
      { icon: <SiPostman />, name: 'REST APIs', level: 80 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: <FaDesktop />,
    skills: [
      { icon: <FaGitAlt />, name: 'Git', level: 80 },
      { icon: <FaGithub />, name: 'GitHub', level: 80 },
      { icon: <SiDocker />, name: 'Docker', level: 60 },
      { icon: <FaDesktop />, name: 'GitHub Desktop', level: 85 },
      { icon: <SiJira />, name: 'Jira', level: 70 },
      { icon: <VscVscode />, name: 'Visual Studio Code', level: 90 }
    ]
  }
];

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact']
];

const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Jira', icon: <SiJira /> },
  { name: 'VS Code', icon: <VscVscode /> },
  { name: 'REST APIs', icon: <FaServer /> }
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                              Utility Hooks                                 */
/* -------------------------------------------------------------------------- */

function useMotionPreference() {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === 'undefined') return false;

    const stored = window.localStorage.getItem('reduceMotion');

    if (stored !== null) {
      return stored === 'true';
    }

    return window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  });

  useEffect(() => {
    window.localStorage.setItem(
      'reduceMotion',
      String(reduceMotion)
    );
  }, [reduceMotion]);

  return [reduceMotion, setReduceMotion];
}

function useFocusTrap(containerRef, active) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const previouslyFocused = document.activeElement;
    const container = containerRef.current;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const getFocusableElements = () =>
      Array.from(
        container.querySelectorAll(focusableSelector)
      );

    const focusables = getFocusableElements();

    focusables[0]?.focus();

    const handleTab = (event) => {
      if (event.key !== 'Tab') return;

      const items = getFocusableElements();

      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', handleTab);

    return () => {
      container.removeEventListener(
        'keydown',
        handleTab
      );

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [active, containerRef]);
}

/* -------------------------------------------------------------------------- */
/*                              Cursor Glow                                   */
/* -------------------------------------------------------------------------- */

function CursorGlow({ reduceMotion }) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.5
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.5
  });

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, [reduceMotion, mouseX, mouseY]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="hidden lg:block fixed pointer-events-none z-[9998] w-56 h-56 rounded-full bg-purple-500/5 blur-3xl"
      style={{
        left: smoothX,
        top: smoothY,
        x: '-50%',
        y: '-50%'
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                             Magnetic Button                                */
/* -------------------------------------------------------------------------- */

function MagneticButton({
  children,
  reduceMotion,
  className = '',
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20
  });

  const handleMouseMove = (event) => {
    if (reduceMotion) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const offsetX =
      event.clientX -
      (rect.left + rect.width / 2);

    const offsetY =
      event.clientY -
      (rect.top + rect.height / 2);

    x.set(offsetX * 0.08);
    y.set(offsetY * 0.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Tilt Card                                     */
/* -------------------------------------------------------------------------- */

function TiltCard({
  children,
  reduceMotion,
  className = ''
}) {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(
    rotateX,
    {
      stiffness: 180,
      damping: 20
    }
  );

  const springRotateY = useSpring(
    rotateY,
    {
      stiffness: 180,
      damping: 20
    }
  );

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      event.clientX - rect.left;
    const y =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(
      ((y - centerY) / centerY) * -2.5
    );

    rotateY.set(
      ((x - centerX) / centerX) * 2.5
    );
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Animated Counter                                */
/* -------------------------------------------------------------------------- */

function AnimatedCounter({
  value,
  suffix = '',
  reduceMotion
}) {
  const [count, setCount] = useState(
    reduceMotion ? value : 0
  );

  useEffect(() => {
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      start = Math.round(value * eased);

      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, reduceMotion]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Toasts                                    */
/* -------------------------------------------------------------------------- */

function useToasts() {
  const [toasts, setToasts] = useState([]);

  const push = useCallback(
    (message, type = 'info') => {
      const id = `${Date.now()}-${Math.random()}`;

      setToasts((current) => [
        ...current,
        {
          id,
          message,
          type
        }
      ]);

      window.setTimeout(() => {
        setToasts((current) =>
          current.filter(
            (toast) => toast.id !== id
          )
        );
      }, 3800);
    },
    []
  );

  const dismiss = useCallback((id) => {
    setToasts((current) =>
      current.filter(
        (toast) => toast.id !== id
      )
    );
  }, []);

  return {
    toasts,
    push,
    dismiss
  };
}

function ToastStack({
  toasts,
  onDismiss
}) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] flex flex-col-reverse gap-2 w-[calc(100%-2.5rem)] max-w-sm pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{
              opacity: 0,
              y: 16,
              scale: 0.96
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.96
            }}
            role="status"
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-xl text-sm ${
              toast.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-200'
                : toast.type === 'error'
                ? 'bg-red-500/10 border-red-400/30 text-red-200'
                : 'bg-[#161620]/95 border-white/15 text-gray-200'
            }`}
          >
            {toast.type === 'error' ? (
              <FaExclamationCircle className="shrink-0" />
            ) : (
              <FaCheckCircle className="shrink-0" />
            )}

            <span className="flex-1">
              {toast.message}
            </span>

            <button
              onClick={() =>
                onDismiss(toast.id)
              }
              aria-label="Dismiss notification"
              className="text-current opacity-60 hover:opacity-100 transition"
            >
              <FaTimes className="text-xs" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Command Palette                                 */
/* -------------------------------------------------------------------------- */

function CommandPalette({
  open,
  onClose,
  onNavigate,
  onOpenProject
}) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] =
    useState(0);

  const inputRef = useRef(null);
  const panelRef = useRef(null);

  useFocusTrap(panelRef, open);

  const results = useMemo(() => {
    const q =
      query.trim().toLowerCase();

    const base = [
      ...navItems.map(
        ([id, label]) => ({
          kind: 'Section',
          id,
          label
        })
      ),
      ...projects.map(
        (project) => ({
          kind: 'Project',
          id: project.id,
          label: project.title,
          project
        })
      )
    ];

    if (!q) return base;

    return base.filter((item) =>
      item.label
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;

    setQuery('');
    setActiveIndex(0);

    const timer =
      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 40);

    return () =>
      window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runItem = (item) => {
    if (!item) return;

    if (item.kind === 'Section') {
      onNavigate(item.id);
    } else {
      onOpenProject(item.project);
    }

    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();

      setActiveIndex((index) =>
        Math.min(
          index + 1,
          results.length - 1
        )
      );
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();

      setActiveIndex((index) =>
        Math.max(index - 1, 0)
      );
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      runItem(results[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-black/70 backdrop-blur-sm flex items-start justify-center px-4 pt-24 md:pt-32"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98
            }}
            className="w-full max-w-lg bg-[#14141d] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <FaSearch className="text-gray-500 shrink-0" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Jump to a section or project..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-600 text-sm md:text-base"
                aria-label="Search sections and projects"
              />

              <kbd className="text-[10px] text-gray-500 border border-white/10 px-1.5 py-1 rounded-md hidden sm:inline-block">
                Esc
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <p className="px-5 py-8 text-sm text-gray-500 text-center">
                  No matches found.
                </p>
              )}

              {results.map(
                (item, index) => (
                  <button
                    key={`${item.kind}-${item.id}`}
                    onClick={() =>
                      runItem(item)
                    }
                    onMouseEnter={() =>
                      setActiveIndex(index)
                    }
                    className={`w-full text-left px-5 py-3 flex items-center justify-between gap-3 text-sm transition-colors ${
                      index === activeIndex
                        ? 'bg-purple-500/15 text-purple-200'
                        : 'text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-gray-600 w-14 shrink-0">
                        {item.kind}
                      </span>

                      <span className="truncate">
                        {item.label}
                      </span>
                    </span>

                    <FaChevronRight className="text-xs opacity-40 shrink-0" />
                  </button>
                )
              )}
            </div>

            <div className="px-5 py-3 border-t border-white/10 flex items-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <kbd className="border border-white/10 px-1.5 py-0.5 rounded">
                  ↑
                </kbd>

                <kbd className="border border-white/10 px-1.5 py-0.5 rounded">
                  ↓
                </kbd>

                navigate
              </span>

              <span className="flex items-center gap-1">
                <kbd className="border border-white/10 px-1.5 py-0.5 rounded">
                  Enter
                </kbd>

                select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Section Heading                               */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  chapter,
  title,
  subtitle
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.3
      }}
      transition={{
        duration: 0.6
      }}
      className="text-center mb-14"
    >
      <span className="text-purple-400 text-xs md:text-sm tracking-[3px] font-medium">
        {chapter}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Main App                                  */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState('home');

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [projectFilter, setProjectFilter] =
    useState('All');

  const [showTopButton, setShowTopButton] =
    useState(false);

  const [paletteOpen, setPaletteOpen] =
    useState(false);

  const [
    reduceMotion,
    setReduceMotion
  ] = useMotionPreference();

  const {
    toasts,
    push: pushToast,
    dismiss: dismissToast
  } = useToasts();

  const menuButtonRef =
    useRef(null);

  const modalRef =
    useRef(null);

  useFocusTrap(
    modalRef,
    Boolean(selectedProject)
  );

  const filteredProjects =
    useMemo(() => {
      if (projectFilter === 'All') {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.category ===
          projectFilter
      );
    }, [projectFilter]);

  const projectIndex =
    useMemo(
      () =>
        filteredProjects.findIndex(
          (project) =>
            project.id ===
            selectedProject?.id
        ),
      [
        filteredProjects,
        selectedProject
      ]
    );

  const goToProject =
    useCallback(
      (direction) => {
        if (
          !selectedProject ||
          filteredProjects.length === 0
        ) {
          return;
        }

        const nextIndex =
          (projectIndex +
            direction +
            filteredProjects.length) %
          filteredProjects.length;

        setSelectedProject(
          filteredProjects[nextIndex]
        );
      },
      [
        selectedProject,
        filteredProjects,
        projectIndex
      ]
    );

  /* ---------------------------- Active Section --------------------------- */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (visible[0]) {
            setActiveSection(
              visible[0].target.id
            );
          }
        },
        {
          threshold: [
            0.2,
            0.45,
            0.7
          ],
          rootMargin:
            '-90px 0px -25% 0px'
        }
      );

    document
      .querySelectorAll(
        'section[id]'
      )
      .forEach((section) =>
        observer.observe(section)
      );

    return () =>
      observer.disconnect();
  }, []);

  /* ------------------------------ Page title ------------------------------ */

  useEffect(() => {
    const labels =
      Object.fromEntries(navItems);

    const label =
      labels[activeSection];

    document.title = label
      ? `${label} • Gayashi Hasinika`
      : 'Gayashi Hasinika • Full Stack Developer';
  }, [activeSection]);

  /* ---------------------------- Scroll progress -------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const docHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      setScrollProgress(
        docHeight > 0
          ? (scrollTop /
              docHeight) *
              100
          : 0
      );

      setShowTopButton(
        scrollTop > 500
      );
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true
      }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  /* ---------------------------- Keyboard shortcuts ----------------------- */

  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      const isCommandK =
        (event.metaKey ||
          event.ctrlKey) &&
        event.key.toLowerCase() ===
          'k';

      if (isCommandK) {
        event.preventDefault();

        setPaletteOpen(
          (open) => !open
        );

        return;
      }

      if (event.key === 'Escape') {
        setSelectedProject(null);
        setMenuOpen(false);
        setPaletteOpen(false);
      }

      if (
        selectedProject &&
        !paletteOpen
      ) {
        if (
          event.key ===
          'ArrowRight'
        ) {
          goToProject(1);
        }

        if (
          event.key ===
          'ArrowLeft'
        ) {
          goToProject(-1);
        }
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
  }, [
    selectedProject,
    paletteOpen,
    goToProject
  ]);

  /* ------------------------------ Body lock ------------------------------- */

  useEffect(() => {
    document.body.style.overflow =
      selectedProject ||
      paletteOpen
        ? 'hidden'
        : '';

    return () => {
      document.body.style.overflow =
        '';
    };
  }, [
    selectedProject,
    paletteOpen
  ]);

  /* ---------------------------- Navigation -------------------------------- */

  const scrollToSection = (
    id
  ) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: reduceMotion
          ? 'auto'
          : 'smooth',
        block: 'start'
      });

    setMenuOpen(false);
  };

  const copyEmail =
    async () => {
      try {
        await navigator.clipboard.writeText(
          CONTACT_EMAIL
        );

        pushToast(
          'Email address copied to clipboard.',
          'success'
        );
      } catch {
        window.location.href = `mailto:${CONTACT_EMAIL}`;

        pushToast(
          'Opening your email app instead.',
          'info'
        );
      }
    };

  const scrollToTop =
    () => {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion
          ? 'auto'
          : 'smooth'
      });
    };

  const toggleMotionPreference =
    () => {
      setReduceMotion(
        (value) => !value
      );

      pushToast(
        reduceMotion
          ? 'Animations turned back on.'
          : 'Reduced motion enabled.',
        'info'
      );
    };

  return (
    <div className="bg-[#09090B] text-white min-h-screen overflow-x-hidden scroll-smooth font-sans selection:bg-purple-500/30">

      <CursorGlow
        reduceMotion={reduceMotion}
      />

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[400] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl"
      >
        Skip to main content
      </a>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>

      {/* Ambient background */}
      <div className="fixed top-[-180px] left-[-120px] w-[650px] h-[650px] bg-gradient-to-br from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-150px] w-[580px] h-[580px] bg-gradient-to-br from-sky-500/15 via-purple-500/10 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* Side section dots */}
      <nav
        aria-label="Section progress"
        className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-40"
      >
        {navItems.map(
          ([id, label]) => (
            <button
              key={id}
              onClick={() =>
                scrollToSection(id)
              }
              aria-label={`Go to ${label}`}
              aria-current={
                activeSection === id
                  ? 'true'
                  : undefined
              }
              className="group relative flex items-center justify-end"
            >
              <span className="absolute right-6 mr-1 whitespace-nowrap text-xs bg-[#14141d] border border-white/10 px-2.5 py-1 rounded-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
                {label}
              </span>

              <span
                className={`w-2.5 h-2.5 rounded-full border transition-all ${
                  activeSection === id
                    ? 'bg-purple-400 border-purple-400 scale-125'
                    : 'bg-transparent border-gray-600 group-hover:border-purple-300'
                }`}
              />
            </button>
          )
        )}
      </nav>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-4 md:py-5 bg-black/75 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <button
            onClick={() =>
              scrollToSection('home')
            }
            aria-label="Go to home"
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      rotate: 6,
                      scale: 1.05
                    }
              }
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30"
            >
              <span className="text-white text-2xl font-bold">
                G
              </span>
            </motion.div>

            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent tracking-tight">
              Gayashi
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map(
              ([id, label]) => (
                <button
                  key={id}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  aria-current={
                    activeSection === id
                      ? 'page'
                      : undefined
                  }
                  className={`relative py-2 transition-colors ${
                    activeSection === id
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all ${
                      activeSection === id
                        ? 'w-full'
                        : 'w-0'
                    }`}
                  />
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-3 md:gap-4">

            <button
              onClick={() =>
                setPaletteOpen(true)
              }
              className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-purple-400/40 px-3.5 py-2 rounded-xl transition"
              aria-label="Open quick navigation search"
            >
              <FaSearch className="text-xs" />

              <span className="hidden lg:inline">
                Quick search
              </span>

              <kbd className="text-[10px] border border-white/10 px-1.5 py-0.5 rounded ml-1">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={
                toggleMotionPreference
              }
              aria-pressed={
                reduceMotion
              }
              aria-label={
                reduceMotion
                  ? 'Turn animations back on'
                  : 'Reduce motion'
              }
              title={
                reduceMotion
                  ? 'Turn animations back on'
                  : 'Reduce motion'
              }
              className={`p-2.5 rounded-xl border transition ${
                reduceMotion
                  ? 'border-purple-400/50 text-purple-300 bg-purple-500/10'
                  : 'border-white/10 text-gray-400 hover:text-white hover:border-white/25'
              }`}
            >
              <MdAccessibility className="text-lg" />
            </button>

            <div className="hidden md:flex items-center gap-4 text-xl">
              <a
                href="https://github.com/gayashihasinika"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-cyan-400 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              ref={menuButtonRef}
              onClick={() =>
                setMenuOpen(
                  (value) => !value
                )
              }
              className="md:hidden text-2xl text-purple-300 p-2"
              aria-label={
                menuOpen
                  ? 'Close menu'
                  : 'Open menu'
              }
              aria-expanded={
                menuOpen
              }
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -15
            }}
            className="md:hidden fixed top-[73px] left-0 right-0 z-40 bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 p-6"
          >
            <div className="flex flex-col gap-2">

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setPaletteOpen(true);
                }}
                className="flex items-center gap-2 text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-purple-300 transition text-gray-300"
              >
                <FaSearch className="text-sm" />
                Quick search
              </button>

              {navItems.map(
                ([id, label]) => (
                  <button
                    key={id}
                    onClick={() =>
                      scrollToSection(id)
                    }
                    className="text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-purple-300 transition"
                  >
                    {label}
                  </button>
                )
              )}

              <div className="flex gap-6 px-4 pt-4 border-t border-white/10 mt-2">
                <a
                  href="https://github.com/gayashihasinika"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                               */}
        {/* ------------------------------------------------------------------ */}

        <section
          id="home"
          className="relative min-h-screen flex items-center px-5 md:px-12 pt-28 pb-16"
        >
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 35
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration:
                  reduceMotion
                    ? 0
                    : 0.8
              }}
              className="relative z-10"
            >

              <div className="inline-flex items-center gap-3 bg-white/5 border border-purple-400/20 px-5 py-2.5 rounded-full text-sm mb-7 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  {!reduceMotion && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  )}

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-400" />
                </span>

                Open to Freelance & Opportunities
              </div>

              <p className="text-purple-400 font-medium tracking-[0.25em] text-sm md:text-base mb-3">
                HELLO, I'M
              </p>

              <h1 className="text-6xl sm:text-7xl md:text-8xl leading-none font-bold tracking-tighter bg-gradient-to-br from-white via-purple-100 to-cyan-300 bg-clip-text text-transparent">
                GAYASHI
              </h1>

              <h2 className="text-2xl md:text-4xl text-gray-300 mt-5 font-light">
                Full Stack Developer
              </h2>

              <p className="text-gray-400 mt-7 text-base md:text-lg max-w-xl leading-relaxed">
                I build modern, responsive web
                applications using React,
                Laravel and MySQL, with a strong
                focus on clean interfaces,
                reliable backend workflows and
                practical business solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">

                {[
                  {
                    number: 1,
                    suffix: '+',
                    label: 'Years Experience'
                  },
                  {
                    number: 2,
                    suffix: '+',
                    label: 'Featured Projects'
                  },
                  {
                    number: 3,
                    suffix: '+',
                    label: 'Core Technologies'
                  },
                  {
                    number: 1,
                    suffix: '',
                    label: 'Production Role'
                  }
                ].map(
                  ({
                    number,
                    suffix,
                    label
                  }) => (
                    <div
                      key={label}
                      className="border-l border-purple-400/30 pl-3"
                    >
                      <div className="text-2xl md:text-3xl font-semibold">
                        <AnimatedCounter
                          value={number}
                          suffix={suffix}
                          reduceMotion={
                            reduceMotion
                          }
                        />
                      </div>

                      <div className="text-[11px] md:text-xs text-gray-500 mt-1 leading-tight">
                        {label}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-10">

                <MagneticButton
                  reduceMotion={
                    reduceMotion
                  }
                  onClick={() =>
                    scrollToSection(
                      'projects'
                    )
                  }
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 px-7 py-3.5 rounded-2xl font-semibold shadow-xl shadow-purple-500/25 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Explore Projects
                  <FaChevronRight className="text-xs" />
                </MagneticButton>

                <MagneticButton
                  reduceMotion={
                    reduceMotion
                  }
                  onClick={() =>
                    scrollToSection(
                      'contact'
                    )
                  }
                  className="border border-white/20 hover:border-purple-400 hover:bg-purple-500/5 px-7 py-3.5 rounded-2xl font-semibold transition-all"
                >
                  Get In Touch
                </MagneticButton>

                <a
                  href="./GayashiHasinika_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 hover:border-cyan-400/50 px-6 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-all"
                >
                  <FaDownload className="text-sm" />
                  View CV
                </a>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                x: 45
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0
              }}
              transition={{
                duration:
                  reduceMotion
                    ? 0
                    : 1
              }}
              className="flex justify-center relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/15 rounded-[4rem] blur-3xl" />

              <div className="relative">

                <motion.img
                  src={myPhoto}
                  alt="Portrait of Gayashi Hasinika"
                  loading="eager"
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          y: [
                            0,
                            -8,
                            0
                          ]
                        }
                  }
                  transition={
                    reduceMotion
                      ? {}
                      : {
                          duration: 4,
                          repeat:
                            Infinity,
                          ease: 'easeInOut'
                        }
                  }
                  className="w-[280px] sm:w-[340px] md:w-[420px] rounded-[2rem] shadow-2xl shadow-purple-500/20 border border-white/10 object-cover"
                />

                <motion.div
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -3
                        }
                  }
                  className="absolute -bottom-5 -left-5 bg-black/85 backdrop-blur-md border border-purple-400/20 px-5 py-3 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className={`w-2 h-2 bg-cyan-400 rounded-full ${
                        reduceMotion
                          ? ''
                          : 'animate-pulse'
                      }`}
                    />

                    Available for Work
                  </div>
                </motion.div>

                <motion.div
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -3
                        }
                  }
                  className="absolute -top-5 -right-5 hidden sm:flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-xs text-gray-300"
                >
                  <FaCode className="text-purple-400" />
                  React + Laravel
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Tech Stack                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section className="border-y border-white/10 py-6 overflow-hidden bg-white/[0.015]">

          <div className="max-w-6xl mx-auto px-5">

            <p className="text-center text-xs uppercase tracking-[0.25em] text-gray-600 mb-5">
              Technologies I Work With
            </p>

            <div className="flex justify-center flex-wrap gap-x-7 gap-y-4">

              {techStack.map(
                (tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -3,
                            scale: 1.04
                          }
                    }
                    className="flex items-center gap-2 text-gray-500 hover:text-purple-300 transition-colors"
                  >
                    <span className="text-lg">
                      {tech.icon}
                    </span>

                    <span className="text-sm font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* About                                                              */}
        {/* ------------------------------------------------------------------ */}

        <section
          id="about"
          className="relative px-5 md:px-12 py-24 md:py-28 bg-[#12121a] border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="01"
              title="About Me"
            />

            <div className="grid lg:grid-cols-12 gap-12 items-start">

              <motion.div
                variants={
                  staggerContainer
                }
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                className="lg:col-span-7 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed"
              >
                <motion.p
                  variants={fadeUp}
                >
                  I'm a passionate Full Stack
                  Developer who enjoys creating
                  modern, responsive and
                  user-friendly applications
                  using React, Laravel and MySQL.
                  I enjoy turning ideas into
                  practical digital products with
                  clean UI and reliable backend
                  workflows.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                >
                  My development approach combines
                  frontend usability, backend
                  architecture, database design and
                  continuous improvement. I enjoy
                  solving real business problems
                  through software.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="grid sm:grid-cols-2 gap-4 pt-3"
                >
                  {[
                    [
                      'UI First',
                      'Responsive and intuitive interfaces'
                    ],
                    [
                      'Business Focus',
                      'Solutions built around real workflows'
                    ],
                    [
                      'Clean Code',
                      'Maintainable and structured development'
                    ],
                    [
                      'Continuous Learning',
                      'Always improving technical skills'
                    ]
                  ].map(
                    ([title, desc]) => (
                      <motion.div
                        key={title}
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                y: -4
                              }
                        }
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 transition"
                      >
                        <h3 className="font-semibold">
                          {title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                          {desc}
                        </p>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>

              <div className="lg:col-span-5 grid gap-4">

                {[
                  [
                    <FaGraduationCap />,
                    'BSc (Hons) Computer Science'
                  ],
                  [
                    <FaBriefcase />,
                    '1+ Years Experience'
                  ],
                  [
                    <FaCheckCircle />,
                    'Production System Experience'
                  ]
                ].map(
                  ([icon, title]) => (
                    <motion.div
                      key={title}
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              y: -5
                            }
                      }
                      className="bg-[#1a1a24] border border-white/10 p-6 rounded-3xl hover:border-purple-400/30 transition-all"
                    >
                      <div className="text-3xl text-purple-400 mb-3">
                        {icon}
                      </div>

                      <h3 className="text-lg font-semibold">
                        {title}
                      </h3>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Education                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="px-5 md:px-12 py-24 bg-[#111827] border-t border-white/5">
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="02"
              title="Education"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.6
              }}
              className="relative bg-[#1a1a24] border border-white/10 rounded-3xl p-7 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative flex flex-col md:flex-row md:items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-2xl text-purple-400 shrink-0">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    BSc (Hons) Computer Science
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Asia Pacific Institute of Information Technology
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-sm">
                      Second Class (Second Division)
                    </span>

                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                      Expected Graduation: December 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-9 pt-7 border-t border-white/10">

                <h4 className="font-semibold mb-5">
                  Relevant Coursework
                </h4>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                  {[
                    'Data Structures & Algorithms',
                    'Database Systems',
                    'Software Engineering',
                    'Web Application Development',
                    'System Analysis & Design'
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex gap-2 items-start text-gray-400 text-sm"
                      >
                        <span className="text-purple-400 mt-0.5">
                          ✓
                        </span>

                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Certifications                                                     */}
        {/* ------------------------------------------------------------------ */}

        <section className="px-5 md:px-12 py-24 bg-[#0f172a] border-t border-white/5">
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="03"
              title="Certifications & Learning"
            />

            <div className="grid md:grid-cols-2 gap-6">

              <TiltCard
                reduceMotion={
                  reduceMotion
                }
                className="h-full"
              >
                <div className="group bg-[#1a1a24] border border-white/10 rounded-3xl p-7 hover:border-purple-400/30 transition-all h-full">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
                        LinkedIn Learning
                      </span>

                      <h3 className="text-xl font-semibold mt-3">
                        HTML Essential Training
                      </h3>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-purple-400">
                      <FaHtml5 />
                    </div>
                  </div>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    Completed course by Jen Simmons
                    on LinkedIn Learning.
                  </p>

                  <a
                    href="https://lnkd.in/gdvMBkr3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mt-6 text-sm font-medium"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </TiltCard>

              <TiltCard
                reduceMotion={
                  reduceMotion
                }
                className="h-full"
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/5 border border-purple-400/15 rounded-3xl p-7 h-full">

                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Learning Mindset
                  </span>

                  <h3 className="text-xl font-semibold mt-3">
                    Always Building & Improving
                  </h3>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    I continuously learn through
                    hands-on projects, debugging,
                    feature development and working
                    with modern web technologies.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {[
                      'React',
                      'Laravel',
                      'APIs',
                      'Database Design',
                      'Responsive UI',
                      'Docker',
                      'Jira'
                    ].map(
                      (item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full bg-black/20 border border-white/10 text-xs text-gray-300"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Skills                                                             */}
        {/* ------------------------------------------------------------------ */}

        <section
          id="skills"
          className="px-5 md:px-12 py-24"
        >
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="04"
              title="Technical Expertise"
              subtitle="Technologies and tools I use to design, build and maintain modern web applications."
            />

            <div className="grid md:grid-cols-3 gap-6">

              {skillGroups.map(
                (group) => (
                  <TiltCard
                    key={group.title}
                    reduceMotion={
                      reduceMotion
                    }
                    className="h-full"
                  >
                    <div className="bg-[#12121a] border border-white/10 rounded-3xl p-7 hover:border-purple-400/30 transition-all h-full">

                      <div className="flex items-center justify-between mb-7">

                        <div>
                          <div className="uppercase tracking-widest text-purple-400 text-xs">
                            {group.title}
                          </div>

                          <h3 className="text-lg font-semibold mt-1">
                            Core Skills
                          </h3>
                        </div>

                        <motion.div
                          whileHover={
                            reduceMotion
                              ? {}
                              : {
                                  rotate: 8,
                                  scale: 1.08
                                }
                          }
                          className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 text-xl"
                        >
                          {group.icon}
                        </motion.div>
                      </div>

                      <div className="space-y-5">

                        {group.skills.map(
                          (skill) => (
                            <div
                              key={skill.name}
                            >

                              <div className="flex items-center gap-3 mb-2">

                                <motion.div
                                  whileHover={
                                    reduceMotion
                                      ? {}
                                      : {
                                          scale: 1.2,
                                          rotate: 5
                                        }
                                  }
                                  className="text-lg text-gray-300 shrink-0"
                                >
                                  {skill.icon}
                                </motion.div>

                                <span className="text-gray-200 text-sm flex-1">
                                  {skill.name}
                                </span>

                                <span className="text-xs text-gray-500">
                                  {skill.level}%
                                </span>
                              </div>

                              <div
                                className="h-1.5 rounded-full bg-white/5 overflow-hidden"
                                role="progressbar"
                                aria-label={`${skill.name} proficiency`}
                                aria-valuenow={
                                  skill.level
                                }
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <motion.div
                                  initial={{
                                    width: 0
                                  }}
                                  whileInView={{
                                    width: `${skill.level}%`
                                  }}
                                  viewport={{
                                    once: true
                                  }}
                                  transition={{
                                    duration:
                                      reduceMotion
                                        ? 0
                                        : 0.9,
                                    ease: 'easeOut'
                                  }}
                                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </TiltCard>
                )
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Resume Highlights                                                   */}
        {/* ------------------------------------------------------------------ */}

        <section className="px-5 md:px-12 py-24 bg-[#0f172a] border-t border-white/5">
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="QUICK OVERVIEW"
              title="Resume Highlights"
              subtitle="Key strengths and experience at a glance"
            />

            <motion.div
              variants={
                staggerContainer
              }
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                'Full Stack Developer',
                'React + Laravel Development',
                'Production System Experience',
                'REST API Development',
                'Database Design & Optimization',
                'Responsive UI Development'
              ].map(
                (item) => (
                  <motion.div
                    variants={fadeUp}
                    key={item}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -4
                          }
                    }
                    className="flex items-center gap-3 bg-[#1a1a24] border border-white/10 rounded-2xl px-5 py-5 hover:border-purple-400/30 transition-all"
                  >
                    <FaCheckCircle className="text-cyan-400 shrink-0" />

                    <span className="text-gray-200">
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Experience                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section
          id="experience"
          className="px-5 md:px-12 py-24 bg-[#111827] border-t border-white/5"
        >
          <div className="max-w-5xl mx-auto">

            <SectionHeading
              chapter="05"
              title="Experience"
            />

            <div className="relative">

              <div className="absolute left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent" />

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                transition={{
                  duration: 0.6
                }}
                className="relative pl-10"
              >

                <div className="absolute left-0 top-1 w-[21px] h-[21px] rounded-full bg-purple-500 border-4 border-[#111827] shadow-lg shadow-purple-500/30" />

                <span className="inline-flex px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
                  December 2024 — Present
                </span>

                <h3 className="text-2xl font-semibold mt-4">
                  Software Engineer Trainee
                </h3>

                <p className="text-purple-400 font-medium mt-1">
                  Impresso Ceylon Holdings (PVT) LTD
                </p>

                <ul className="mt-6 grid md:grid-cols-2 gap-3 text-gray-400">

                  {[
                    'Developed and maintained modern web applications using React.js and Laravel.',
                    'Designed and integrated RESTful APIs for business-critical systems.',
                    'Built responsive and user-friendly interfaces with Tailwind CSS.',
                    'Worked with MySQL databases, including schema design and optimization.',
                    'Collaborated with cross-functional teams to deliver production-ready features.',
                    'Performed bug fixing, testing and application maintenance.',
                    'Used Git and GitHub for source control and collaborative development.',
                    'Worked with development tools and project workflows including Jira and Visual Studio Code.'
                  ].map(
                    (item) => (
                      <motion.li
                        key={item}
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                x: 3
                              }
                        }
                        className="flex gap-3 bg-black/10 rounded-2xl p-4"
                      >
                        <span className="text-purple-400">
                          ✓
                        </span>

                        <span>
                          {item}
                        </span>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Projects                                                           */}
        {/* ------------------------------------------------------------------ */}

        <section
          id="projects"
          className="px-5 md:px-12 py-24 bg-[#12121a] border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="06"
              title="Featured Projects"
              subtitle="Explore selected work and the technologies behind it"
            />

            <div className="flex flex-wrap justify-center gap-2 mb-10">

              {[
                'All',
                'Full Stack'
              ].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() =>
                      setProjectFilter(
                        filter
                      )
                    }
                    aria-pressed={
                      projectFilter ===
                      filter
                    }
                    className={`px-5 py-2.5 rounded-full text-sm border transition ${
                      projectFilter ===
                      filter
                        ? 'bg-purple-500/15 border-purple-400/50 text-purple-300'
                        : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            {filteredProjects.length ===
            0 ? (
              <div className="text-center py-16 border border-dashed border-white/10 rounded-3xl text-gray-500">
                No projects match this
                filter yet.
              </div>
            ) : (
              <motion.div
                layout
                className="grid md:grid-cols-2 gap-7"
              >

                {filteredProjects.map(
                  (project) => (
                    <TiltCard
                      key={project.id}
                      reduceMotion={
                        reduceMotion
                      }
                    >
                      <article className="group bg-[#1a1a24] rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all shadow-xl shadow-black/10">

                        <button
                          onClick={() =>
                            setSelectedProject(
                              project
                            )
                          }
                          className="relative overflow-hidden w-full text-left"
                          aria-label={`Open case study for ${project.title}`}
                        >

                          <motion.img
                            src={
                              project.image
                            }
                            alt={`${project.title} preview`}
                            loading="lazy"
                            decoding="async"
                            whileHover={
                              reduceMotion
                                ? {}
                                : {
                                    scale: 1.04
                                  }
                            }
                            transition={{
                              duration: 0.6
                            }}
                            className="w-full aspect-video object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-xs">
                            {project.category}
                          </span>
                        </button>

                        <div className="p-7">

                          <div className="flex items-start justify-between gap-4">

                            <h3 className="text-2xl font-semibold">
                              {project.title}
                            </h3>

                            <button
                              onClick={() =>
                                setSelectedProject(
                                  project
                                )
                              }
                              className="text-gray-500 hover:text-purple-300 transition"
                              aria-label={`View ${project.title} details`}
                            >
                              <FaSearch />
                            </button>
                          </div>

                          <p className="text-gray-400 mt-3 leading-relaxed">
                            {project.short}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-5">

                            {project.technologies.map(
                              (tech) => (
                                <motion.span
                                  key={tech}
                                  whileHover={
                                    reduceMotion
                                      ? {}
                                      : {
                                          y: -2
                                        }
                                  }
                                  className="text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-gray-300"
                                >
                                  {tech}
                                </motion.span>
                              )
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-3 mt-7">

                            <button
                              onClick={() =>
                                setSelectedProject(
                                  project
                                )
                              }
                              className="border border-white/10 hover:border-purple-400/40 py-3 rounded-xl font-medium transition"
                            >
                              Case Study
                            </button>

                            <a
                              href={
                                project.liveUrl
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-purple-600 to-cyan-500 py-3 rounded-xl font-semibold text-center hover:brightness-110 transition"
                            >
                              Live Project →
                            </a>
                          </div>
                        </div>
                      </article>
                    </TiltCard>
                  )
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* What I Do                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="px-5 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="07"
              title="What I Do"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {[
                {
                  icon: <FaReact />,
                  title: 'Frontend',
                  desc: 'Building responsive React applications with clean and intuitive interfaces.'
                },
                {
                  icon: <FaLaravel />,
                  title: 'Backend',
                  desc: 'Developing Laravel APIs and reliable business workflows.'
                },
                {
                  icon: <FaDatabase />,
                  title: 'Database',
                  desc: 'Working with MySQL architecture, relationships and optimization.'
                },
                {
                  icon: <FaServer />,
                  title: 'Deployment',
                  desc: 'Supporting application hosting, maintenance and delivery.'
                }
              ].map(
                (item) => (
                  <TiltCard
                    key={item.title}
                    reduceMotion={
                      reduceMotion
                    }
                  >
                    <div className="group bg-[#111827] p-7 rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all h-full">

                      <motion.div
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                scale: 1.12,
                                rotate: 5
                              }
                        }
                        className="text-3xl text-purple-400 group-hover:text-cyan-400 transition-colors"
                      >
                        {item.icon}
                      </motion.div>

                      <h3 className="text-xl font-semibold mt-5">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                )
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Development Process                                                */}
        {/* ------------------------------------------------------------------ */}

        <section className="px-5 md:px-12 py-24 bg-[#0f172a] border-t border-white/5">

          <div className="max-w-6xl mx-auto">

            <SectionHeading
              chapter="08"
              title="How I Work"
              subtitle="A practical development approach focused on building reliable solutions."
            />

            <div className="grid md:grid-cols-4 gap-5">

              {[
                [
                  '01',
                  'Understand',
                  'Understand the requirement, users and business workflow.'
                ],
                [
                  '02',
                  'Plan',
                  'Break the requirement into practical technical tasks.'
                ],
                [
                  '03',
                  'Build',
                  'Develop responsive interfaces, APIs and database workflows.'
                ],
                [
                  '04',
                  'Improve',
                  'Test, debug, refine and maintain the application.'
                ]
              ].map(
                ([number, title, desc]) => (
                  <motion.div
                    key={number}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -6
                          }
                    }
                    transition={{
                      duration: 0.5
                    }}
                    className="bg-[#1a1a24] border border-white/10 rounded-3xl p-7 hover:border-purple-400/30 transition-all"
                  >
                    <span className="text-purple-400 text-sm font-semibold">
                      {number}
                    </span>

                    <h3 className="text-xl font-semibold mt-4">
                      {title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mt-3">
                      {desc}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact                                                            */}
        {/* ------------------------------------------------------------------ */}

        <ContactSection
          reduceMotion={
            reduceMotion
          }
          onCopyEmail={
            copyEmail
          }
          pushToast={
            pushToast
          }
        />
      </main>

      {/* -------------------------------------------------------------------- */}
      {/* Footer                                                               */}
      {/* -------------------------------------------------------------------- */}

      <footer className="border-t border-white/10 py-10 px-5">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <div className="font-semibold">
              Gayashi Hasinika
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/gayashihasinika"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © 2026 Gayashi Hasinika. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* -------------------------------------------------------------------- */}
      {/* Back To Top                                                          */}
      {/* -------------------------------------------------------------------- */}

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.8
            }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-purple-600/90 backdrop-blur border border-purple-300/20 flex items-center justify-center shadow-xl shadow-purple-500/20 hover:bg-purple-500 transition"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------------- */}
      {/* Command Palette                                                      */}
      {/* -------------------------------------------------------------------- */}

      <CommandPalette
        open={paletteOpen}
        onClose={() =>
          setPaletteOpen(false)
        }
        onNavigate={
          scrollToSection
        }
        onOpenProject={
          setSelectedProject
        }
      />

      {/* -------------------------------------------------------------------- */}
      {/* Project Modal                                                        */}
      {/* -------------------------------------------------------------------- */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setSelectedProject(
                  null
                );
              }
            }}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} case study`}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.97
              }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#12121a] border border-white/10 rounded-3xl shadow-2xl"
            >

              <div className="relative">

                <img
                  src={
                    selectedProject.image
                  }
                  alt={`${selectedProject.title} preview`}
                  className="w-full aspect-video object-cover"
                />

                {filteredProjects.length >
                  1 && (
                  <>
                    <button
                      onClick={() =>
                        goToProject(-1)
                      }
                      aria-label="Previous project"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-black transition"
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      onClick={() =>
                        goToProject(1)
                      }
                      aria-label="Next project"
                      className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-black transition"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}

                <button
                  onClick={() =>
                    setSelectedProject(
                      null
                    )
                  }
                  aria-label="Close project details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-black transition"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6 md:p-9">

                <div className="flex items-center justify-between gap-4">

                  <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
                    {selectedProject.category}
                  </span>

                  {filteredProjects.length >
                    1 && (
                    <span className="text-xs text-gray-500">
                      {projectIndex +
                        1}{' '}
                      of{' '}
                      {
                        filteredProjects.length
                      }
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {
                    selectedProject.title
                  }
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {
                    selectedProject.description
                  }
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                  <div>
                    <h4 className="font-semibold mb-3">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Highlights
                    </h4>

                    <ul className="space-y-2 text-sm text-gray-400">

                      {selectedProject.highlights.map(
                        (item) => (
                          <li
                            key={item}
                            className="flex gap-2"
                          >
                            <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />

                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <a
                  href={
                    selectedProject.liveUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition"
                >
                  Open Live Project
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastStack
        toasts={toasts}
        onDismiss={
          dismissToast
        }
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Contact Section                               */
/* -------------------------------------------------------------------------- */

function ContactSection({
  reduceMotion,
  onCopyEmail,
  pushToast
}) {
  const [
    formData,
    setFormData
  ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [
    status,
    setStatus
  ] = useState('idle');

  const [copied, setCopied] =
    useState(false);

  const handleChange = (
    event
  ) => {
    const {
      name,
      value
    } = event.target;

    setFormData(
      (data) => ({
        ...data,
        [name]: value
      })
    );
  };

  const handleCopy =
    async () => {
      await onCopyEmail();

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1800
      );
    };

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      setStatus('sending');

      try {
        const response =
          await fetch(
            `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
            {
              method: 'POST',
              headers: {
                'Content-Type':
                  'application/json',
                Accept:
                  'application/json'
              },
              body: JSON.stringify({
                name: formData.name,
                email:
                  formData.email,
                message:
                  formData.message,
                _subject:
                  'New Portfolio Message!'
              })
            }
          );

        if (!response.ok) {
          throw new Error(
            'Request failed'
          );
        }

        setStatus('success');

        pushToast(
          'Message sent — thanks for reaching out!',
          'success'
        );

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch {
        setStatus('error');

        pushToast(
          'Something went wrong. Please try again or email directly.',
          'error'
        );
      }
    };

  return (
    <section
      id="contact"
      className="px-5 md:px-12 py-24 md:py-28 bg-[#0f172a] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:col-span-2"
          >

            <span className="text-purple-400 text-sm tracking-[3px] font-medium">
              09 • CONTACT
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Let's Build Something Amazing
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Have an idea, project or
              opportunity? Send a message
              and let's talk about how I can
              help.
            </p>

            <div className="mt-8 space-y-3">

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 transition text-left"
              >
                <span className="flex items-center gap-3">

                  <FaEnvelope className="text-purple-400" />

                  <span className="text-sm text-gray-300 break-all">
                    {CONTACT_EMAIL}
                  </span>
                </span>

                {copied ? (
                  <span className="text-xs text-cyan-300">
                    Copied!
                  </span>
                ) : (
                  <FaRegCopy className="text-gray-500" />
                )}
              </button>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400" />
                Sri Lanka
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:col-span-3 bg-[#1a1a24] border border-white/10 rounded-3xl p-6 md:p-8"
          >

            {status ===
            'success' ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-3xl text-emerald-300 mb-5">
                  <FaCheckCircle />
                </div>

                <h3 className="text-xl font-semibold">
                  Message sent
                </h3>

                <p className="text-gray-400 mt-2 max-w-sm">
                  Thanks for reaching out
                  — I'll get back to you
                  as soon as I can.
                </p>

                <button
                  onClick={() =>
                    setStatus(
                      'idle'
                    )
                  }
                  className="mt-6 text-sm text-purple-300 hover:text-purple-200 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={
                  handleSubmit
                }
                className="space-y-5"
                noValidate
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      Name
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Your Name"
                      required
                      minLength={2}
                      className="mt-2 w-full bg-black/20 border border-white/10 focus:border-purple-400 rounded-xl px-5 py-4 outline-none transition placeholder:text-gray-600"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="you@example.com"
                      required
                      className="mt-2 w-full bg-black/20 border border-white/10 focus:border-purple-400 rounded-xl px-5 py-4 outline-none transition placeholder:text-gray-600"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-gray-500">
                    Message
                  </span>

                  <textarea
                    name="message"
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    minLength={10}
                    className="mt-2 w-full bg-black/20 border border-white/10 focus:border-purple-400 rounded-2xl px-5 py-4 outline-none transition resize-y placeholder:text-gray-600"
                  />
                </label>

                {status ===
                  'error' && (
                  <p
                    className="text-sm text-red-300 flex items-center gap-2"
                    role="alert"
                  >
                    <FaExclamationCircle />
                    Couldn't send your
                    message. Please try
                    again.
                  </p>
                )}

                <MagneticButton
                  type="submit"
                  reduceMotion={
                    reduceMotion
                  }
                  disabled={
                    status ===
                    'sending'
                  }
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 text-base font-semibold rounded-xl hover:brightness-110 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {status ===
                  'sending' ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message →
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
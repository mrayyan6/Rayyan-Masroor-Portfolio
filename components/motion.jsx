"use client";

import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.25, 0.1, 0.25, 1];

export const makeItemVariants = (reduce) => ({
  hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
});

export function Stagger({
  children,
  className = "",
  as = "div",
  id,
  amount = 0.15,
  stagger = 0.08,
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      id={id}
      className={`reveal ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

export function Item({ children, className = "", as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={`reveal-child ${className}`} variants={makeItemVariants(reduce)} {...rest}>
      {children}
    </Tag>
  );
}

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  amount = 0.2,
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={`reveal ${className}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

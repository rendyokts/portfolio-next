"use client";
import { useState, useEffect } from "react";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion'
import useHasMounted from '../hooks/useHasMounted'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
  <motion.button
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, delay: 0.5 }}
  className={`p-2 rounded-xl active:scale-100 duration-200 bg-neutral-50 dark:bg-neutral-800`}
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  aria-label='toggletheme'
  >
  {theme === "light" ? <BsCloudMoon size={18} /> : <BsCloudSun size={18} />}
  </motion.button>

  );
}
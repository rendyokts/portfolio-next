"use client";
import { useState, useEffect } from "react";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function ThemeSwitcher() {
const [mounted, setMounted] = useState(false);
const { theme, setTheme } = useTheme();
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) {
return null;
}
return (
<button
className={`p-2 rounded-xl active:scale-100 duration-200 bg-neutral-50 dark:bg-neutral-800`}
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
aria-label='toggletheme'
>
{theme === "light" ? <BsCloudMoon size={18} /> : <BsCloudSun size={18} />}
</button>
);
}
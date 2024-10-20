"use client";

import { motion, Variants } from "framer-motion";

export function WordFadeIn({
    words,
    delay = 0.15,
    variants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * delay },
        }),
    },
    className,
}) {
    const _words = words.split(" ");
    return (
        <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            className={`font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] ${className}`}
        >
            {_words.map((word, i) => (
                <motion.span  key={word} variants={variants} custom={i} initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        delay: i * 0.08,
                        duration: 0.4,
                    }}>
                    {word}{" "}
                </motion.span>
            ))}
        </motion.h1>
    );

}

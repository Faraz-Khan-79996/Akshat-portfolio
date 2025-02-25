"use client";
import { motion } from "framer-motion";
import { technologies } from "./technologiesArray";
import Stats from "../components/Stats";
import Image from "next/image";

export default function ToolsAndTechnologies() {
    return (
        <div className="py-10 mb-60">
            {/* <Stats /> */}
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.h1
                    className="text-3xl font-bold text-center mb-8 text-gray-200"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Tools and Softwares
                </motion.h1>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 0.9,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                staggerChildren: 0.03,
                            },
                        },
                    }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center justify-center shadow-lg rounded-lg p-4 hover:shadow-purple-500/50 hover:shadow-xl transition-shadow duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                className="w-20 h-20 mb-2"
                                height={30}
                                width={30}
                            />
                            <p className="text-[13px] text-center leading-4 lg:text-sm font-medium text-gray-200 ">{tech.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

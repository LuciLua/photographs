'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Galery() {

    const numerosImagens = [];
    for (let i = 1; i <= 43; i++) numerosImagens.push(i)

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);

    return (
        <div className="bg-neutral-800">
            <div ref={targetRef} className="relative h-[355vh] bg-neutral-900">
                <h1 className="text-white text-[50px] top-0 absolute">GALL_RY</h1>
                <div className="sticky flex p-5 flex-col top-[0px] justify-center h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4  z-50 relative" >
                        {numerosImagens.map(i => {
                            return (
                                <motion.div key={i} dragTransition={{ max: 100, min: 100, bounceStiffness: .1, bounceDamping: 3 }} className="z-[100] relative cursor-grab overflow-hidden object-cover  w-[300px] min-w-[300px] h-[250px]" dragSnapToOrigin draggable drag>
                                    <Image fill src={`/photos/${i}.webp`} alt="img" className="pointer-events-none object-cover" />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
                <motion.img style={{ y: y }} src={"/photos/mao.png"} className="object-cover blur-[10px] w-[1200px] z-[1] pointer-events-none relative" />
            </div >
        </div>
    )
}
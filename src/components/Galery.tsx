'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export function Galery() {

    const numerosImagens = [];
    for (let i = 1; i <= 43; i++) numerosImagens.push(i)

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <div className="bg-neutral-800">
            <div ref={targetRef} className="relative h-[300vh] bg-neutral-900">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4  z-50 relative" >
                        {numerosImagens.map(i => {
                            return (<motion.img src={`/photos/${i}.jpg`} dragTransition={{max: 100, min: 100, bounceStiffness: .1, bounceDamping: 3 }} dragSnapToOrigin draggable drag className=" z-[100] relative cursor-grab overflow-hidden w-[300px] min-w-[300px] h-[250px] object-cover" />)
                        })}
                    </motion.div>
                </div>
            </div >
        </div>
    )
}
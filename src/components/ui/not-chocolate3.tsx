import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";

type SpringModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const NotChocolate3: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="px-4 grid place-content-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white text-4xl text-pink-600 font-bold px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
                ?????????
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-red-600 to-red-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-center mb-2">
                                Is this it??
                            </h3>
                            <Image
                                src="https://i.pinimg.com/736x/b7/e2/ae/b7e2ae645021b02b665c325720dc6126.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                                className=""
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white transition-colors text-red-600 font-semibold w-full py-2 rounded"
                                >
                                    What the fuck? Close!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NotChocolate3;

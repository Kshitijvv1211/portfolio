import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FaGraduationCap } from "react-icons/fa6";

const educationData = [
  {
    degree: "B.Tech in \nMechanical Engineering",
    institution: "IIT Patna",
    year: "2023 - Current",
    description: "Currently in Second Year of my degree and handling a lot of stuff like AI, ML, and Web Development. And also some dangerous Professors.",
    color: "from-blue-500/40 to-purple-500/30 border-blue-400/60",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Delhi Public School",
    year: "2021 - 2023",
    description: "PCM with Computer Science. Scored 94%. Coding club president and robotics team lead.",
    color: "from-green-400/40 to-cyan-400/30 border-green-300/60",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full py-20 flex flex-col items-center mb-[45vh]">
      <div className="relative mb-12 flex items-center justify-center w-full">
        {/* Animated glowing background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[320px] h-[80px] blur-2xl opacity-70 animate-pulse"
          style={{
            background: "radial-gradient(circle at 30% 40%, #60a5fa 60%, transparent 80%), radial-gradient(circle at 70% 60%, #a78bfa 50%, transparent 80%), radial-gradient(circle at 50% 80%, #34d399 40%, transparent 80%)"
          }}
        />
        <h2 className="relative z-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] animate-fade-in-up">
          Education
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-4">
        {educationData.map((edu, idx) => (
          <Card
            key={idx}
            className={`relative overflow-hidden border-2 ${edu.color} bg-gradient-to-br backdrop-blur-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl group min-w-[340px] max-w-[480px] mx-auto`}
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 40px 0 rgba(80,80,180,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              borderRadius: "1.5rem",
            }}
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 z-0 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-2xl" />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-tr ${edu.color}`} />
            {/* Decorative badge */}
            <div className="absolute top-6 right-6 z-10 bg-white/80 dark:bg-zinc-900/80 rounded-full p-3 shadow-lg border-2 border-white/60 group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-2xl text-blue-500 drop-shadow-md" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl md:text-3xl text-white drop-shadow-lg flex items-center gap-2">
                {edu.degree}
              </CardTitle>
              <CardDescription className="text-lg text-zinc-200/90 font-semibold">
                {edu.institution}
              </CardDescription>
              <span className="text-xs text-zinc-300 mt-2 font-mono tracking-widest">
                {edu.year}
              </span>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-zinc-100 text-base leading-relaxed font-medium">
                {edu.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 
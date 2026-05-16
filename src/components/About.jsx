import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Profile" 
                className="w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">Kage Kota</p>
                  <h3 className="text-white text-2xl font-bold">鹿毛 洸太</h3>
                </div>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/5 rounded-full z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full z-0" />
          </motion.div>

          {/* Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="mb-8">
              <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-3">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                相手の立場に立った、<br />分かりやすい提案が強みです。
              </h2>
            </div>
            
            <div className="space-y-6 text-text/80 text-lg leading-relaxed">
              <p>
                高校卒業後、会社員として10年間勤務。組織の中で培った「丁寧で分かりやすい提案」と「相手の立場に立ったコミュニケーション」が私の強みです。
              </p>
              <p>
                単にコードを書くだけではなく、クライアント様が抱える課題や理想を深く理解し、心から納得できるHP・LP制作を誠心誠意サポートさせていただきます。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-background pt-10">
              <div>
                <p className="text-text/40 text-sm font-medium mb-1">Career</p>
                <p className="text-primary font-bold">10 Years Experience</p>
              </div>
              <div>
                <p className="text-text/40 text-sm font-medium mb-1">Role</p>
                <p className="text-primary font-bold">Web Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

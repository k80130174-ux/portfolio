import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Settings, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "HTML / CSS",
      icon: <Layout className="w-8 h-8 text-secondary" />,
      description: "セマンティックなコーディングにより、SEOを意識した構造化とアクセシビリティを実現します。",
      tags: ["Semantic UI", "Tailwind CSS", "Sass"]
    },
    {
      title: "JavaScript",
      icon: <Code2 className="w-8 h-8 text-secondary" />,
      description: "Reactなどのモダンなライブラリを用い、動きのあるリッチなUXを提供します。",
      tags: ["React", "TypeScript", "ES6+"]
    },
    {
      title: "Responsive",
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      description: "PC、タブレット、スマホ。あらゆるデバイスで美しく使いやすいUIを設計します。",
      tags: ["Mobile First", "Grid/Flexbox"]
    },
    {
      title: "Clean Code",
      icon: <Settings className="w-8 h-8 text-secondary" />,
      description: "保守しやすく、他者が読んでも理解しやすい整理されたコード設計を心がけています。",
      tags: ["Clean Code", "Git", "Modular"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-3">Technical Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">価値を高める確かな技術</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-white/50"
            >
              <div className="mb-6 p-4 bg-secondary/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{skill.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed mb-6">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-background text-text/50 text-[10px] font-bold rounded uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight points */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, text: "セマンティックなコーディング" },
            { icon: <ShieldCheck className="w-5 h-5" />, text: "レスポンシブ対応（スマホ最適化）" },
            { icon: <ShieldCheck className="w-5 h-5" />, text: "保守しやすいコード設計" }
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white">
              <span className="text-accent">{point.icon}</span>
              <span className="text-sm font-bold text-primary/80">{point.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

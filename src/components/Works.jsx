import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const projects = [
    {
      title: "SaaS-TECH",
      category: "コーポレートサイト",
      image: "/assets/it_top.png",
      description: "最先端の技術を駆使したSaaSプロダクト開発企業のコーポレートサイト。Canvasを用いた動的なヒーローセクションを実装。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/it/index.html"
    },
    {
      title: "Trattoria SOLE",
      category: "レストランサイト",
      image: "/assets/italian_top.png",
      description: "洗練された温かみのあるイタリアンレストランのウェブサイト。メニュー紹介や予約導線を最適化。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/Italian/index.html"
    },
    {
      title: "URBAN CLOSET",
      category: "ブランドサイト",
      image: "/assets/apparel_top.png",
      description: "都会的でミニマルなユニセックスアパレルブランドのECサイト。世界観を伝えるルックブックと洗練されたUI。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/apparel/index.html"
    },
    {
      title: "Cafe Blossom",
      category: "カフェサイト",
      image: "/assets/cafe_top.png",
      description: "心地よい時間を提供する街のカフェの公式サイト。温かみのあるデザインとメニュー、アクセス情報を掲載。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/cafe/index.html"
    },
    {
      title: "Hair Salon RICHE",
      category: "ヘアサロンサイト",
      image: "/assets/hair_salon_top.png",
      description: "表参道にある高級ヘアサロンのブランドサイト。ホテルライクな上質さと落ち着きを表現したデザイン。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/hair-salon/index.html"
    },
    {
      title: "古民家フォトスタジオ",
      category: "フォトスタジオサイト",
      image: "/assets/studio_top.png",
      description: "高知の豊かな自然に囲まれた古民家フォトスタジオのサイト。家族の温もりが伝わる優しく繊細なデザイン。",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/studiophoto/index.html"
    }
  ];

  return (
    <section id="works" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-3">Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">想いを形にした制作実績</h2>
          </div>
          <p className="max-w-md text-text/60 text-sm">
            クライアント様のニーズに合わせた、多種多様なWebサイト・アプリケーションの制作実績の一部です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={project.link} className="group block h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-background">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-6 py-3 bg-white text-primary text-sm font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      サイトを見る
                    </span>
                  </div>
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-text/60 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] font-medium text-secondary bg-secondary/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Clock, Zap, Users } from 'lucide-react';

const WhyMe = () => {
  const strengths = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "丁寧なヒアリング",
      desc: "専門用語を使わず、お客様の言葉で課題や理想を伺います。制作の不安を一つずつ解消します。"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "迅速なレスポンス",
      desc: "進捗報告やご質問への回答は、原則24時間以内に。スムーズなプロジェクト進行をお約束します。"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "柔軟な修正対応",
      desc: "納得感のある仕上がりのため、修正には柔軟に対応。共に理想の形を作り上げます。"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "初心者でも安心",
      desc: "Webの知識がない方でも大丈夫。ドメイン取得から公開まで、並走者としてサポートします。"
    }
  ];

  return (
    <section id="whyme" className="section-spacing bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase block mb-3">Why Me?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              スムーズで確実な<br />コミュニケーション
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              10年のキャリアで培った対人スキルにより、単なる制作作業者ではなく、お客様のビジネスを深く理解する「パートナー」として貢献します。
            </p>
            
            <div className="space-y-6">
              {["10年の社会人経験に基づくプロ意識", "専門用語を避けた分かりやすい説明", "制作後も安心の伴走型サポート"].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Github, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-3">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">制作のご依頼・ご相談</h2>
          <p className="text-text/60 max-w-xl mx-auto">
            お見積もりのご相談や、制作に関するご質問など、お気軽にお問い合わせください。
            通常24時間以内に返信させていただきます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-secondary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-text/40 uppercase tracking-widest mb-1">Email</p>
                <p className="text-primary font-bold">kota.kage@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-secondary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-text/40 uppercase tracking-widest mb-1">Location</p>
                <p className="text-primary font-bold">Japan, Tokyo</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs font-bold text-text/40 uppercase tracking-widest mb-6">Social Links</p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-text/60 hover:text-secondary hover:shadow-lg transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-white"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 ml-1">お名前</label>
                  <input 
                    type="text" 
                    placeholder="鹿毛 洸太"
                    className="w-full px-5 py-4 bg-background border border-transparent rounded-xl focus:bg-white focus:border-secondary/20 focus:ring-4 focus:ring-secondary/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 ml-1">メールアドレス</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com"
                    className="w-full px-5 py-4 bg-background border border-transparent rounded-xl focus:bg-white focus:border-secondary/20 focus:ring-4 focus:ring-secondary/5 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/80 ml-1">相談内容</label>
                <textarea 
                  rows={5}
                  placeholder="プロジェクトの詳細や、解決したい課題をご記入ください。"
                  className="w-full px-5 py-4 bg-background border border-transparent rounded-xl focus:bg-white focus:border-secondary/20 focus:ring-4 focus:ring-secondary/5 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2 group"
              >
                無料で相談する
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Matriz UI/UX — Omnis Library
// Production-ready single-file React component (Tailwind CSS + Framer Motion)
// Purpose: highly professional, cinematic landing page ("A Matriz")
// Notes: Replace media placeholders in /public (videos, SVGs). Fonts: Inter (body) + Cinzel/Playfair (headings) recommended.

export default function MatrizUI() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-200 leading-relaxed font-sans">

      {/* Background cinematic video + subtle gradient */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/mafia-city-noir.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      </div>

      <header className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[url('/images/omnis-mark.svg')] bg-contain bg-center bg-no-repeat" aria-hidden="true" />
          <div>
            <div className="text-sm text-gray-300 tracking-widest">OMNIS</div>
            <div className="text-xs text-gray-500">Ordo Sapientiae</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-sm text-gray-300">
          <a href="#about" className="hover:text-[#c9a46c] transition">O que somos</a>
          <a href="#mission" className="hover:text-[#c9a46c] transition">Missão</a>
          <a href="#order" className="hover:text-[#c9a46c] transition">A Ordem</a>
          <a href="#library" className="hover:text-[#c9a46c] transition">Biblioteca</a>
          <a href="#contact" className="hover:text-[#c9a46c] transition">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-5 py-2 rounded-xl border border-[#c9a46c]/30 text-[#c9a46c] hover:bg-[#c9a46c]/10 transition">Portal</button>
          <button className="inline-block px-4 py-2 rounded-lg bg-[#c9a46c] text-black font-semibold hover:bg-[#e1b97d] transition">Entrar</button>
        </div>
      </header>

      {/* HERO */}
      <main className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.section initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              OMNIS <span className="text-[#c9a46c]">LIBRARY</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl text-lg">
              A Matriz — sede pública da Ordem. Uma instância onde o silêncio da biblioteca encontra a disciplina de uma ordem. Somos a resistência do pensamento.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#portal" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#c9a46c] text-black font-semibold shadow-md hover:bg-[#e1b97d] transition">Acessar Portal</a>
              <a href="#mission" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[#c9a46c]/20 text-[#c9a46c] hover:bg-[#c9a46c]/6 transition">Nosso Manifesto</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm text-sm text-gray-400">
              <div>
                <div className="text-xs text-gray-300">Local</div>
                <div>Virtual • Global</div>
              </div>
              <div>
                <div className="text-xs text-gray-300">Status</div>
                <div>Operacional • Em Expansão</div>
              </div>
            </div>
          </motion.section>

          {/* Right: cinematic card with seal and CTA */}
          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative">
            <div className="rounded-3xl overflow-hidden border border-[#c9a46c]/15 bg-black/40 backdrop-blur-md shadow-2xl">
              <div className="p-6 md:p-8 flex flex-col items-start gap-6">
                <div className="flex items-center gap-4 w-full justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-[url('/images/seal.svg')] bg-contain bg-center border border-[#c9a46c]/20" />
                    <div>
                      <div className="text-sm font-semibold">A Matriz</div>
                      <div className="text-xs text-gray-400">Sede pública • Face da Ordem</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Atualizado • 2025</div>
                </div>

                <div className="text-sm text-gray-300">Visite o portal secreto para membros. Conteúdo exclusivo, eventos e missões de campo — tudo com moderação e propósito.</div>

                <div className="mt-2 w-full grid grid-cols-2 gap-3">
                  <a href="#library" className="px-4 py-3 rounded-lg border border-[#c9a46c]/12 text-[#c9a46c] text-sm text-center">Biblioteca</a>
                  <a href="#debate" className="px-4 py-3 rounded-lg border border-[#c9a46c]/12 text-[#c9a46c] text-sm text-center">Salas de Debate</a>
                </div>

                <div className="mt-4 w-full text-xs text-gray-400">Esta é a face pública. O núcleo interno só é acessado por convite.</div>
              </div>
            </div>

            {/* subtle ornament */}
            <div className="absolute -bottom-10 right-6 opacity-30 w-48 h-48 bg-[url('/images/ornament.svg')] bg-contain bg-center pointer-events-none" aria-hidden="true" />
          </motion.aside>
        </div>

        {/* Sections: About / Mission / Order / Library */}
        <section id="about" className="mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>O QUE SOMOS</h2>
            <p className="mt-4 text-gray-300">Somos uma ordem intelectual dedicada à preservação do saber, ao debate com rigor e à ação estratégica do pensamento. Nossos métodos são disciplina, sigilo e excelência.</p>
          </motion.div>
        </section>

        <section id="mission" className="mt-16 py-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Preservar o Conhecimento', body: 'Catalogar, proteger e contextualizar obras e documentos.' },
              { title: 'Elevar o Debate', body: 'Treinar pensamento crítico e argumentação pública.' },
              { title: 'Reformular a Realidade', body: 'Projetos culturais que transformam espaços urbanos.' },
            ].map((item, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-black/30 border border-[#c9a46c]/12">
                <h3 className="font-semibold text-lg text-[#c9a46c]">{item.title}</h3>
                <p className="mt-3 text-gray-300">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="order" className="mt-16 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Cinzel, serif' }}>A ORDEM</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[['Alta Mesa','Guardiões da Ordem'],['Arquivistas','Curadores do Saber'],['Analistas','Operadores de Campo']].map((r, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-black/25 border border-[#c9a46c]/10">
                  <div className="text-sm text-gray-300 font-semibold">{r[0]}</div>
                  <div className="mt-2 text-gray-400 text-sm">{r[1]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="library" className="mt-16 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center">A BIBLIOTECA</h2>
            <p className="text-center text-gray-400 mt-2">Navegue por nossos repositórios — humanidades, ciências exatas e literatura.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { k: 'Humanas', d: 'Filosofia, História, Sociologia, Artes.' },
                { k: 'Exatas', d: 'Matemática, Física, Computação, Química.' },
                { k: 'Literatura', d: 'Romance, Poesia, Conto, Ensaios.' },
              ].map((g, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-black/30 border border-[#c9a46c]/10">
                  <div className="text-lg font-semibold">{g.k}</div>
                  <p className="mt-2 text-gray-400 text-sm">{g.d}</p>
                  <div className="mt-4 flex gap-2">
                    <a className="px-3 py-2 rounded-lg border border-[#c9a46c]/12 text-xs text-[#c9a46c]">Explorar</a>
                    <a className="px-3 py-2 rounded-lg border border-[#c9a46c]/12 text-xs text-[#c9a46c]">Curadoria</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="debate" className="mt-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Salas de Debate</h2>
            <p className="mt-3 text-gray-400">Futuros espaços privados para duelos intelectuais, painéis e conferências internas.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {['Painel Público','Duelistas','Sala da Alta Mesa'].map((s,i)=> (
                <div key={i} className="p-4 rounded-lg bg-black/25 border border-[#c9a46c]/10">{s}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="portal" className="mt-16 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Portal Secreto (Teaser)</h2>
            <p className="mt-3 text-gray-400">Entrada cerimonial com autenticação simbólica — em desenvolvimento.</p>
            <div className="mt-6 flex gap-4 justify-center">
              <a className="px-6 py-3 rounded-xl bg-[#c9a46c] text-black font-semibold">Pré-registrar</a>
              <a className="px-6 py-3 rounded-xl border border-[#c9a46c]/20 text-[#c9a46c]">Saiba Mais</a>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold">Contato</h3>
              <p className="mt-2 text-gray-400">Para parcerias e imprensa — comunique-se via formulário seguro.</p>
            </div>
            <form className="p-6 rounded-2xl bg-black/25 border border-[#c9a46c]/10">
              <input placeholder="Nome" className="w-full p-3 rounded bg-black/30 border border-gray-700 mb-3" />
              <input placeholder="Email" className="w-full p-3 rounded bg-black/30 border border-gray-700 mb-3" />
              <textarea placeholder="Mensagem" className="w-full p-3 rounded bg-black/30 border border-gray-700 mb-3" rows={4} />
              <div className="flex justify-end">
                <button type="submit" className="px-5 py-3 rounded-lg bg-[#c9a46c] text-black font-semibold">Enviar</button>
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="relative z-20 py-12 border-t border-white/5 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 md:px-10">© {new Date().getFullYear()} Omnis Library — A Matriz • Sede Pública</div>
      </footer>

      {/* small accessibility helpers */}
      <style>{`
        :root { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        h1,h2,h3 { font-family: 'Cinzel', serif; }
      `}</style>
    </div>
  );
}

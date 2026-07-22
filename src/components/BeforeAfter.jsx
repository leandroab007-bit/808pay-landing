import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

export default function BeforeAfter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ position: 'relative', backgroundColor: '#09090B', overflow: 'hidden' }}
    >
      <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

      {/* Header label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', padding: '48px 24px 24px' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '6px 20px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#52525B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Antes e Depois</span>
        </div>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: '#FAFAFA', margin: '16px 0 4px', letterSpacing: '-0.03em' }}>
          A mesma pastelaria. Uma estrutura diferente.
        </h2>
        <p style={{ fontSize: '15px', color: '#71717A', margin: 0 }}>
          O impacto que a organização faz no dia a dia da operação.
        </p>
      </motion.div>

      {/* Images side by side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
          margin: '24px 24px 0',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          gap: '0',
          borderRadius: '20px',
          overflow: 'hidden',
          minHeight: '440px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        className="ba-grid"
      >
        {/* ANTES */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <img
            src="/images/antes.jpg"
            alt="Operação sem organização — antes do 808Pay"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.48) saturate(0.85)' }}
          />
          {/* Cinematic vignette: dark on right edge + top/bottom */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 110% 50%, transparent 35%, rgba(9,9,11,0.75) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,9,11,0.45) 0%, transparent 25%, transparent 65%, rgba(9,9,11,0.7) 100%)' }} />
          {/* Red tint */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(239,68,68,0.07)' }} />

          {/* ANTES badge */}
          <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', backgroundColor: 'rgba(9,9,11,0.65)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '99px', padding: '6px 14px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              <X size={12} color="#F87171" strokeWidth={2.5} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#F87171', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Antes</span>
            </div>
          </div>

          {/* Bottom text */}
          <div style={{ position: 'absolute', bottom: '28px', left: '24px', right: '24px' }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#FAFAFA', margin: '0 0 4px', lineHeight: 1.3, textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
              Caos, fila e pedido perdido
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
              Sem estrutura, cada pedido é uma aposta
            </p>
          </div>
        </motion.div>

        {/* Center divider */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#09090B', zIndex: 10, transform: 'translateX(-50%)' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px', height: '36px',
            backgroundColor: '#09090B',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ArrowRight size={14} color="#52525B" />
          </div>
        </div>

        {/* DEPOIS */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <img
            src="/images/depois.jpg"
            alt="Operação organizada com 808Pay"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.55) saturate(1.05)' }}
          />
          {/* Cinematic vignette: dark on left edge + top/bottom */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at -10% 50%, transparent 35%, rgba(9,9,11,0.75) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,9,11,0.45) 0%, transparent 25%, transparent 65%, rgba(9,9,11,0.7) 100%)' }} />
          {/* Green tint */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(34,197,94,0.05)' }} />

          {/* DEPOIS badge */}
          <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', backgroundColor: 'rgba(9,9,11,0.65)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: '99px', padding: '6px 14px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              <Check size={12} color="#22C55E" strokeWidth={2.5} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#22C55E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Depois</span>
            </div>
          </div>

          {/* Bottom text */}
          <div style={{ position: 'absolute', bottom: '28px', left: '24px', right: '24px' }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#FAFAFA', margin: '0 0 4px', lineHeight: 1.3, textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
              Fluxo, controle e operação no ritmo
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
              Com a 808Pay organizando cada etapa
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ textAlign: 'center', padding: '24px 24px 56px' }}
      >
        <p style={{ fontSize: '13px', color: '#3F3F46', margin: 0 }}>
          Mesma estrutura física · Fluxo completamente diferente
        </p>
      </motion.div>

      <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

      <style>{`
        @media (max-width: 640px) {
          .ba-grid {
            grid-template-columns: 1fr !important;
            min-height: 600px !important;
          }
          .ba-grid > div:first-child { min-height: 300px; }
          .ba-grid > div:last-child { min-height: 300px; }
        }
      `}</style>
    </section>
  )
}

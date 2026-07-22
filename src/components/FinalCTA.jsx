import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      ref={ref}
      style={{
        padding: '120px 24px',
        backgroundColor: '#0D0D10',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            color: '#A1A1AA',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Próximo passo
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: '#FAFAFA',
            margin: '0 0 20px',
            lineHeight: 1.1,
          }}
        >
          Pare de administrar o caos.
          <br />
          <span style={{ color: '#22C55E' }}>Organize o crescimento.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{
            color: '#A1A1AA',
            fontSize: '16px',
            lineHeight: 1.6,
            margin: '0 0 40px',
          }}
        >
          Em 30 minutos mostramos como a 808Pay funciona na prática, dentro da realidade da sua
          operação. Sem apresentação genérica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
        >
          <a
            href="mailto:contato@808pay.com.br?subject=Quero%20agendar%20uma%20demonstração"
            style={{
              backgroundColor: '#22C55E',
              color: '#09090B',
              padding: '15px 36px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'opacity 0.2s, transform 0.2s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.88'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Agendar Demonstração Operacional
          </a>

          <p style={{ fontSize: '13px', color: '#52525B', margin: 0 }}>
            Sem compromisso · Resposta em até 24h
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
            rowGap: '16px',
          }}
        >
          {[
            { label: 'Implantação', value: '2–5 dias' },
            { label: 'Suporte', value: 'Canal direto' },
            { label: 'Funcionamento offline', value: 'Incluso' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FAFAFA',
                  marginBottom: '2px',
                }}
              >
                {item.value}
              </div>
              <div style={{ fontSize: '12px', color: '#52525B' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

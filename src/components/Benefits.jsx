import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HeartHandshake, Users, Zap, ChefHat, BarChart3 } from 'lucide-react'

const transformations = [
  {
    before: 'Equipe apagando incêndio o tempo todo',
    after: 'Equipe focada, com menos estresse e mais resultado',
    Icon: HeartHandshake,
    color: '#22C55E',
  },
  {
    before: 'Cliente decidindo no balcão, segurando a fila',
    after: 'Cliente decide com calma, fila flui naturalmente',
    Icon: Users,
    color: '#3B82F6',
  },
  {
    before: 'Caixa travado conferindo manualmente',
    after: 'Caixa gira rápido com confirmação automática',
    Icon: Zap,
    color: '#F59E0B',
  },
  {
    before: 'Cozinha recebendo pedidos fora de ordem',
    after: 'Cozinha recebe tudo sequenciado e com prioridade',
    Icon: ChefHat,
    color: '#8B5CF6',
  },
  {
    before: 'Você no escuro sobre o que está acontecendo',
    after: 'Você com visibilidade total da operação em tempo real',
    Icon: BarChart3,
    color: '#EC4899',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="beneficios"
      ref={ref}
      style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}
      >
        Transformação
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.05 }}
        style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#FAFAFA', margin: '0 auto 16px', maxWidth: '560px' }}
      >
        O que muda na prática
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '16px', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto 64px' }}
      >
        Não são funcionalidades. São as mudanças que você sente no dia a dia da operação.
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {transformations.map((item, i) => {
          const { Icon } = item
          return (
            <motion.div
              key={item.before}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: '48px 1fr 32px 1fr',
                gap: '16px',
                alignItems: 'center',
              }}
              className="benefit-row"
            >
              {/* Icon */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                backgroundColor: `${item.color}18`,
                border: `1px solid ${item.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={20} color={item.color} strokeWidth={1.8} />
              </div>

              {/* Before */}
              <p style={{ fontSize: '14px', color: '#3F3F46', lineHeight: 1.5, margin: 0, textDecoration: 'line-through', textDecorationColor: 'rgba(239,68,68,0.25)' }}>
                {item.before}
              </p>

              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* After */}
              <p style={{ fontSize: '14px', color: '#FAFAFA', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                {item.after}
              </p>
            </motion.div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 680px) {
          .benefit-row {
            grid-template-columns: 48px 1fr !important;
            grid-template-rows: auto auto;
          }
          .benefit-row > *:nth-child(3),
          .benefit-row > *:nth-child(4) {
            grid-column: 2;
          }
          .benefit-row > *:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  )
}

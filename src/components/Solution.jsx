import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    label: 'Cliente',
    title: 'Escolhe com calma',
    description: 'Cardápio visual no balcão ou na mesa. Sem pressa, sem pressão.',
    color: '#3B82F6',
    icon: '👤',
  },
  {
    number: '02',
    label: 'Pedido',
    title: 'Registrado em segundos',
    description: 'O pedido entra no sistema instantaneamente. Sem papel, sem ruído.',
    color: '#8B5CF6',
    icon: '📋',
  },
  {
    number: '03',
    label: 'Pagamento',
    title: 'Confirmado na hora',
    description: 'Pix, cartão ou dinheiro. Confirmação automática, sem conferência manual.',
    color: '#22C55E',
    icon: '💳',
  },
  {
    number: '04',
    label: 'Cozinha',
    title: 'Recebe tudo organizado',
    description: 'Cada item chega com prioridade e sequência. Sem grito, sem confusão.',
    color: '#F59E0B',
    icon: '🍳',
  },
  {
    number: '05',
    label: 'Gestão',
    title: 'Você vê tudo em tempo real',
    description: 'Vendas, tempo médio, itens mais pedidos. Controle de verdade.',
    color: '#EC4899',
    icon: '📊',
  },
]

export default function Solution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="solucao"
      ref={ref}
      style={{
        padding: '120px 24px',
        backgroundColor: '#0D0D10',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            color: '#A1A1AA',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          A solução
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#FAFAFA',
            margin: '0 auto 16px',
            maxWidth: '600px',
          }}
        >
          Um fluxo contínuo, do início ao fim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textAlign: 'center',
            color: '#A1A1AA',
            fontSize: '16px',
            lineHeight: 1.6,
            maxWidth: '480px',
            margin: '0 auto 72px',
          }}
        >
          Cinco etapas sincronizadas. Cada uma alimenta a próxima, sem intervalo e sem perda.
        </motion.p>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '36px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
              display: 'none',
            }}
            className="desktop-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              alignItems: 'start',
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                style={{
                  backgroundColor: '#18181B',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                {/* Step icon circle */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: `${step.color}18`,
                    border: `1px solid ${step.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 16px',
                  }}
                >
                  {step.icon}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: step.color,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {step.label}
                </div>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#FAFAFA',
                    margin: '0 0 8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#71717A', lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>

                {/* Step number badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '14px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.1)',
                    fontFamily: 'monospace',
                  }}
                >
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

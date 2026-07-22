import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, CreditCard, ChefHat, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '1',
    title: 'Pedido registrado',
    description: 'Cliente escolhe no cardápio digital. O pedido vai direto para o sistema.',
    color: '#3B82F6',
  },
  {
    icon: CreditCard,
    number: '2',
    title: 'Pagamento confirmado',
    description: 'Pix, cartão ou dinheiro. Confirmação instantânea sem intervenção manual.',
    color: '#22C55E',
  },
  {
    icon: ChefHat,
    number: '3',
    title: 'Cozinha notificada',
    description: 'Pedido chega organizado com tempo e prioridade. Zero papel, zero ruído.',
    color: '#F59E0B',
  },
  {
    icon: BarChart3,
    number: '4',
    title: 'Gestão em tempo real',
    description: 'Painel com vendas, tempo médio e itens mais pedidos. Tudo em um lugar.',
    color: '#EC4899',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="como-funciona"
      ref={ref}
      style={{
        padding: '120px 24px',
        backgroundColor: '#0D0D10',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          Como funciona
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
            maxWidth: '520px',
          }}
        >
          Simples de usar, poderoso por dentro
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
            maxWidth: '440px',
            margin: '0 auto 64px',
          }}
        >
          Quatro passos. Sua equipe aprende em uma hora.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                style={{
                  backgroundColor: '#18181B',
                  padding: '40px 32px',
                  position: 'relative',
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontSize: '56px',
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.04)',
                    lineHeight: 1,
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontFamily: 'monospace',
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${step.color}18`,
                    border: `1px solid ${step.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={22} color={step.color} strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#FAFAFA',
                    margin: '0 0 10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.65, margin: 0 }}>
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

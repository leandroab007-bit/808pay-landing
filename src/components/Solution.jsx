import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserRound, ScanLine, CreditCard, ChefHat, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    number: '01',
    label: 'Cliente',
    Icon: UserRound,
    title: 'Escolhe com calma',
    description: 'Cardápio visual no balcão ou na mesa. Sem pressa, sem pressão.',
    color: '#3B82F6',
  },
  {
    number: '02',
    label: 'Pedido',
    Icon: ScanLine,
    title: 'Registrado em segundos',
    description: 'O pedido entra no sistema instantaneamente. Sem papel, sem ruído.',
    color: '#8B5CF6',
  },
  {
    number: '03',
    label: 'Pagamento',
    Icon: CreditCard,
    title: 'Confirmado na hora',
    description: 'Pix, cartão ou dinheiro. Confirmação automática, sem conferência manual.',
    color: '#22C55E',
  },
  {
    number: '04',
    label: 'Cozinha',
    Icon: ChefHat,
    title: 'Recebe tudo organizado',
    description: 'Cada item chega com prioridade e sequência. Sem grito, sem confusão.',
    color: '#F59E0B',
  },
  {
    number: '05',
    label: 'Gestão',
    Icon: LayoutDashboard,
    title: 'Você vê tudo em tempo real',
    description: 'Vendas, tempo médio, itens mais pedidos. Controle de verdade.',
    color: '#EC4899',
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}
        >
          A solução
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#FAFAFA', margin: '0 auto 16px', maxWidth: '600px' }}
        >
          Um fluxo contínuo, do início ao fim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '16px', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 72px' }}
        >
          Cinco etapas sincronizadas. Cada uma alimenta a próxima, sem intervalo e sem perda.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'start' }}>
          {steps.map((step, i) => {
            const { Icon } = step
            return (
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
                <div style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  backgroundColor: `${step.color}18`,
                  border: `1px solid ${step.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Icon size={24} color={step.color} strokeWidth={1.6} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: step.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {step.label}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#FAFAFA', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#71717A', lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
                <div style={{ position: 'absolute', top: '12px', right: '14px', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.08)', fontFamily: 'monospace' }}>
                  {step.number}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Real scenario image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginTop: '48px', height: '260px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}
        >
          <img
            src="/images/depois.jpg"
            alt="Operação organizada com a 808Pay"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.55) saturate(1.05)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,9,11,0.3) 0%, transparent 40%, rgba(9,9,11,0.75) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(34,197,94,0.05)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#FAFAFA', margin: '0 0 4px', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>A operação depois do 808Pay</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>Fluxo contínuo, equipe focada, cliente satisfeito</p>
            </div>
            <div style={{ backgroundColor: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '5px 12px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#22C55E', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Depois</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

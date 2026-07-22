import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, RefreshCw, Layers, Clock, Users } from 'lucide-react'

const differentials = [
  {
    icon: Zap,
    title: 'Nasceu para eliminar gargalos',
    description:
      'Cada funcionalidade foi pensada a partir de um ponto de falha real em operações de alto fluxo. Não é adaptação — é propósito.',
    color: '#F59E0B',
  },
  {
    icon: RefreshCw,
    title: 'Fluxo contínuo, não fragmentado',
    description:
      'Pedido, pagamento e cozinha falam entre si em tempo real. Sem sincronização manual, sem informação perdida entre etapas.',
    color: '#22C55E',
  },
  {
    icon: Clock,
    title: 'Implantação rápida',
    description:
      'Operacional em dias, não meses. Sua equipe aprende sem precisar de treinamento longo ou consultor externo.',
    color: '#3B82F6',
  },
  {
    icon: Shield,
    title: 'Suporte próximo e responsivo',
    description:
      'Canal direto com quem resolve. Nenhum ticket aguardando triagem enquanto sua operação está parada.',
    color: '#8B5CF6',
  },
  {
    icon: Layers,
    title: 'Visão completa da operação',
    description:
      'Do primeiro pedido do dia ao fechamento de caixa, tudo centralizado. Você não precisa cruzar planilhas.',
    color: '#EC4899',
  },
  {
    icon: Users,
    title: 'Feito para equipes reais',
    description:
      'Interface direta, sem curva de aprendizado. Funciona para quem nunca usou um sistema antes.',
    color: '#14B8A6',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="diferenciais"
      ref={ref}
      style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
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
        Diferenciais
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
          maxWidth: '560px',
        }}
      >
        Por que a 808Pay é diferente
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
          maxWidth: '460px',
          margin: '0 auto 64px',
        }}
      >
        A 808Pay não foi construída para vender. Foi construída para resolver os gargalos que impede
        uma operação de crescer com consistência.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}
      >
        {differentials.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}30`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Icon size={20} color={item.color} strokeWidth={1.8} />
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
                {item.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.65, margin: 0 }}>
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

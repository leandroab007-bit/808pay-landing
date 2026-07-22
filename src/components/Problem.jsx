import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, FileX, Wallet, ChefHat } from 'lucide-react'

const problems = [
  {
    Icon: Users,
    color: '#F87171',
    title: 'Fila que não anda',
    description: 'Clientes esperando enquanto a equipe procura o pedido. A pressa gera erro, o erro gera retrabalho.',
  },
  {
    Icon: FileX,
    color: '#FB923C',
    title: 'Pedido que se perde',
    description: 'Anotação no papel, grito para a cozinha, comanda rasgada. O pedido chega errado ou não chega.',
  },
  {
    Icon: Wallet,
    color: '#FBBF24',
    title: 'Caixa que trava',
    description: 'Troco errado, Pix não confirmado, cliente esperando. Cada segundo parado é venda que vai embora.',
  },
  {
    Icon: ChefHat,
    color: '#F97316',
    title: 'Cozinha no caos',
    description: 'Sem prioridade, sem sequência. Prato saindo fora de ordem, tempo de espera aumentando.',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="problema"
      ref={ref}
      style={{
        padding: '120px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}
      >
        O problema
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.05 }}
        style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#FAFAFA', margin: '0 auto 16px', maxWidth: '640px' }}
      >
        Crescer sem organização amplifica o caos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '16px', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 64px' }}
      >
        Mais clientes significa mais pedidos, mais pressão e mais margem para erro.
        Sem uma estrutura, o crescimento vira problema.
      </motion.p>

      {/* Real scenario image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08 }}
        style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', height: '260px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}
      >
        <img
          src="/images/antes.jpg"
          alt="A realidade de uma operação sem estrutura"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.45) saturate(0.8)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,9,11,0.3) 0%, transparent 40%, rgba(9,9,11,0.8) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(239,68,68,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#FAFAFA', margin: '0 0 4px', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>Parece familiar?</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>A realidade sem uma estrutura de operação</p>
          </div>
          <div style={{ backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '5px 12px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F87171', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Antes</span>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        {problems.map((item, i) => {
          const { Icon } = item
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                backgroundColor: `${item.color}15`,
                border: `1px solid ${item.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px',
              }}>
                <Icon size={20} color={item.color} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#FAFAFA', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          marginTop: '48px',
          backgroundColor: 'rgba(239,68,68,0.06)',
          border: '1px solid rgba(239,68,68,0.15)',
          borderRadius: '12px',
          padding: '20px 28px',
          textAlign: 'center',
          color: '#FCA5A5',
          fontSize: '14px',
          lineHeight: 1.6,
          maxWidth: '680px',
          margin: '48px auto 0',
        }}
      >
        Cada gargalo não resolvido hoje se multiplica quando o movimento aumentar.
        <span style={{ color: '#F87171', fontWeight: 600 }}> O problema não é o crescimento — é a falta de estrutura.</span>
      </motion.div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  {
    icon: '⏱️',
    title: 'Fila que não anda',
    description: 'Clientes esperando enquanto a equipe procura o pedido. A pressa gera erro, o erro gera retrabalho.',
  },
  {
    icon: '📝',
    title: 'Pedido que se perde',
    description: 'Anotação no papel, grito para a cozinha, comanda rasgada. O pedido chega errado ou não chega.',
  },
  {
    icon: '💸',
    title: 'Caixa que trava',
    description: 'Troco errado, Pix não confirmado, cliente esperando. Cada segundo parado é venda que vai embora.',
  },
  {
    icon: '🔥',
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
      {/* Label */}
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
        O problema
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
          maxWidth: '640px',
        }}
      >
        Crescer sem organização amplifica o caos
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
          maxWidth: '520px',
          margin: '0 auto 64px',
        }}
      >
        Mais clientes significa mais pedidos, mais pressão e mais margem para erro.
        Sem uma estrutura, o crescimento vira problema.
      </motion.p>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {problems.map((item, i) => (
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
            <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#FAFAFA',
                margin: '0 0 8px',
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.6, margin: 0 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom callout */}
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

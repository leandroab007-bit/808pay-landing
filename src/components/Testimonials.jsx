import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const placeholders = [
  {
    name: '[Nome do responsável]',
    role: 'Proprietário',
    business: '[Nome do estabelecimento]',
    city: '[Cidade, Estado]',
    quote:
      '"[Depoimento real a ser adicionado após validação com o cliente. Resultado obtido após implantação da 808Pay.]"',
    metric: '[+X%]',
    metricLabel: 'em vendas no primeiro mês',
  },
  {
    name: '[Nome do responsável]',
    role: 'Gerente de Operações',
    business: '[Nome do estabelecimento]',
    city: '[Cidade, Estado]',
    quote:
      '"[Depoimento real a ser adicionado após validação com o cliente. Resultado obtido após implantação da 808Pay.]"',
    metric: '[−X min]',
    metricLabel: 'no tempo médio de atendimento',
  },
  {
    name: '[Nome do responsável]',
    role: 'Sócio',
    business: '[Nome do estabelecimento]',
    city: '[Cidade, Estado]',
    quote:
      '"[Depoimento real a ser adicionado após validação com o cliente. Resultado obtido após implantação da 808Pay.]"',
    metric: '[X dias]',
    metricLabel: 'para a equipe dominar o sistema',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="depoimentos"
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
          Resultados reais
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
          Quem já organiza o crescimento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textAlign: 'center',
            color: '#71717A',
            fontSize: '14px',
            lineHeight: 1.6,
            maxWidth: '420px',
            margin: '0 auto 64px',
            fontStyle: 'italic',
          }}
        >
          Depoimentos e resultados reais serão adicionados após validação com os primeiros clientes.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Metric highlight */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  alignSelf: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#22C55E',
                    fontFamily: 'monospace',
                  }}
                >
                  {item.metric}
                </span>
                <span style={{ fontSize: '12px', color: '#52525B' }}>{item.metricLabel}</span>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#52525B',
                  lineHeight: 1.7,
                  margin: 0,
                  fontStyle: 'italic',
                  flex: 1,
                }}
              >
                {item.quote}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#27272A',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  👤
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#52525B',
                    }}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#3F3F46' }}>
                    {item.role} · {item.business}
                  </div>
                  <div style={{ fontSize: '11px', color: '#3F3F46' }}>{item.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: '32px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
            }}
          />
          <span style={{ fontSize: '12px', color: '#52525B' }}>
            Espaços reservados para depoimentos reais · Em breve
          </span>
        </motion.div>
      </div>
    </section>
  )
}

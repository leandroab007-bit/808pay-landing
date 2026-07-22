import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Já tenho um sistema. Preciso trocar tudo?',
    answer:
      'Depende de como o seu sistema atual funciona. Em muitos casos a 808Pay opera de forma complementar — mas se o objetivo é eliminar gargalos de verdade, a integração total do fluxo tem resultados muito melhores. Na demonstração, avaliamos isso junto com você.',
  },
  {
    question: 'Preciso comprar ou trocar equipamentos?',
    answer:
      'Na maioria dos casos não. A 808Pay funciona em dispositivos que você provavelmente já tem: tablets, celulares e computadores. Se houver necessidade de algum equipamento específico, avisamos com antecedência e sem surpresa no orçamento.',
  },
  {
    question: 'Minha equipe aprende rápido?',
    answer:
      'Sim. A interface foi projetada para quem nunca usou um sistema antes. A maioria das equipes está operando sem supervisão em menos de um dia de uso.',
  },
  {
    question: 'Funciona com Pix?',
    answer:
      'Sim. Pix, cartão de débito, crédito e dinheiro são suportados. A confirmação do Pix é automática — sem precisar conferir o celular ou chamar alguém para validar.',
  },
  {
    question: 'Como funciona o suporte?',
    answer:
      'Canal direto com a equipe, sem triagem de tickets. Se algo der errado no horário de pico, você fala com quem pode resolver — não com um robô de atendimento.',
  },
  {
    question: 'E se a internet cair?',
    answer:
      'A 808Pay continua operando em modo offline para as funções essenciais: pedido e caixa. Quando a conexão volta, tudo sincroniza automaticamente. Sua operação não para.',
  },
  {
    question: 'Quanto tempo leva a implantação?',
    answer:
      'Entre dois e cinco dias úteis dependendo do tamanho da operação. Isso inclui configuração, cadastro do cardápio e treinamento da equipe. Sem consultoria externa e sem obras.',
  },
]

function FAQItem({ item, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: open ? '#FAFAFA' : '#D4D4D8',
            transition: 'color 0.2s',
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={18} color="#52525B" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: '14px',
                color: '#71717A',
                lineHeight: 1.7,
                margin: '0 0 20px',
                paddingRight: '32px',
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="faq"
      ref={ref}
      style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="faq-grid"
      >
        {/* Left column */}
        <div style={{ position: 'sticky', top: '100px' }}>
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
              marginBottom: '16px',
            }}
          >
            Perguntas frequentes
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              margin: '0 0 16px',
            }}
          >
            Tire suas dúvidas antes de decidir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              color: '#A1A1AA',
              fontSize: '15px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Se a sua pergunta não está aqui, fale com a gente direto na demonstração.
          </motion.p>
        </div>

        {/* Right column — FAQ list */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.question} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}

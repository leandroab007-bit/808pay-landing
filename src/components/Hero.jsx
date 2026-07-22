import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function FlowDiagram() {
  const steps = [
    { label: 'Cliente', icon: '👤', color: '#3B82F6' },
    { label: 'Pedido', icon: '📋', color: '#8B5CF6' },
    { label: 'Pagamento', icon: '💳', color: '#22C55E' },
    { label: 'Cozinha', icon: '🍳', color: '#F59E0B' },
    { label: 'Gestão', icon: '📊', color: '#EC4899' },
  ]

  return (
    <div
      style={{
        backgroundColor: '#18181B',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '40px 32px',
        maxWidth: '720px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
      <div
        style={{
          textAlign: 'center',
          color: '#A1A1AA',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}
      >
        Fluxo operacional unificado
      </div>

      {/* Steps */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          flexWrap: 'wrap',
          rowGap: '16px',
        }}
      >
        {steps.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
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
                  fontSize: '22px',
                }}
              >
                {step.icon}
              </div>
              <span style={{ fontSize: '11px', color: '#A1A1AA', fontWeight: 500 }}>
                {step.label}
              </span>
            </motion.div>

            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                style={{
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  margin: '0 4px',
                  marginBottom: '20px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    right: '-3px',
                    top: '-3px',
                    width: '7px',
                    height: '7px',
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    borderRight: '1px solid rgba(255,255,255,0.2)',
                    transform: 'rotate(45deg)',
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap',
          rowGap: '8px',
        }}
      >
        {[
          { label: 'Status', value: 'Operacional', color: '#22C55E' },
          { label: 'Latência', value: '< 100ms', color: '#FAFAFA' },
          { label: 'Uptime', value: '99.9%', color: '#FAFAFA' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {item.label === 'Status' && (
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  boxShadow: '0 0 6px #22C55E',
                }}
              />
            )}
            <span style={{ fontSize: '12px', color: '#71717A' }}>{item.label}:</span>
            <span style={{ fontSize: '12px', color: item.color, fontWeight: 600 }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '860px', width: '100%' }}>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: '99px',
            padding: '5px 14px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#22C55E',
            letterSpacing: '0.04em',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#22C55E',
              display: 'inline-block',
            }}
          />
          Infraestrutura operacional para restaurantes
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#FAFAFA',
            margin: '0 0 24px',
          }}
        >
          Sua operação cresceu.<br />
          <span style={{ color: '#22C55E' }}>A organização</span> também?
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#A1A1AA',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto 40px',
            fontWeight: 400,
          }}
        >
          Do pedido ao pagamento, da cozinha à gestão — tudo sincronizado em
          um único fluxo. Sem ruídos, sem gargalos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#cta"
            style={{
              backgroundColor: '#22C55E',
              color: '#09090B',
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.88'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Agendar Demonstração
          </a>
          <a
            href="#como-funciona"
            style={{
              backgroundColor: 'transparent',
              color: '#FAFAFA',
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'border-color 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.28)'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.12)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginTop: '64px' }}
        >
          <FlowDiagram />
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { UtensilsCrossed, ShoppingBag, Plus, Check, Clock, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

const menuItems = [
  { name: 'X-Burguer Especial', desc: 'Carne 180g, queijo, alface', price: 'R$ 28,90', tag: 'Mais pedido' },
  { name: 'Combo Família', desc: '2 lanches + batata + refri', price: 'R$ 54,90', tag: null },
  { name: 'Pastel de Carne', desc: 'Massa crocante, 180g', price: 'R$ 12,90', tag: null },
]

const orderItems = [
  { name: 'X-Burguer Especial', qty: 1, price: 'R$ 28,90' },
  { name: 'Batata Frita G', qty: 1, price: 'R$ 14,90' },
  { name: 'Coca-Cola 350ml', qty: 2, price: 'R$ 14,00' },
]

function PhoneMenuScreen() {
  return (
    <div style={{
      width: '200px',
      height: '390px',
      backgroundColor: '#09090B',
      borderRadius: '28px',
      border: '6px solid #27272A',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '18px', backgroundColor: '#27272A', borderRadius: '0 0 12px 12px', zIndex: 10 }} />

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)', padding: '24px 12px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '24px', height: '24px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UtensilsCrossed size={12} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>808Pay</div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Mesa 04</div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', gap: '4px', padding: '8px 10px', backgroundColor: '#111113', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {['Lanches', 'Bebidas', 'Combos'].map((cat, i) => (
          <div key={cat} style={{
            fontSize: '8px', fontWeight: 600, padding: '3px 7px', borderRadius: '99px',
            backgroundColor: i === 0 ? '#22C55E' : 'rgba(255,255,255,0.06)',
            color: i === 0 ? '#09090B' : '#71717A',
          }}>{cat}</div>
        ))}
      </div>

      {/* Items */}
      <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'hidden', backgroundColor: '#0D0D10' }}>
        {menuItems.map((item, i) => (
          <motion.div key={item.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
            style={{ backgroundColor: '#18181B', borderRadius: '10px', padding: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
            {item.tag && (
              <div style={{ fontSize: '7px', fontWeight: 700, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>{item.tag}</div>
            )}
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#FAFAFA', marginBottom: '2px' }}>{item.name}</div>
            <div style={{ fontSize: '8px', color: '#52525B', marginBottom: '5px' }}>{item.desc}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#22C55E' }}>{item.price}</span>
              <div style={{ width: '18px', height: '18px', backgroundColor: '#22C55E', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={10} color="#09090B" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#22C55E', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#09090B' }}>3 itens</div>
          <div style={{ fontSize: '8px', color: 'rgba(0,0,0,0.6)' }}>Ver carrinho</div>
        </div>
        <div style={{ fontSize: '11px', fontWeight: 800, color: '#09090B' }}>R$ 57,70</div>
      </div>
    </div>
  )
}

function PhoneOrderScreen() {
  return (
    <div style={{
      width: '200px',
      height: '390px',
      backgroundColor: '#09090B',
      borderRadius: '28px',
      border: '6px solid #27272A',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '18px', backgroundColor: '#27272A', borderRadius: '0 0 12px 12px', zIndex: 10 }} />

      {/* Header */}
      <div style={{ backgroundColor: '#111113', padding: '24px 12px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <ShoppingBag size={12} color="#22C55E" />
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#FAFAFA' }}>Meu Pedido</span>
        </div>
      </div>

      {/* Order number */}
      <div style={{ textAlign: 'center', padding: '14px 12px 10px', backgroundColor: '#0D0D10' }}>
        <div style={{ fontSize: '9px', color: '#52525B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Senha</div>
        <div style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E', lineHeight: 1, letterSpacing: '-2px', fontFamily: 'monospace' }}>47</div>

        {/* Status pill */}
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '99px', padding: '3px 10px', marginTop: '6px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#22C55E' }}>Em preparo</span>
        </motion.div>
      </div>

      {/* Time estimate */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px', backgroundColor: 'rgba(245,158,11,0.08)', borderTop: '1px solid rgba(245,158,11,0.12)', borderBottom: '1px solid rgba(245,158,11,0.12)' }}>
        <Clock size={9} color="#F59E0B" />
        <span style={{ fontSize: '8px', color: '#F59E0B', fontWeight: 600 }}>Tempo estimado: ~12 min</span>
      </div>

      {/* Order items */}
      <div style={{ padding: '8px', backgroundColor: '#0D0D10', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '8px', color: '#52525B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Itens do pedido</div>
        {orderItems.map((item, i) => (
          <motion.div key={item.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 8px', backgroundColor: '#18181B', borderRadius: '7px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '7px', backgroundColor: 'rgba(34,197,94,0.15)', color: '#22C55E', padding: '1px 4px', borderRadius: '3px', fontWeight: 700 }}>{item.qty}x</span>
              <span style={{ fontSize: '8px', color: '#D4D4D8' }}>{item.name}</span>
            </div>
            <span style={{ fontSize: '8px', color: '#71717A' }}>{item.price}</span>
          </motion.div>
        ))}
      </div>

      {/* Total */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', backgroundColor: '#111113', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Check size={9} color="#22C55E" />
          <span style={{ fontSize: '8px', color: '#71717A' }}>Pago · Pix</span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#FAFAFA' }}>R$ 57,80</span>
      </div>
    </div>
  )
}

function PhoneMockups() {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Glow behind phones */}
      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Phones wrapper */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left phone — slightly lower and rotated */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: '32px' }}
        >
          <PhoneMenuScreen />
        </motion.div>

        {/* Right phone — slightly higher and rotated other way */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '32px' }}
        >
          <PhoneOrderScreen />
        </motion.div>
      </div>

      {/* Label below */}
      <div style={{
        position: 'absolute',
        bottom: '-28px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        whiteSpace: 'nowrap',
      }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
        <span style={{ fontSize: '11px', color: '#52525B', fontWeight: 500 }}>Interface real do 808Pay</span>
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
        padding: '100px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        pointerEvents: 'none',
      }} />

      {/* Animated green gradient blob */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }}
      />

      {/* Secondary accent blob — right side */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(2px)',
        }}
      />

      {/* Content — two-column on desktop */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }} className="hero-grid">

        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: '99px', padding: '5px 14px', fontSize: '12px', fontWeight: 600,
              color: '#22C55E', letterSpacing: '0.04em', marginBottom: '28px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
            Infraestrutura para restaurantes
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.045em',
              color: '#FAFAFA',
              margin: '0 0 24px',
            }}
          >
            Sua operação<br />cresceu.<br />
            <span style={{
              background: 'linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              A organização
            </span>{' '}também?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: '18px', color: '#A1A1AA', lineHeight: 1.65, margin: '0 0 40px', fontWeight: 400, maxWidth: '460px' }}
          >
            Do pedido ao pagamento, da cozinha à gestão — tudo sincronizado em um único fluxo. Sem ruídos, sem gargalos.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#cta" style={{
              backgroundColor: '#22C55E', color: '#09090B',
              padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Agendar Demonstração
              <ChevronRight size={16} strokeWidth={2.5} />
            </a>
            <a href="#como-funciona" style={{
              backgroundColor: 'transparent', color: '#FAFAFA',
              padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 500,
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)',
              transition: 'border-color 0.2s, transform 0.2s', display: 'inline-block',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Ver como funciona
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              { value: 'Pix', label: 'Confirmação automática' },
              { value: 'Offline', label: 'Funciona sem internet' },
              { value: '2–5 dias', label: 'Para implantar' },
            ].map((item) => (
              <div key={item.value} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
                <span style={{ fontSize: '12px', color: '#52525B' }}>
                  <strong style={{ color: '#A1A1AA', fontWeight: 600 }}>{item.value}</strong> {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: phone mockups */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', paddingTop: '24px' }}
        >
          <PhoneMockups />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 56px !important;
          }
          .hero-grid > div:first-child > div,
          .hero-grid > div:first-child > p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div[style*="flexWrap"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

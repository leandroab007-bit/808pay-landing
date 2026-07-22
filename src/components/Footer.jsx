export default function Footer() {
  const currentYear = 2026

  return (
    <footer
      style={{
        backgroundColor: '#09090B',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#22C55E',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px',
              color: '#09090B',
            }}
          >
            8
          </div>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#FAFAFA' }}>808Pay</span>
          <span style={{ fontSize: '13px', color: '#3F3F46', marginLeft: '4px' }}>
            — Organizando crescimento.
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'O Problema', href: '#problema' },
            { label: 'Como Funciona', href: '#como-funciona' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contato', href: 'mailto:contato@808pay.com.br' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#52525B',
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#A1A1AA')}
              onMouseLeave={(e) => (e.target.style.color = '#52525B')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '12px', color: '#3F3F46', margin: 0 }}>
          © {currentYear} 808Pay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

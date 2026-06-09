import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileNav from '../../components/mobile/MobileNav.jsx'
import MobileFooter from '../../components/mobile/MobileFooter.jsx'
import MobileContractModal from '../../components/mobile/MobileContractModal.jsx'
import {
  MobileMktHero,
  MobileElleFaq,
  MobileBenefits,
  MobilePricing,
} from '../../components/mobile/MobileFunnelSections.jsx'
import mkt from './MobileMktLandingPage.module.css'
import styles from './MobilePartialResults.module.css'

const ISSUES = [
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Termination',
    title: 'Unilateral termination clause with no notice requirement',
    description: 'The service provider can terminate this agreement at any time without prior notice or stated cause. This means you could lose access to services or paid retainers without warning, and you have no contractual mechanism to dispute or recover damages.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Liability',
    title: 'Unlimited liability on your part',
    description: 'Section 8.2 holds you liable for any damages arising from use of the service, including indirect and consequential losses. There is no cap on the amount you could be required to pay, which is unusual and exposes you to significant financial risk.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Auto-renewal',
    title: 'Auto-renewal with 60-day lock-in window',
    description: 'The contract auto-renews annually. You must cancel at least 60 days before the renewal date or you are bound for another year. Setting a calendar reminder well in advance is critical to avoid unintended renewal.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Disputes',
    title: 'Arbitration clause waives your right to sue',
    description: 'You agree to resolve all disputes through binding arbitration and waive your right to a jury trial or class action. This significantly limits your legal options if a major dispute arises.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'IP',
    title: 'Photographer retains all intellectual property rights',
    description: 'All images remain the exclusive property of the Photographer. Your license to use them is limited and can be revoked. You cannot use the images for commercial purposes without a separate agreement.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Reliability',
    title: 'No backup photographer guarantee',
    description: 'The agreement does not require the Photographer to provide a qualified substitute if they are unable to attend the event. You bear the risk of last-minute changes with no contractual safety net.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Payment',
    title: 'Late payment fee terms are undefined',
    description: 'The contract references penalties for late payment but does not specify the fee amount or accrual rate. Without defined limits, fees could escalate without bound.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Scheduling',
    title: 'No weather or venue change policy',
    description: 'There is no provision addressing rescheduling due to weather, venue changes, or other circumstances outside your control. You may be forced to pay full fees even if the event is disrupted by unavoidable factors.',
  },
]

const FILENAME = 'Service_Contract_2026.doc'
const TOTAL = ISSUES.length
const VISIBLE_LIMIT = 3 // issues 1-3 (indices 0-2) visible, 4-8 blurred

const DOC_SUMMARY = 'This is a photography services agreement with several clauses that may require your attention. The contract contains terms related to unilateral termination, one-sided liability, auto-renewal, and arbitration that could significantly affect your rights as a client.'

export default function MobilePartialResults({ unlocked: unlockedProp = false }) {
  const navigate = useNavigate()
  const [unlocked, setUnlocked] = useState(unlockedProp)
  const [index, setIndex] = useState(0)
  const [cardExpanded, setCardExpanded] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  const current = ISSUES[index]
  const isLocked = !unlocked && index >= VISIBLE_LIMIT

  function go(delta) {
    setIndex(i => {
      const next = (i + delta + TOTAL) % TOTAL
      return next
    })
    setCardExpanded(false)
  }

  function handleCardTap() {
    if (isLocked) return
    setCardExpanded(v => !v)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setTimeout(() => navigate('/mobile-v1/full-reveal', { state: { email } }), 800)
  }

  return (
    <div className={mkt.page}>
      <MobileNav />
      <main>
        <MobileMktHero />

        {/* ── ELLE WIDGET ── */}
        <section className={styles.widgetSection}>
          <span className={mkt.eyebrow}>Meet Elle - Your AI Assistant</span>
          <h2 className={mkt.widgetHeading}>Get your document reviewed</h2>

          <div className={styles.widget}>

          {/* TOP — light purple */}
          <div className={styles.top}>

            {/* Powered by Elle eyebrow */}
            <div className={styles.poweredRow}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L2 3.5V8c0 3.3 2.5 5.7 6 7 3.5-1.3 6-3.7 6-7V3.5L8 1z" fill="currentColor" />
              </svg>
              <span>Powered by Elle</span>
            </div>

            {/* Filename — tappable to open preview */}
            <button type="button" className={styles.fileRow} onClick={() => setModalOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className={styles.fileName}>{FILENAME}</span>
            </button>

            {/* Headline */}
            <h2 className={styles.headline}>Elle flagged {TOTAL} issues.</h2>
            <p className={styles.subtext}>Swipe through to read each.</p>

            <div className={styles.divider} />

            {/* Document Summary accordion */}
            <button
              type="button"
              className={styles.summaryTrigger}
              onClick={() => setSummaryOpen(v => !v)}
              aria-expanded={summaryOpen}
            >
              <span className={styles.summaryLabel}>Document Summary</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={summaryOpen ? styles.chevronOpen : styles.chevron}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {summaryOpen && (
              <p className={styles.summaryBody}>{DOC_SUMMARY}</p>
            )}

            <div className={styles.divider} />

            {/* Issue label + card */}
            <span className={styles.issueLabel}>Issue {index + 1} of {TOTAL}</span>

            <div
              className={`${styles.issueCard} ${cardExpanded && !isLocked ? styles.issueCardExpanded : ''}`}
              onClick={handleCardTap}
              role={isLocked ? undefined : 'button'}
              aria-disabled={isLocked || undefined}
              tabIndex={isLocked ? -1 : 0}
            >
              <div className={`${styles.issueContent} ${isLocked ? styles.issueContentBlurred : ''}`}>
                <div className={styles.issueTop}>
                  <span className={`${styles.severityBadge} ${styles[`severityBadge--${current.severityVariant}`]}`}>
                    {current.severity}
                  </span>
                  <span className={styles.categoryLabel}>{current.category}</span>
                </div>
                <h3 className={styles.issueTitle}>{current.title}</h3>
                <p className={`${styles.issueDescription} ${cardExpanded && !isLocked ? '' : styles.issueDescriptionClamped}`}>
                  {current.description}
                </p>
              </div>
              {!isLocked && !cardExpanded && (
                <div className={styles.readMoreHint}>
                  <span>Read more</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
              <button
                type="button"
                className={styles.pagBtn}
                onClick={() => go(-1)}
                aria-label="Previous issue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.dots} role="tablist" aria-label="Issue pagination">
                {ISSUES.map((_, i) => {
                  const active = i === index
                  const locked = !unlocked && i >= VISIBLE_LIMIT
                  return (
                    <span
                      key={i}
                      className={`${styles.dot} ${active ? styles.dotActive : ''} ${locked ? styles.dotLocked : ''}`}
                      aria-current={active ? 'true' : undefined}
                    />
                  )
                })}
              </div>
              <button
                type="button"
                className={styles.pagBtn}
                onClick={() => go(1)}
                aria-label="Next issue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* BOTTOM — warm cream — email gate */}
          {!unlocked && (
            <div className={styles.bottom}>
              <h3 className={styles.gateHeadline}>Elle found 5 more issues worth reviewing</h3>
              <p className={styles.gateSubtext}>Enter your email to unlock the full review.</p>

              <form onSubmit={handleSubmit} noValidate className={styles.emailForm}>
                <div className={`${styles.emailInputRow} ${status === 'error' ? styles.emailInputRowError : ''}`}>
                  <input
                    type="email"
                    className={styles.emailInput}
                    placeholder="Email address"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
                    aria-invalid={status === 'error'}
                  />
                  <button type="submit" className={styles.emailSubmit} aria-label="Submit email">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                {status === 'error' && (
                  <p className={styles.emailError}>
                    <span aria-hidden="true">ⓘ</span> Please enter a valid email address.
                  </p>
                )}
                {status === 'success' && (
                  <p className={styles.emailSuccess}>✓ Got it! Unlocking your full review…</p>
                )}
              </form>

              <p className={styles.finePrint}>
                By signing up, you agree to receive emails from LegalShield. View our Privacy Policy.
              </p>
            </div>
          )}
          </div>
        </section>

        <MobileElleFaq />
        <MobileBenefits />
        <MobilePricing />
      </main>
      <MobileFooter />

      {modalOpen && (
        <MobileContractModal fileName={FILENAME} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}

import Link from 'next/link'
import Btn from '@/components/ui/Btn'

export const metadata = {
  title: 'Politiques | Cocktail Média',
  description: "Politiques de délais, d'annulation, de remboursement et de confidentialité de Cocktail Média.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.5rem', letterSpacing: '.08em', color: 'var(--noir)', marginBottom: '1.2rem', paddingBottom: '.8rem', borderBottom: '2px solid var(--rouge)' }}>
        {title}
      </h2>
      <div style={{ fontSize: '.88rem', color: 'var(--gris)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
        {children}
      </div>
    </div>
  )
}

export default function PolitiquesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '38vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <div className="container">
          <p className="eyebrow">TRANSPARENT, COMME TOUT LE RESTE</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,5.5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            POLITIQUES
          </h1>
        </div>
      </section>

      {/* ── CONTENU ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div className="container-sm">

          <Section title="DÉLAIS DE LIVRAISON">
            <p>Chaque service a un délai standard affiché sur le menu. Ces délais comptent en <strong style={{ color: 'var(--noir)' }}>jours ouvrables</strong> (lundi au vendredi, excluant les fériés québécois) à partir de la confirmation de la commande et de la réception de tous les éléments nécessaires.</p>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
              <li>Infographie (L&apos;Apéro) : 5 jours ouvrables</li>
              <li>Graphisme (Les Rosés) : 10 jours ouvrables</li>
              <li>Vidéographie (Les Blancs) : 14 jours ouvrables après tournage</li>
              <li>Photographie (Les Rouges) : 10 jours ouvrables après la séance</li>
              <li>Site web (Les Digestifs) : 21 jours ouvrables</li>
            </ul>
            <p>Une option <strong style={{ color: 'var(--noir)' }}>livraison express</strong> est disponible pour certains services. Consulte les extras du menu pour les tarifs applicables.</p>
          </Section>

          <Section title="RÉVISIONS ET MODIFICATIONS">
            <p>Chaque service inclut <strong style={{ color: 'var(--noir)' }}>une revisite incluse</strong>. Une revisite correspond à une ronde de commentaires consolidés — pas un processus ouvert de retouches successives.</p>
            <p>Les révisions supplémentaires sont disponibles en tant qu&apos;extra (10$ – 30$ selon le service). Elles doivent être demandées par courriel à <a href="mailto:info@cocktailmedia.ca" style={{ color: 'var(--rouge)' }}>info@cocktailmedia.ca</a>.</p>
            <p>Les demandes de modification doivent être soumises dans les <strong style={{ color: 'var(--noir)' }}>7 jours ouvrables</strong> suivant la livraison du premier jet. Au-delà de ce délai, les modifications sont considérées comme un nouveau mandat.</p>
          </Section>

          <Section title="ANNULATION ET REMBOURSEMENT">
            <p>Les commandes peuvent être annulées <strong style={{ color: 'var(--noir)' }}>avant le début de la production</strong> sans frais. Une fois la production commencée, aucun remboursement n&apos;est possible.</p>
            <p>En cas d&apos;annulation d&apos;un tournage photo ou vidéo, un avis d&apos;au moins <strong style={{ color: 'var(--noir)' }}>48 heures</strong> est requis pour reporter sans frais. Toute annulation dans les 48 heures précédant le tournage entraîne des frais de 50$ pour couvrir les préparatifs.</p>
            <p>En cas de problème avec une livraison (fichiers manquants, erreur de notre part), on s&apos;engage à corriger la situation dans les plus brefs délais, sans frais supplémentaires.</p>
          </Section>

          <Section title="DROITS D'UTILISATION">
            <p>Tous les livrables produits par Cocktail Média sont cédés au client à la livraison finale, pour <strong style={{ color: 'var(--noir)' }}>usage commercial illimité</strong> : site web, réseaux sociaux, impression, publicité, etc.</p>
            <p>Cocktail Média se réserve le droit d&apos;utiliser les livrables à des fins de <strong style={{ color: 'var(--noir)' }}>portfolio et de promotion</strong>, à moins d&apos;entente contraire signée.</p>
            <p>Les musiques utilisées dans les productions vidéo sont des musiques <strong style={{ color: 'var(--noir)' }}>libres de droits</strong>. Si le client fournit une musique spécifique, il est responsable d&apos;en détenir les droits d&apos;utilisation.</p>
          </Section>

          <Section title="CONFIDENTIALITÉ">
            <p>Les informations personnelles collectées (nom, courriel, téléphone, entreprise) sont utilisées uniquement pour la gestion des commandes et la communication avec le client. Elles ne sont jamais vendues ni partagées avec des tiers.</p>
            <p>Les fichiers et documents partagés dans le cadre d&apos;un mandat sont conservés de manière sécurisée et ne sont pas divulgués sans consentement.</p>
            <p>Pour toute question relative à la confidentialité, contacte-nous à <a href="mailto:info@cocktailmedia.ca" style={{ color: 'var(--rouge)' }}>info@cocktailmedia.ca</a>.</p>
          </Section>

          <Section title="DÉPLACEMENT">
            <p>Le déplacement est inclus <strong style={{ color: 'var(--noir)' }}>partout en Mauricie</strong> — Trois-Rivières, Shawinigan, Louiseville, Bécancour, Victoriaville et les municipalités environnantes.</p>
            <p>Pour les mandats hors Mauricie, le déplacement est <strong style={{ color: 'var(--noir)' }}>gratuit pour toute commande de 500$ et plus</strong>. En dessous de ce montant, des frais de déplacement s&apos;appliquent selon la distance.</p>
          </Section>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--ligne)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <p style={{ fontSize: '.8rem', color: 'var(--gris)', flex: 1 }}>Ces politiques ont été mises à jour en mai 2025. Pour toute question, contacte-nous.</p>
            <Btn href="/reserver" variant="primary" size="sm">RÉSERVER →</Btn>
          </div>
        </div>
      </section>
    </>
  )
}

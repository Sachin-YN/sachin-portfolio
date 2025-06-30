// pages/index.js
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* … your intro section above … */}

      {/* Data Stack / Skills Section (exact Rafsan structure) */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-4 text-neon-green">
          Skills & Data Stack
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>
            <strong>Programming &amp; Analysis:</strong>{' '}
            SQL (MySQL, PostgreSQL), Python (BeautifulSoup, Pandas, NumPy), R (Basic), Excel (PivotTables, VLOOKUP, Conditional Formatting)
          </li>
          <li>
            <strong>Data Visualization:</strong>{' '}
            Tableau, Power BI, Matplotlib, Seaborn
          </li>
          <li>
            <strong>Design &amp; Productivity:</strong>{' '}
            Figma, Adobe Illustrator, Photoshop, Notion, Asana
          </li>
        </ul>
      </section>

      {/* … your contact section below … */}
    </Layout>
  )
}

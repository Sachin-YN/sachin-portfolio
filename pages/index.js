export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg text-white font-sans flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">Hey, I’m Sachin</h1>
      <p className="text-2xl italic mb-8">
        Turning <span className="font-semibold text-accent">raw data</span> into actionable insights.
      </p>
      <div className="flex space-x-4">
        <a href="https://linkedin.com/in/ing-sachin-yoganandham-a06b88117" target="_blank" rel="noopener" className="px-6 py-3 bg-accent text-black rounded-full">LinkedIn</a>
        <a href="https://github.com/Sachin-YN" target="_blank" rel="noopener" className="px-6 py-3 border-2 border-accent rounded-full">GitHub</a>
      </div>
    </main>
  )
}

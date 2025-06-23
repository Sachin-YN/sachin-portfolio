export default function Projects() {
  const projects = [
    { title: 'Awesome Project', description: 'React app showcasing dynamic data visualizations.', link: 'https://github.com/Sachin-YN/awesome-project' },
    { title: 'Data Visualizer', description: 'Dashboards with D3 & React.', link: 'https://github.com/Sachin-YN/data-visualizer' },
    { title: 'Real-time Chat App', description: 'Responsive chat with real-time messaging.', link: 'https://github.com/Sachin-YN/chat-app' },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-bg text-white text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener" className="block bg-card-bg bg-opacity-60 p-6 rounded-xl shadow-card transform hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <span className="text-accent font-medium hover:underline">View on GitHub →</span>
          </a>
        ))}
      </div>
    </section>
);
}

import Card from '../components/Card'

const Projects = () => {
  const projects = [
    { title: 'Portfolio Website', description: 'This website itself.', link: '#' },
    { title: 'FarmConnect App', description: 'Flutter-based app for farmers.', link: '#' },
  ]

  return (
    <section className="p-8" id="projects">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <Card key={idx} {...proj} />
        ))}
      </div>
    </section>
  )
}

export default Projects

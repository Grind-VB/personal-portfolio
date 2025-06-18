const Card = ({ title, description, link }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p>{description}</p>
    <a href={link} className="text-blue-500 mt-2 inline-block">View</a>
  </div>
)

export default Card

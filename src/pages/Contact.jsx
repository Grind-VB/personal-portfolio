const Contact = () => (
  <section className="p-8" id="contact">
    <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
    <form className="flex flex-col max-w-md gap-4">
      <input type="text" placeholder="Name" className="p-2 border rounded" />
      <input type="email" placeholder="Email" className="p-2 border rounded" />
      <textarea placeholder="Message" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
    </form>
  </section>
)

export default Contact

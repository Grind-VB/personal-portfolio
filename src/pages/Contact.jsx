const Contact = () => {
  return (
    <div className="max-w-xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
        Have a question, collaboration idea, or just want to say hello? I'd love to hear from you.
        Fill out the form below or reach out via email. I’ll get back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col text-sm">
          <span className="mb-1 font-medium">Name</span>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1 font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1 font-medium">Message</span>
          <textarea
            placeholder="Type your message here..."
            required
            className="p-3 border border-gray-300 rounded h-32 resize-none dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-medium py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

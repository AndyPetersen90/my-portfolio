function ContactMeSection() {
  return (
    <section id="contact-section" className="bg-black text-white p-8">
      <h3 className="text-center text-2xl font-bold mb-4">Contact Me</h3>
      <p className="text-center text-lg mb-8">Feel free to reach out for collaboration opportunities or questions!</p>
      <div className="text-center">
        <a
          href="mailto:andrew.petersen.webdev+porfolio@gmail.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default ContactMeSection;

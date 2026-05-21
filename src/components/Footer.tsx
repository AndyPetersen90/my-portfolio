function FooterSection() {
  return (
    <footer className="bg-white px-4 py-8 text-center">
      <p className="mb-2 font-semibold !text-slate-900">Andrew Petersen | Full-Stack Software Engineer</p>
      <p className="text-sm !text-slate-600">© {new Date().getFullYear()} Andrew Petersen. Built with React, TypeScript, and Tailwind CSS.</p>
    </footer>
  );
}

export default FooterSection;

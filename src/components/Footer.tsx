function FooterSection() {
  return (
    <footer className="bg-grey-900 text-white py-6 text-center">
      <p>Built with love, caffeine, and the occasional bug fix. Don't worry, the bugs have been squashed... I think. 😅</p>
      <p className="text-sm">© {new Date().getFullYear()} Andrew Petersen's Portfolio | Powered by HTML, CSS, and energy drinks</p>
    </footer>
  );
}

export default FooterSection;

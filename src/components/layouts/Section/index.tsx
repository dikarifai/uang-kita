const Section: React.FC<SectionProps> = ({ children, title, id }) => {
  return (
    <section id={id} className="py-4">
      <h4 className="font-semibold px-2">{title}</h4>
      {children}
    </section>
  );
};

export default Section;

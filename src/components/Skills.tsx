
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript", 
        "Next.js",
        "Tailwind CSS",
        "Vue.js"
      ]
    },
    {
      title: "Backend", 
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "FastAPI",
        "GraphQL"
      ]
    },
    {
      title: "Database & DevOps",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
        "Git"
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Supabase", "Vercel", "GitHub", 
    "Slack", "Notion", "Linear", "Prisma", "Redux", "Zustand"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit for building modern web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-center px-4 py-2 bg-muted/30 rounded-md text-foreground font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm border border-border hover:bg-accent transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 }
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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

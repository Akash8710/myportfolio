
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  GitBranch,
  Layers,
  Globe,
  Smartphone,
  Palette,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Code },
        { name: "TypeScript", icon: Code }, 
        { name: "Next.js", icon: Globe },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Vue.js", icon: Smartphone }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Python", icon: Code },
        { name: "Express.js", icon: Server },
        { name: "FastAPI", icon: Server },
        { name: "GraphQL", icon: Layers }
      ]
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Docker", icon: Layers },
        { name: "AWS", icon: Cloud },
        { name: "Git", icon: GitBranch }
      ]
    }
  ];

  const tools = [
    "VS Code", "Postman", "Supabase", "Vercel", "GitHub", 
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
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-center px-4 py-3 bg-muted/30 rounded-md text-foreground font-medium hover:bg-muted/50 transition-colors duration-200"
                      >
                        <IconComponent size={18} className="mr-3 text-primary" />
                        {skill.name}
                      </div>
                    );
                  })}
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

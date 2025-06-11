
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces with modern frameworks"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimization"
    },
    {
      icon: Code,
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 3 years of experience in full-stack development, I specialize in creating 
                scalable web applications using modern technologies. My journey spans from crafting 
                pixel-perfect user interfaces to architecting robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, user experience, and staying up-to-date with the 
                latest industry trends. When I'm not coding, you'll find me contributing to open-source 
                projects or exploring new technologies.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-foreground">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="font-semibold text-foreground">3+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Technologies Mastered</span>
                  <span className="font-semibold text-foreground">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="font-semibold text-foreground">∞</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <item.icon size={40} className="text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

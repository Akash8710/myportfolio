
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Full Stack
              <span className="block text-primary">Developer</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences with modern technologies, building scalable web applications from concept to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="animate-bounce">
              <ArrowDown size={32} className="mx-auto text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

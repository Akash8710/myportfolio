
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '\resume(2).pdf'; // You'll need to add your CV file to the public folder
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="inline-block animate-[fade-in_0.6s_ease-out]">Full</span>{" "}
              <span className="inline-block animate-[fade-in_0.6s_ease-out_0.2s_both]">Stack</span>
              <span className="block text-primary animate-[blink_1s_infinite]">
                <span className="inline-block animate-[fade-in_0.6s_ease-out_0.4s_both]">Developer</span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-[fade-in_0.6s_ease-out_0.6s_both]">
              I craft digital experiences with modern technologies, building scalable web applications from concept to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-[fade-in_0.6s_ease-out_0.8s_both]">
              <Button 
                onClick={downloadCV}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </Button>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Akash8710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-rao-9b5838298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:akashrao8710@gmail.com"
                  className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="animate-bounce animate-[fade-in_0.6s_ease-out_1s_both]">
              <ArrowDown size={32} className="mx-auto text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

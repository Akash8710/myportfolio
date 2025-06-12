import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Student Management Website",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js","Supabase","Tailwind CSS"],
      githubUrl: "https://github.com/Akash8710/academic-dashboard-lite",
      liveUrl: "https://academic-dashboard-lite.vercel.app/"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Supabase", "Socket.io", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and automated reporting.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "MySQL", "AWS S3", "Mapbox"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with video streaming, progress tracking, and interactive quizzes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Video.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Analytics App",
      description: "Weather prediction app with historical data analysis and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      technologies: ["React Native", "Python", "Django", "PostgreSQL", "ML Models"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

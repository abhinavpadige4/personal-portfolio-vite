import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call (replace with actual EmailJS integration)
    setTimeout(() => {
      if (formState.name.trim() && formState.email.trim() && formState.message.trim()) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background/50 backdrop-blur-sm rounded-xl border border-muted/20 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-muted/50 border border-muted/300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder-muted/50"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-muted/50 border border-muted/300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder-muted/50"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-muted/50 border border-muted/300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder-muted/50"
                placeholder="Your message here..."
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105 ${
                isSubmitting ? "opacity-70" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          
          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-accent/20 text-accent rounded-lg">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-accent/20 text-accent rounded-lg">
              ❌ Please fill in all fields before submitting.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPython,
  SiC
} from 'react-icons/si';
import './TechnicalStack.css';

const TechnicalStack = () => {
  const techStack = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiC, name: 'C', color: '#A8B9CC' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="technical-stack">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {techStack.map((tech, index) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              index={index}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechCard = ({ tech, index, variants }) => {
  const IconComponent = tech.icon;
  
  return (
    <motion.div
      className="tech-card"
      variants={variants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-content">
        <div className="icon-wrapper" style={{ color: tech.color }}>
          <IconComponent size={48} />
        </div>
        <h3 className="tech-name">{tech.name}</h3>
      </div>
      <div className="card-glow"></div>
    </motion.div>
  );
};

export default TechnicalStack;

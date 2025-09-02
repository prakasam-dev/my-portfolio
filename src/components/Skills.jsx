import React from 'react'
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
  ]

  return (
    <section className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <Icon className={`${skill.color} text-5xl`} />
                <p className="mt-2 text-sm sm:text-base text-gray-300">{skill.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

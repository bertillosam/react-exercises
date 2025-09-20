import React from 'react'

const About = () => {

  const frontendSkills = [ "React JS", "TailwindCSS", "HTML5", "CSS", "Bootstrap"];
  const backendSkills = ["Node.js", "AWS", "MySQL", "Express.js"];

  return (
    <section id="about" className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center'>
          {" "}
          About Me
        </h2>
        <div className='glass rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all'>
          <p className='text-primary mb-6'>
            I’m a full-stack developer with experience building responsive and user-friendly web applications using React.js and TailwindCSS. On the backend, I’ve worked with tools like Node.js, and I’m comfortable connecting front-end interfaces with server-side logic and databases. I have a strong understanding of modern development practices, version control with Git, and experience collaborating on client projects using platforms like Shopify and WordPress. I thrive in fast-paced environments, adapt quickly to new technologies, and bring a problem-solving mindset to every project I work on. My attention to detail and ability to work independently or within a team make me a reliable and efficient contributor in any development setting.
          </p>

          <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-0.5 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-blue-600'>
                Frontend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-0.5 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-blue-600'>
                Backend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border-primary/20 hover:-translate-y-0.5 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-blue-600'>
                Education
              </h3>
              <ul className='list-disc list-inside text-primary space-y-2'>
                <li>
                  <strong> B.S. Computer Engineering</strong> - Polytechnic University of the Philippines
                </li>
                <li>
                  Relevant Courses: Javascript, TypeScript, Web Development, Data Structures
                </li>
              </ul>
          </div>
          <div className='p-6 rounded-xl border-white/20 hover:-translate-y-0.5 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-blue-600'>
                Work Experience
              </h3>
              <div className='space-y-4 text-primary'>
                <h4>
                  <strong>Technical Support</strong> at PTW (2023 - Present)
                </h4>
                <p>
                  I support a positive gaming experience by resolving player concerns, account issues, technical glitches, and refunds, while logging everything accurately in Zendesk.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
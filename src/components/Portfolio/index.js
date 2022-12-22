import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Enthusiast: Hobby-based social media site',
    github: 'https://github.com/shanicesauce/enthusiast',
    demo: 'https://afternoon-plateau-77681.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'DogFinder: Find the perfect dog for adoption',
    github: 'https://github.com/bsolis6878/Dog-Finder',
    demo: 'https://bsolis6878.github.io/Dog-Finder/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Just-Tech-News: Tech-based blog site',
    github: 'https://github.com/RobertMartinL/just-tech-news',
    // demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/RobertMartinL/Taskinator',
    // demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'LiftoSphere: Get healthier together',
    github: 'https://github.com/MarkAnthony9014/fitness-project-3',
    demo: 'https://pacific-retreat-64211.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coming Soon',
    github: 'https://github.com',
    // demo: ''
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
//export
export default Portfolio
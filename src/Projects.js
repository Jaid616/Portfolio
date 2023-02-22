import React from 'react'
import Project from './Project'
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRight'
import portfolio from "./images/portfolio.png"
import quiz from "./images/quiz.png"
export default function Projects() {

  document.title = "Jaidnasim-Projects-Page"
  return (
    <>
      <Project/>
      <ProjectRight 
               sourceCode = "https://github.com/Jaid616/Portfolio"
               link = "https://jaidnasim.000webhostapp.com"
               img = {portfolio}
               btn1= "React"
                btn2 = "JavaScript"
                btn3 = "CSS3"
               number = "04" 
               heading = "My Porfollio Site"
                discription="Got hold of this awesome library called React, (I consider it more as a framework) . Therefore had a try with this and made out a basic clean portfolio site out of it. Hope you all like it "/>
                <ProjectLeft 
                sourceCode = "https://github.com/Jaid616/Quiz_Game"
                link = "https://jaidnasim.000webhostapp.com/Quiz-Game/"
                img = {quiz}
                btn1= "HTML"
                btn2 = "CSS"
                btn3 = "JavaScript"
                number = "05" 
               heading = "Quiz Game"
                discription="The Quiz application is a collection of number of different types of quizzes like technical, games, sports, etc. A user can access/play all of the quiz and can attempt any of the one. There will be limited number of questions and for each correct answer user will get a credit score. User can see answers as well as"/>


    
    </>
  )
}

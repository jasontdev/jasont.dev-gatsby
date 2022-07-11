import * as React from "react"
import * as styles from "../styles/IndexPage.module.css";
import {Navbar} from "../components/Navbar";
import {Layout} from "../components/Layout";
import {Skill} from "../components/Skill";
import {Helmet} from "react-helmet";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jason Telfer - Brisbane IT student and enthusiast</title>
      </Helmet>
      <Navbar/>
      <main className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            Hi, I'm Jason, IT enthusiast and student from Brisbane, Australia.
          </div>
          <div className={styles.blurb}>
            After a long career retail, I committed to learning the skills needed
            to transition to the IT industry. Having since developed a solid
            understanding of the fundamentals of web development and cloud operations,
            I am excited to be ready to enter the IT industry.
          </div>
          <div className={styles.question}>What can I bring to your team?</div>
        </div>
        <Skill title={"Java and Javascript development"}>
          By learning the fundamentals of web application development with the
          Java and JavaScript languages, I have developed a solid understanding
          of front-ends, APIs, databases, troubleshooting and security practices.
        </Skill>
        <Skill title="Cloud deployment" light>
          I have deployed a number of applications onto the cloud
          including this
          site which is hosted on AWS S3 and served by CloudFront.
          I am working towards Amazon Web Service certification but would also
          like to learn Azure.
        </Skill>
        <Skill title="Security best practices">
          Having implemented authentication with a variety of approaches, including
          OAUTH2 and single-sign on, configured web servers and Virtual Private Clouds,
          I have gained an understanding of some of the key challenges and security best practices.
        </Skill>
        <Skill title="Linux" light>
          With years of Linux experience, I am comfortable installing and
          configuring web servers as well as working with in containerised testing
          and development environments.
        </Skill>
        <Skill title="Self-taught">
          My learning has largely been self-directed, with a focus on building
          things and RTFM. I{"'"}m endlessly curious about technology and how
          things work and expect to keep on growing my skills.
        </Skill>
        <Skill title="Problem solving" light>
          As my focus has been on learning by doing, I have developed a strong approach
          to problem solving, using a variety of tools and techniques to isolate and
          test solutions.<br/><br/>While the brute-force trial and error approach has its place,
          I've increasingly come to favour a calm and methodical approach.
        </Skill>
        <Skill title="Ready to collaborate">
          Being familiar with git, Github and maintaining an{" "}
          <a href="https://github.com/dracula/netbeans" className={styles.link}> open-source project</a>
          , I am comfortable understanding feedback from users and using the issue
          based approach to problem tracking.
        </Skill>
      </main>
    </Layout>
  )
}

export default IndexPage

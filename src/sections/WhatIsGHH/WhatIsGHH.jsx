import './WhatIsGHH.css'

function WhatIsGHH() {
  return (
    <section className="what-is-ghh" id="what-is-ghh">
      <div className="ghh-orbit ghh-orbit-left" aria-hidden="true" />
      <div className="ghh-orbit ghh-orbit-right" aria-hidden="true" />

      <div className="ghh-content">
        <div className="ghh-heading-row">

          <h1>
            What is <span>GHH?</span>
          </h1>

          <p className="ghh-intro">
            Girls Hoo Hack brings students together to build, learn, and create
            in a welcoming community where every level of experience belongs.
          </p>
        </div>


        <div className="ghh-sections">
          <article className="ghh-section">
            <h2>About Us</h2>

            <div className="ghh-section-copy">

              <p>
                Girls Who Code at UVA is one of the largest College Loops in
                the country, founded in 2020 and now 300+ members strong. As
                part of the national nonprofit, our mission is to close the
                gender gap in tech and support women and allies in computing
                through community, education, and empowerment.
              </p>

              <p>
                Girls Hoo Hack is an in-person 48-hour hackathon hosted by
                Girls Who Code at UVA that aims to foster a community of
                diverse thought and skill. Coders of all levels of experience
                have the opportunity to work together with teams and mentors,
                attend educational workshops, and code action-oriented projects
                that reflect innovation, diverse perspectives, and empowerment.
              </p>
            </div>
          </article>

          <article className="ghh-section">
            <h2>Our Mission</h2>

            <div className="ghh-section-copy">

              <p>
                Girls Who Code at the University of Virginia is an empowering
                and inclusive team of the next leaders in CS. GWC at UVA aims
                to close the gender gap in technology by creating opportunities
                for young women to explore technology.
              </p>

              <p>
                Together, we're breaking down barriers in the tech industry due
                to resource inequality, race, and gender biases. All skill
                levels are welcome. Come for the coding, stay for the community!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default WhatIsGHH
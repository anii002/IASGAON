import "./about.css";
const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row about-head">
          <div className="col-lg-12">
            <h1 className="mb-2 text-uppercase">About Us</h1>
            <p className="text-primary fw-500 mb-5">
              <i>
                Next Generation Institute for UPSC Civil Services Examination
                Preparation.
              </i>
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-7 row-eq-height">
            <img
              alt="about-us"
              className="w-100 h-100 img-fluid"
              src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/557400677401984450_image.jpeg"
            />
          </div>

          <div className="col-lg-5 row-eq-height">
            <div className="flex_img w-100">
              <div className="mb-3 w-100">
                <img
                  alt="Institute-NextIAS"
                  className="w-100 img-fluid"
                  src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/598285220649653100_image.jpeg"
                />
              </div>

              <div className="w-100">
                <img
                  alt="Institute-NextIAS"
                  className="w-100 img-fluid"
                  src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/488058189406350500_image.jpeg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-light rounded py-4 px-4 mt-5 shadow-sm">
          <p>
            IAS Gaon merges the ancient Guru-Shishya tradition with the ethos of
            social justice central to the Indian Constitution. This initiative
            strives to make civil services exam preparation accessible to all
            aspiring to serve the nation. Drawing on over a decade of insights
            from toppers and aspirants, IAS Gaon addresses students' needs,
            aspirations, and challenges, offering support through innovative
            solutions.
          </p>

          <p>
            We care more than the academic needs of the students. We care for
            thier psychological and emotional well being to handle the pressure
            of the most stressful situations of hyper competitive exam.
          </p>

          <p>
            Our institution is an intersection of experience of ex civil
            servants and well researched analysis of student’s challenges,
            hardship and their obstacles.
          </p>

          <p>
            We provide comprehensive, holistic solutions to make you evolve with
            your skills to clear civil service examinations, adhering strictly
            to bull’s eye need and demand of each and every stage of the civil
            service examinations .
          </p>

          <p>
          Our mentorship cum comprehensive NIV NIRMAN programs are crafted with a
holistic approach, ensuring thorough coverage of the syllabus while also honing
essential skills. Through personalized study plans, regular feedback, and
one-on-one guidance, we cultivate an environment that nurtures growth and
success. We are committed to equipping you not only with knowledge but also
with critical thinking, effective communication, and time management skills
necessary to excel in all stages of the examination. Trust us to be your partners
in achieving your aspirations.
          </p>

          {/* <p>
            We are committed to equipping you not only with knowledge but also
            with critical thinking, effective communication, and time management
            skills necessary to excel in all stages of the examination. Trust us
            to be your partners in achieving your aspirations.
          </p>

          <p>
            In addition to the classNameroom courses and Test Series, provision
            for an online learning platform – ‘Student’s Portal’, Live/Online
            classNameroom programs, Online Test Series, updated study
            books/material, Interview Guidance Program, Postal Course and much
            more, makes NEXT IAS – a preferred destination for many aspirants.
          </p> */}
        </div>

        <div className="rounded py-4 px-4 mt-5 shadow-sm mb-5">
          <h3 className="text-danger d-flex align-items-center mb-4">
            <img
              width="40"
              height="40"
              alt="Mission"
              className="me-2"
              src="https://cdnstatic.nextias.com/assets/images/icons/goal-arrow-hit.svg"
            />
            Our Mission
          </h3>

          <p>
            To produce the best civil servants who through their dynamic and
            unbiased approach can contribute to the success and growth of the
            nation. Preparing the aspirants for each stage of the examination by
            developing a sound academic base through practical, logical &amp;
            analytical approach clubbed with quality teaching &amp; individual
            attention. We ensure that the aspirants develop a competitive
            attitude amongst themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

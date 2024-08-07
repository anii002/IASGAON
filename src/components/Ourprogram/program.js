import "./program.css";
const Program = () => {
  return (
    <div className="container program-section" id="program-section">
      <div className="row program-head mb-5">
        <div className="col-lg-12">
          <h1 className="mb-1 text-uppercase">Our Programs</h1>
        </div>
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="cource-tab"
            data-bs-toggle="tab"
            data-bs-target="#cource"
            type="button"
            role="tab"
            aria-controls="cource"
            aria-selected="true"
          >
            PROGRAM
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="about-tab"
            data-bs-toggle="tab"
            data-bs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="false"
          >
            About UPSC
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="syllabus-tab"
            data-bs-toggle="tab"
            data-bs-target="#syllabus"
            type="button"
            role="tab"
            aria-controls="syllabus"
            aria-selected="false"
          >
            UPSC SYLLABUS FOR PRELIMS 2024
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            UP
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            UPSC syllabus for interview
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="cource"
          role="tabpanel"
          aria-labelledby="cource-tab"
        >
          <div
            className="tab-pane fade show active"
            id="nav-cource-tab"
            role="tablist"
            aria-labelledby="nav-cource-tab"
          >
            <div className="container mt-5">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>BATCH </th>
                    <th>DESCRIPTION</th>
                    <th>TARGET AUDIENCE</th>
                    <th>FEE (INR) </th>
                    <th>DURATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NIV NIRMAN Comprehensive Foundation</td>
                    <td>Comprehensive foundation batch</td>
                    <td>(GS) General aspirants</td>
                    <td>₹1,35,000/</td>
                    <td>52 weeks</td>
                  </tr>
                  <tr>
                    <td>Weekend NIV NIRMAN Foundation</td>
                    <td>
                      Foundation batch for college students and working
                      professionals
                    </td>
                    <td>College students and working professionals</td>
                    <td>₹1,80,000/</td>
                    <td>90 weeks</td>
                  </tr>
                  <tr>
                    <td>NIV NIRMAN Comprehensive Optional</td>
                    <td>
                      Optional batch for Political Science, International
                      Relations, and Public Administration
                    </td>
                    <td>Aspirants choosing these optional subjects</td>
                    <td>₹51,000/</td>
                    <td>12 weeks</td>
                  </tr>
                  <tr>
                    <td>Anushilan and Mulyamkan Test Series (Prelims)</td>
                    <td>Subject-wise and full-length tests for prelims</td>
                    <td>General aspirants</td>
                    <td>₹21,000/-</td>
                    <td>40 tests (20 subject-wise, 20 full-length)</td>
                  </tr>
                  <tr>
                    <td>Anushilan and Mulyamkan Test Series (Mains)</td>
                    <td>GS Mains test series</td>
                    <td>General aspirants</td>
                    <td>₹31,000/</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Essay Writing Kala Cource</td>
                    <td>Essay writing course with evaluation and feedback</td>
                    <td>General aspirants</td>
                    <td>₹11,000/</td>
                    <td>2 Months</td>
                  </tr>
                  <tr>
                    <td>One-on-One Mentorship (Prelims cum Mains)</td>
                    <td>Personalized mentorship for prelims and mains</td>
                    <td>Experienced students</td>
                    <td>₹31,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Mains Mentorship Batch</td>
                    <td>Personalized mentorship for mains</td>
                    <td>General aspirants</td>
                    <td>₹18,000/</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Prelims Mentorship Batch</td>
                    <td>Personalized mentorship for prelims</td>
                    <td>General aspirants</td>
                    <td>₹25,000/-</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className="container mt-5">
            <h6>
              UPSC Syllabus Covers Two Out Of The Three Stages Of Upsc Cse Exam
              2024 The Syllabus Fir The Interview Is Not Mentioned Explicity By
              The Upsc, The Details Of Upsc Syllabus Of Prelims And Mains Can Be
              Accessed Below. Since Each Stage Has A Different Syllabus, Let Us
              Look At UPSC Syllabus In Detail For Better Understanding.{" "}
            </h6>

            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Exam Stage</th>
                  <th>Paper to be Attempted</th>
                  <th>Total Marks</th>
                  <th>Syllabus</th>
                  <th>Nature of Exam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PRELIMS</td>
                  <td>
                    Paper 1: General Studies
                    <br /> Paper 2: CSAT
                  </td>
                  <td>
                    Paper 1: 200 <br /> Paper 2: 200
                  </td>
                  <td>
                    Indian Polity, <br /> Geography, <br /> History, <br />{" "}
                    Economy, <br /> Science and Technology,
                    <br /> Current Affairs,
                    <br /> Reading,
                    <br /> Comprehension,
                    <br /> Logical Reasoning,
                    <br /> Data Interpretation
                  </td>
                  <td>Need to Qualifying for Next Stage</td>
                </tr>
                <tr>
                  <td>MAINS</td>
                  <td>
                    Paper A : Indian Language
                    <br />
                    Paper B : English
                  </td>
                  <td>
                    Paper A: 300
                    <br />
                    Paper B: 300
                  </td>
                  <td>
                    Comprehension, precise writing,
                    <br />
                    short essays,
                    <br />
                    translation,
                    <br />
                    vocabulary etc.
                  </td>
                  <td>Need to Qualifying for Next Stage</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Essay</td>
                  <td>250</td>
                  <td>Not Specified</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    General Studies 1 <br /> General Studies 2 <br /> General
                    Studies 3
                    <br /> General Studies 4
                  </td>
                  <td>250x4</td>
                  <td>
                    History, <br />
                    Polity,
                    <br /> Geography,
                    <br /> Indian society,
                    <br /> InternationalRelations,
                    <br /> Social Justice,
                    <br /> Economy, <br />
                    DisasterManagement,
                    <br /> Internal Security,
                    <br /> Environment and Ecology,
                    <br /> Ethics,
                    <br /> Aptitude and Integrity
                  </td>
                  <td>Marks Considered For Merit List</td>
                </tr>
                <tr>
                  <td>Anushilan and Mulyamkan Test Series (Mains)</td>
                  <td>GS Mains test series</td>
                  <td>General aspirants</td>
                  <td>₹31,000/</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Optional Paper 1 Optional Paper 2</td>
                  <td>250 X 2</td>
                  <td>
                    Total 24 Optional Subjects,
                    <br /> Need to Select 1 Optional Paper
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Interview</td>
                  <td>----</td>
                  <td>275</td>
                  <td>Not Specified</td>
                  <td>Marks addedto Mainsmarks to prepare the merit list</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="syllabus"
          role="tabpanel"
          aria-labelledby="syllabus-tab"
        >
          <div className="container mt-5">
            <h6>
              Upsc Syllabus For Prelims Is Devided Into Two Papers General
              Studies And CSAT. The Overview Of UPSE SYLLABUS FOR PRELIMS 2024
              Is Given Below
            </h6>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Papers for UPSC Prelims</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies <br />
                    <i class="fas fa-arrow-right"></i> CSAT
                  </td>
                </tr>
                <tr>
                  <td>Total Marks</td>
                  <td>
                    {" "}
                    <i class="fas fa-arrow-right"></i> CSAT : 200 <br />{" "}
                    <i class="fas fa-arrow-right"></i> General Studies : 200
                  </td>
                </tr>
                <tr>
                  <td>Number of Questions</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies: 100{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT: 80
                  </td>
                </tr>
                <tr>
                  <td>Nature of Questions</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> MCQ T
                  </td>
                </tr>
                <tr>
                  <td>Marks Of Correct Answer</td>
                  <td>
                    <i class="fas fa-arrow-right"></i>General Studies : +2{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT : +2.5
                  </td>
                </tr>
                <tr>
                  <td>Marks Of incorrect Answer</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies : -0.66{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT : -0.83
                  </td>
                </tr>
                <tr>
                  <td>Syllabus For General Studues</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> Indian Polity <br />
                    <i class="fas fa-arrow-right"></i> Geography
                    <br />
                    <i class="fas fa-arrow-right"></i> History And Art And
                    Culture
                    <br />
                    <i class="fas fa-arrow-right"></i> Economy
                    <br />
                    <i class="fas fa-arrow-right"></i> Science And Technology
                    <br />
                    <i class="fas fa-arrow-right"></i> Environment And Ecology
                    <br />
                    <i class="fas fa-arrow-right"></i> International Relations
                    <br />
                    <i class="fas fa-arrow-right"></i> Current Affairs
                  </td>
                </tr>
                <tr>
                  <td>Syllabus For CSATs</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> Logical Reasoning <br />
                    <i class="fas fa-arrow-right"></i> Comprehension
                    <br />
                    <i class="fas fa-arrow-right"></i> Data interpretation
                    <br />
                    <i class="fas fa-arrow-right"></i> Quantitative Aptitude
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>PAPER NUMBER</th>
                  <th>PAPER NAME</th>
                  <th>NATURE OF PAPER</th>
                  <th>SUBJECT </th>
                  <th>MARKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PAPER A</td>
                  <td>Indian Language</td>
                  <td>Qualifying</td>
                  <td>
                    Compulsory Indian Language from 8th Schedule of the Indian
                    Constitution.
                  </td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>MAINS</td>
                  <td>
                    Paper A : Indian Language
                    <br />
                    Paper B : English
                  </td>
                  <td>
                    Paper A: 300
                    <br />
                    Paper B: 300
                  </td>
                  <td>
                    Comprehension, precise writing,
                    <br />
                    short essays,
                    <br />
                    translation,
                    <br />
                    vocabulary etc.
                  </td>
                  <td>Need to Qualifying for Next Stage</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Essay</td>
                  <td>250</td>
                  <td>Not Specified</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    General Studies 1 <br /> General Studies 2 <br /> General
                    Studies 3
                    <br /> General Studies 4
                  </td>
                  <td>250x4</td>
                  <td>
                    History, <br />
                    Polity,
                    <br /> Geography,
                    <br /> Indian society,
                    <br /> InternationalRelations,
                    <br /> Social Justice,
                    <br /> Economy, <br />
                    DisasterManagement,
                    <br /> Internal Security,
                    <br /> Environment and Ecology,
                    <br /> Ethics,
                    <br /> Aptitude and Integrity
                  </td>
                  <td>Marks Considered For Merit List</td>
                </tr>
                <tr>
                  <td>Anushilan and Mulyamkan Test Series (Mains)</td>
                  <td>GS Mains test series</td>
                  <td>General aspirants</td>
                  <td>₹31,000/</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    Optional Paper 1
                    <br /> Optional Paper 2
                  </td>
                  <td>250 X 2</td>
                  <td>
                    Total 24 Optional Subjects,
                    <br /> Need to Select 1 Optional Paper
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Interview</td>
                  <td>----</td>
                  <td>275</td>
                  <td>Not Specified</td>
                  <td>Marks addedto Mainsmarks to prepare the merit list</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

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
            className="nav-link active fw-bold"
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
            className="nav-link fw-bold"
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
            className="nav-link fw-bold"
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
            className="nav-link fw-bold"
            id="up-tab"
            data-bs-toggle="tab"
            data-bs-target="#up"
            type="button"
            role="tab"
            aria-controls="up"
            aria-selected="false"
          >
            UP
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fw-bold"
            id="upsc-tab"
            data-bs-toggle="tab"
            data-bs-target="#upsc"
            type="button"
            role="tab"
            aria-controls="upsc"
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
                    <th className="center-text">BATCH </th>
                    <th className="center-text">DESCRIPTION</th>
                    <th className="center-text">TARGET AUDIENCE</th>
                    <th className="center-text">FEE (INR) </th>
                    <th className="center-text">DURATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="center-text">
                      NIV NIRMAN Comprehensive Foundation
                    </td>
                    <td className="center-text">
                      Comprehensive foundation batch
                    </td>
                    <td className="center-text">(GS) General aspirants</td>
                    <td className="center-text">₹1,35,000/</td>
                    <td className="center-text">52 weeks</td>
                  </tr>
                  <tr>
                    <td className="center-text">
                      Weekend NIV NIRMAN Foundation
                    </td>
                    <td className="center-text">
                      Foundation batch for college students and working
                      professionals
                    </td>
                    <td className="center-text">
                      College students and working professionals
                    </td>
                    <td className="center-text">₹1,80,000/</td>
                    <td className="center-text">90 weeks</td>
                  </tr>
                  <tr>
                    <td className="center-text">
                      NIV NIRMAN Comprehensive Optional
                    </td>
                    <td className="center-text">
                      Optional batch for Political Science, International
                      Relations, and Public Administration
                    </td>
                    <td className="center-text">
                      Aspirants choosing these optional subjects
                    </td>
                    <td className="center-text">₹51,000/</td>
                    <td className="center-text">12 weeks</td>
                  </tr>
                  <tr>
                    <td className="center-text">
                      Anushilan and Mulyamkan Test Series (Prelims)
                    </td>
                    <td className="center-text">
                      Subject-wise and full-length tests for prelims
                    </td>
                    <td className="center-text">General aspirants</td>
                    <td className="center-text">₹21,000/-</td>
                    <td className="center-text">
                      40 tests (20 subject-wise, 20 full-length)
                    </td>
                  </tr>
                  <tr>
                    <td className="center-text">
                      Anushilan and Mulyamkan Test Series (Mains)
                    </td>
                    <td className="center-text">GS Mains test series</td>
                    <td className="center-text">General aspirants</td>
                    <td className="center-text">₹31,000/</td>
                    <td className="center-text"></td>
                  </tr>
                  <tr>
                    <td className="center-text">Essay Writing Kala Cource</td>
                    <td className="center-text">
                      Essay writing course with evaluation and feedback
                    </td>
                    <td className="center-text">General aspirants</td>
                    <td className="center-text">₹11,000/</td>
                    <td className="center-text">2 Months</td>
                  </tr>
                  <tr>
                    <td className="center-text">
                      One-on-One Mentorship (Prelims cum Mains)
                    </td>
                    <td className="center-text">
                      Personalized mentorship for prelims and mains
                    </td>
                    <td className="center-text">Experienced students</td>
                    <td className="center-text">₹31,000</td>
                    <td className="center-text"></td>
                  </tr>
                  <tr>
                    <td className="center-text">Mains Mentorship Batch</td>
                    <td className="center-text">
                      Personalized mentorship for mains
                    </td>
                    <td className="center-text">General aspirants</td>
                    <td className="center-text">₹18,000/</td>
                    <td className="center-text"></td>
                  </tr>
                  <tr>
                    <td className="center-text">Prelims Mentorship Batch</td>
                    <td className="center-text">
                      Personalized mentorship for prelims
                    </td>
                    <td className="center-text">General aspirants</td>
                    <td className="center-text">₹25,000/-</td>
                    <td className="center-text"></td>
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
                  <th className="center-text">Exam Stage</th>
                  <th className="center-text">Paper to be Attempted</th>
                  <th className="center-text">Total Marks</th>
                  <th className="center-text">Syllabus</th>
                  <th className="center-text">Nature of Exam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-text">PRELIMS</td>
                  <td className="center-text">
                    Paper 1: General Studies
                    <br /> Paper 2: CSAT
                  </td>
                  <td className="center-text">
                    Paper 1: 200 <br /> Paper 2: 200
                  </td>
                  <td className="center-text">
                    Indian Polity, <br /> Geography, <br /> History, <br />{" "}
                    Economy, <br /> Science and Technology,
                    <br /> Current Affairs,
                    <br /> Reading,
                    <br /> Comprehension,
                    <br /> Logical Reasoning,
                    <br /> Data Interpretation
                  </td>
                  <td className="center-text">
                    Need to Qualifying for Next Stage
                  </td>
                </tr>
                <tr>
                  <td className="center-text">MAINS</td>
                  <td className="center-text">
                    Paper A : Indian Language
                    <br />
                    Paper B : English
                  </td>
                  <td className="center-text">
                    Paper A: 300
                    <br />
                    Paper B: 300
                  </td>
                  <td className="center-text">
                    Comprehension, precise writing,
                    <br />
                    short essays,
                    <br />
                    translation,
                    <br />
                    vocabulary etc.
                  </td>
                  <td className="center-text">
                    Need to Qualifying for Next Stage
                  </td>
                </tr>
                <tr>
                  <td className="center-text"></td>
                  <td className="center-text">Essay</td>
                  <td className="center-text">250</td>
                  <td className="center-text">Not Specified</td>
                  <td className="center-text"></td>
                </tr>
                <tr>
                  <td className="center-text"></td>
                  <td className="center-text">
                    General Studies 1 <br /> General Studies 2 <br /> General
                    Studies 3
                    <br /> General Studies 4
                  </td>
                  <td className="center-text">250x4</td>
                  <td className="center-text">
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
                  <td className="center-text">
                    Marks Considered For Merit List
                  </td>
                </tr>
                <tr>
                  <td className="center-text">
                    Anushilan and Mulyamkan Test Series (Mains)
                  </td>
                  <td className="center-text">GS Mains test series</td>
                  <td className="center-text">General aspirants</td>
                  <td className="center-text">₹31,000/</td>
                  <td className="center-text"></td>
                </tr>
                <tr>
                  <td className="center-text"></td>
                  <td className="center-text">
                    Optional Paper 1 Optional Paper 2
                  </td>
                  <td className="center-text">250 X 2</td>
                  <td className="center-text">
                    Total 24 Optional Subjects,
                    <br /> Need to Select 1 Optional Paper
                  </td>
                  <td className="center-text"></td>
                </tr>
                <tr>
                  <td className="center-text">Interview</td>
                  <td className="center-text">----</td>
                  <td className="center-text">275</td>
                  <td className="center-text">Not Specified</td>
                  <td className="center-text">
                    Marks addedto Mainsmarks to prepare the merit list
                  </td>
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
                  <td className="center-text">Papers for UPSC Prelims</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies <br />
                    <i class="fas fa-arrow-right"></i> CSAT
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Total Marks</td>
                  <td>
                    {" "}
                    <i class="fas fa-arrow-right"></i> CSAT : 200 <br />{" "}
                    <i class="fas fa-arrow-right"></i> General Studies : 200
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Number of Questions</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies: 100{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT: 80
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Nature of Questions</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> MCQ T
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Marks Of Correct Answer</td>
                  <td>
                    <i class="fas fa-arrow-right"></i>General Studies : +2{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT : +2.5
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Marks Of incorrect Answer</td>
                  <td>
                    <i class="fas fa-arrow-right"></i> General Studies : -0.66{" "}
                    <br />
                    <i class="fas fa-arrow-right"></i> CSAT : -0.83
                  </td>
                </tr>
                <tr>
                  <td className="center-text">Syllabus For General Studues</td>
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
                  <td className="center-text">Syllabus For CSATs</td>
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
                  <th className="center-text">PAPER NUMBER</th>
                  <th className="center-text">PAPER NAME</th>
                  <th className="center-text">NATURE OF PAPER</th>
                  <th className="center-text">SUBJECT </th>
                  <th className="center-text">MARKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-text">PAPER A</td>
                  <td className="center-text">Indian Language</td>
                  <td className="center-text">Qualifying</td>
                  <td className="center-text">
                    Compulsory <br /> Indian Language <br /> from 8th <br />
                    Schedule of
                    <br /> the Indian
                    <br /> Constitution.
                  </td>
                  <td className="center-text">300</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER B</td>
                  <td className="center-text">English</td>
                  <td className="center-text">Qualifying</td>
                  <td className="center-text">
                    English <br />
                    Language
                  </td>
                  <td className="center-text">300</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 1</td>
                  <td className="center-text">Essay</td>
                  <td className="center-text">
                    Considered for
                    <br /> Merit Calculation
                  </td>
                  <td className="center-text">
                    Candidates Are Required ToWrite
                    <br />
                    Two Essays,
                    <br />
                    Covering a Broad
                    <br />
                    Range Of Subjects,
                    <br />
                    Including:
                    <br />
                    Socio-political,
                    <br />
                    Economic Issues,
                    <br />
                    Environmental
                    <br />
                    Issues,
                    <br />
                    International
                    <br />
                    Relations,
                    <br />
                    Science And
                    <br />
                    Technology,
                    <br />
                    Philosophical
                    <br />
                    Topics, Etc
                  </td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 2</td>
                  <td className="center-text">General Studies 1</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">
                    Geography
                    <br />
                    History
                    <br />
                    Indian Heritage
                    <br />
                    and Culture
                    <br />
                    Social Issues
                  </td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 3</td>
                  <td className="center-text">General Studies 2</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">
                    Polity and
                    <br />
                    Governance
                    <br />
                    Constitution
                    <br />
                    Social Justice
                    <br />
                    International
                    <br />
                    Relations
                  </td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 4</td>
                  <td className="center-text">General Studies 3</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">
                    Economy and
                    <br />
                    Growth
                    <br />
                    Science and
                    <br />
                    Technology
                    <br />
                    Environment and
                    <br />
                    Ecology Disaster
                    <br />
                    Management
                    <br />
                    Internal Security
                  </td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 5</td>
                  <td className="center-text">General Studies 4</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">
                    Ethics, Integrity
                    <br />
                    and Aptitude
                  </td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 6</td>
                  <td className="center-text">Optional paper 1</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">NA</td>
                  <td className="center-text">250</td>
                </tr>
                <tr>
                  <td className="center-text">PAPER 7</td>
                  <td className="center-text">Optional paper2</td>
                  <td className="center-text">
                    Considered
                    <br />
                    for Merit
                    <br />
                    Calculation
                  </td>
                  <td className="center-text">
                    Ethics, Integrity
                    <br />
                    and Aptitude
                  </td>
                  <td className="center-text">250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="up"
          role="tabpanel"
          aria-labelledby="up-tab"
        >
          <div className="container mt-5">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="center-text">PAPER NAME</th>
                  <th className="center-text">SYLLABUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-text">General Studies 1</td>
                  <td className="center-text">
                    History, Geography, Art and Culture,
                    <br />
                    Indian Society.
                  </td>
                </tr>
                <tr>
                  <td className="center-text">General Studies 2</td>
                  <td className="center-text">
                    Indian Polity, Governance, Social Justice,
                    <br />
                    International Relations.
                  </td>
                </tr>
                <tr>
                  <td className="center-text">General Studies 3</td>
                  <td className="center-text">
                    Economy and Growth,
                    <br />
                    Science and Technology,
                    <br />
                    Environment and Ecology,
                    <br />
                    Disaster Management,
                    <br />
                    Internal Security. Indian Society.
                  </td>
                </tr>
                <tr>
                  <td className="center-text">General Studies 4</td>
                  <td className="center-text">Ethics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="upsc"
          role="tabpanel"
          aria-labelledby="upsc-tab"
        >
          <div className="container mt-5">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="center-text">UPSC Syllabus For Interview</th>
                  <th className="center-text">Not Specified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-text fw-bolder ">Total Marks</td>
                  <td className="center-text">275</td>
                </tr>
                <tr>
                  <td className="center-text fw-bolder">Locations</td>
                  <td className="center-text">
                    Union Public Service Commission
                    <br />
                    Head Office, New Delhi
                  </td>
                </tr>
                <tr>
                  <td className="center-text fw-bolder">Dress Code</td>
                  <td className="center-text">Formal Attire</td>
                </tr>
              </tbody>
            </table>
            <h6 className="fw-bold">Part A - Preliminary Examination</h6>
            <div className="col-lg-12 row">
              <div className="col-lg-6">
                <p className="fw-semibold">
                  Paper I - (200 marks) Duration: Two hours
                </p>
                <p>Current events of national and international importance.</p>
                <p>History of India and Indian National Movement.</p>
                <p>
                  Indian and World Geography-Physical, Social, Economic
                  Geography of India and the World.
                </p>
                <p>
                  Indian Polity and Governance-Constitution, Political System,
                  Panchayati Raj, Public Policy, Rights Issues, etc.
                </p>
                <p>
                  Economic and Social Development-Sustainable Development,
                  Poverty, Inclusion, Demographics, Social Sector Initiatives,
                  etc..
                </p>
                <p>
                  General issues on Environmental ecology, Bio-diversity and
                  Climate Change - that do not require subject specialization.
                </p>
                <p>General Science.</p>
              </div>
              <div className="col-lg-6">
                <p className="fw-semibold">Paper 2</p>
                <p>Comprehension</p>
                <p>Interpersonal skills including communication skills</p>
                <p>Logical reasoning and analytical ability</p>
                <p>Decision making and problem solving</p>
                <p>General mental ability</p>
                <p>
                  Basic numeracy (numbers and their relations, orders of
                  magnitude, etc.) (Class X level), Data interpretation (charts,
                  graphs, tables, data sufficiency etc. — Class X level)
                </p>
                <p>
                  <span className="fw-semibold">Note 1 : </span>Paper-II of the
                  Civil Services (Preliminary) Examination will be a qualifying
                  paper with minimum qualifying marks fixed at 33%..
                </p>
                <p>
                  <span className="fw-semibold">Note 2 : </span>The questions
                  will be of multiple choice, objective type.
                </p>
                <p>
                  <span className="fw-semibold">Note 3 : </span> It is mandatory
                  for the candidate to appear in both the Papers of Civil
                  Services (Prelim) Examination for the purpose of evaluation.
                  Therefore a candidate will be disqualified in case he/she does
                  not appear in both the papers of Civil Services (Prelim)
                  Examination.
                </p>
              </div>
            </div>

            <div>
              <h6 className="fw-bold">
                Syllabi of the papers included in the scheme of Civil Services
                (Main) Examination are given as follows :—
              </h6>
              <p className="fw-semibold">
                QUALIFYING PAPERS ON INDIAN LANGUAGES AND ENGLISH
              </p>
              <p>
                The aim of the paper is to test the candidates' ability to read
                and understand serious discursive prose, and to express ideas
                clearly and correctly, in English and Indian language concerned.
              </p>
              <div className="row col-lg-12 ">
                <div className="col-lg-6">
                  <p className="fw-bold">
                    The pattern of questions would be broadly as follows :
                  </p>
                  <p>(i) Comprehension of given passages.</p>
                  <p>(ii) Precis Writing. </p>
                  <p>(iii) Usage and Vocabulary.</p>
                  <p>(iv) Short Essays.</p>
                </div>

                <div className="col-lg-6">
                  <p className="fw-bold">Indian Languages :—</p>
                  <p>(i) Comprehension of given passages.</p>
                  <p>(ii) Precis Writing. </p>
                  <p>(iii) Usage and Vocabulary.</p>
                  <p>(iv) Short Essays.</p>
                  <p>
                    (v) Translation from English to the Indian Language and
                    vice-versa.
                  </p>
                </div>
              </div>
              <p>
                <span className="fw-semibold">Note 1 :</span> The papers on
                Indian Languages and English will be of Matriculation or
                equivalent standard and will be of qualifying nature only. The
                marks obtained in these papers will not be counted for ranking
              </p>
              <p>
                <span className="fw-semibold">Note 2 : </span>The candidates
                will have to answer the English and Indian Languages papers in
                English and the respective Indian language (except where
                translation is involved).
              </p>
              <div className="row col-lg-12 ">
                <div className="col-lg-6">
                  <h6>PAPER-I</h6>
                  <p className="fw-semibold">Essay:</p>
                  <p>
                    Candidates may be required to write essays on multiple
                    topics. They will be expected to keep closely to the subject
                    of the essay to arrange their ideas in orderly fashion, and
                    to write concisely. Credit will be given for effective and
                    exact expression.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h6>PAPER-II</h6>
                  <p>
                    <span className="fw-semibold">General Studies-I: </span>
                    Indian Heritage and Culture, History and Geography of the
                    World and Society
                  </p>
                  <p>
                    Indian culture will cover the salient aspects of Art Forms,
                    literature and Architecture from ancient to modern times.
                  </p>
                  <p>
                    Modern Indian history from about the middle of the
                    eighteenth century until the presentsignificant events,
                    personalities, issues
                  </p>
                  <p className="fw-semibold">The Freedom Struggle —</p>
                  <p>
                    its various stages and important contributors/contributions
                    from different parts of the country
                  </p>
                  <p>
                    Post-independence consolidation and reorganization within
                    the country.
                  </p>
                  <p>
                    Government strives to have a workforce which reflects gender
                    balance and women candidates are encouraged to apply.
                  </p>
                  <p>
                    History of the world will include events from 18th century
                    such as industrial revolution, world wars, redrawal of
                    national boundaries, colonization, decolonization, political
                    philosophies like communism, capitalism, socialism etc.—
                    their forms and effect on the society.
                  </p>
                  <p>Salient features of Indian Society, Diversity of India.</p>
                  <p>
                    Role of women and women’s organization, population and
                    associated issues, poverty and developmental issues,
                    urbanization, their problems and their remedies.
                  </p>
                  <p>Effects of globalization on Indian society.</p>
                  <p>
                    Social empowerment, communalism, regionalism & secularism.
                  </p>
                  <p>Salient features of world’s physical geography</p>
                  <p>
                    Distribution of key natural resources across the world
                    (including South Asia and the Indian sub- continent);
                    factors responsible for the location of primary, secondary,
                    and tertiary sector industries in various parts of the world
                    (including India).
                  </p>
                  <p>
                    Important Geophysical phenomena such as earthquakes,
                    Tsunami, Volcanic activity, cyclone etc., geographical
                    features and their location-changes in critical geographical
                    features (including water-bodies and ice-caps) and in flora
                    and fauna and the effects of such changes.
                  </p>
                </div>
              </div>
              <div className="row col-lg-12 ">
                <div className="col-lg-6">
                  <h6>PAPER-III</h6>
                  <p className="fw-semibold">General Studies- II:</p>
                  <p>
                    Governance, Constitution, Polity, Social Justice and
                    International relations
                  </p>
                  <p className="fw-semibold">Indian Constitution—</p>
                  <p>
                    Historical underpinnings, evolution, features, amendments,
                    significant provisions and basic structure.
                  </p>
                  <p>
                    Functions and responsibilities of the Union and the States,
                    issues and challenges pertaining to the federal structure,
                    devolution of powers and finances up to local levels and
                    challenges therein.
                  </p>
                  <p>
                    Separation of powers between various organs dispute
                    redressal mechanisms and institutions.
                  </p>
                  <p>
                    Comparison of the Indian constitutional scheme with that of
                    other countries
                  </p>
                  <p>
                    Parliament and State legislatures—structure, functioning,
                    conduct of business, powers & privileges and issues arising
                    out of these.
                  </p>
                  <p>
                    Structure, organization and functioning of the Executive and
                    the Judiciary—Ministries and Departments of the Government;
                    pressure groups and formal/informal associations and their
                    role in the Polity.
                  </p>
                  <p>Salient features of the Representation of People’s Act.</p>
                  <p>
                    Appointment to various Constitutional posts, powers,
                    functions and responsibilities of various Constitutional
                    Bodies.
                  </p>
                  <p>Statutory, regulatory and various quasi-judicial bodies</p>
                  <p>
                    Government policies and interventions for development in
                    various sectors and issues arising out of their design and
                    implementation.
                  </p>
                  <p>
                    <span className="fw-semibold">
                      Development processes and the development industry —
                    </span>{" "}
                    the role of NGOs, SHGs, various groups and associations,
                    donors, charities, institutional and other stakeholders.
                  </p>
                  <p>
                    Welfare schemes for vulnerable sections of the population by
                    the Centre and States and the Government strives to have a
                    workforce which reflects gender balance and women candidates
                    are encouraged to apply.
                  </p>
                  <p>
                    Performance of these schemes; mechanisms, laws, institutions
                    and Bodies constituted for the protection and betterment of
                    these vulnerable sections
                  </p>
                  <p>
                    Issues relating to development and management of Social
                    Sector/Services relating to Health, Education, Human
                    Resources.
                  </p>
                  <p>Issues relating to poverty and hunger.</p>
                  <p>
                    Important aspects of governance, transparency and
                    accountability, e-governanceapplications, models, successes,
                    limitations, and potential; citizens charters, transparency
                    & accountability and institutional and other measures.
                  </p>
                  <p>Role of civil services in a democracy.</p>
                  <p>India and its neighborhood- relations.</p>
                  <p>
                    Bilateral, regional and global groupings and agreements
                    involving India and/or affecting India’s interests.
                  </p>
                  <p>
                    Effect of policies and politics of developed and developing
                    countries on India’s interests, Indian diaspora.
                  </p>
                  <p>
                    Important International institutions, agencies and fora-
                    their structure, mandate. PAPER-IV
                  </p>

                  <p className="fw-semibold">General Studies-III:</p>
                  <p>
                    Technology, Economic Development, Bio diversity,
                    Environment, Security and Disaster Management.
                  </p>
                  <p>
                    Indian Economy and issues relating to planning,
                    mobilization, of resources, growth, development and
                    employment.
                  </p>
                  <p>
                    Inclusive growth and issues arising from it.
                    <br />
                    Government Budgeting.
                  </p>
                  <p>
                    Major crops-cropping patterns in various parts of the
                    country, - different types of irrigation and irrigation
                    systems storage, transport and marketing of agricultural
                    produce and issues and related constraints; e-technology in
                    the aid of farmers.
                  </p>
                  <p>
                    Issues related to direct and indirect farm subsidies and
                    minimum support prices; Public Distribution System-
                    objectives, functioning, limitations, revamping; issues of
                    buffer stocks and food security; Technology missions;
                    economics of animal-rearing. Food processing and related
                    industries in India- scope’ and significance, location,
                    upstream and downstream requirements, supply chain
                    management.
                  </p>
                  <p>
                    Land reforms in India.
                    <br />
                    Effects of liberalization on the economy, changes in
                    industrial policy and their effects on industrialgrowth.
                    <br />
                    Infrastructure: Energy, Ports, Roads, Airports, Railways
                    etc.
                    <br />
                    Investment models.
                  </p>
                  <p>
                    Science and Technology- developments and their applications
                    and effects in everyday life.
                    <br />
                    Achievements of Indians in science & technology;
                    indigenization of technology and developing new technology.
                  </p>
                  <p>
                    Awareness in the fields of IT, Space, Computers, robotics,
                    nano-technology, bio-technology and issues relating to
                    intellectual property rights
                  </p>
                  <p>
                    Conservation, environmental pollution and degradation,
                    environmental impact assessment.
                  </p>
                  <p>
                    Disaster and disaster management.
                    <br />
                    Linkages between development and spread of extremism.
                    <br />
                    Role of external state and non-state actors in creating
                    challenges to internal security.
                  </p>
                  <p>
                    Challenges to internal security through communication
                    networks, role of media and social networking sites in
                    internal security challenges, basics of cyber security;
                    money-laundering and its prevention
                  </p>
                  <p>
                    Security challenges and their management in border areas -
                    linkages of organized crime with terrorism.
                    <br />
                    Various Security forces and agencies and their mandate.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <span className="fw-semibold">
                      PAPER-V General Studies- IV:
                    </span>{" "}
                    Ethics, Integrity and Aptitude
                  </p>
                  <p>
                    This paper will include questions to test the candidates’
                    attitude and approach to issues relating to integrity,
                    probity in public life and his problem solving approach to
                    various issues and conflicts faced by him in dealing with
                    society. Questions may utilise the case study approach to
                    determine these aspects. The following broad areas will be
                    covered :
                  </p>
                  <p>
                    Ethics and Human Interface: Essence, determinants and
                    consequences of Ethics in-human actions; dimensions of
                    ethics; ethics - in private and public relationships. Human
                    Values - lessons from the lives and teachings of great
                    leaders, reformers and administrators; role of family
                    society and educational institutions in inculcating values.
                  </p>
                  <p>
                    Attitude: content, structure, function; its influence and
                    relation with thought and behaviour; moral and political
                    attitudes; social influence and persuasion.
                  </p>
                  <p>
                    Aptitude and foundational values for Civil Service,
                    integrity, impartiality and non-partisanship, objectivity,
                    dedication to public service, empathy, tolerance and
                    compassion towards the weaker-sections
                  </p>
                  <p>
                    Emotional intelligence-concepts, and their utilities and
                    application in administration and governance.
                    <br />
                    Contributions of moral thinkers and philosophers from India
                    and world.
                  </p>
                  <p>
                    Public/Civil service values and Ethics in Public
                    administration: Status and problems; ethical concerns and
                    dilemmas in government and private institutions; laws,
                    rules, regulations and conscience as sources of ethical
                    guidance; accountability and ethical governance;
                    strengthening of ethical and moral values in governance;
                    ethical issues in international relations and funding;
                    corporate governance.
                  </p>
                  <p>
                    Probity in Governance: Concept of public service;
                    Philosophical basis of governance and probity; Information
                    sharing and transparency in government, Right to
                    Information, Codes of Ethics, Codes of Conduct, Citizen’s
                    Charters, Work culture, Quality of service delivery,
                    Utilization of public funds, challenges of corruption.
                  </p>
                  <p>
                    Case Studies on above issues.
                    <br />
                    Government strives to have a workforce which reflects gender
                    balance and women candidates are encouraged to apply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

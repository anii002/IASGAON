import "./program.css";
const Program = () => {
  return (
    <div className="container program-section" id="program-section">
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
            Our Program
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
            reviews
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
            review3
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
            reviews2
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
            reviews1
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
              <h2 className="mb-4">Course Offerings</h2>
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Target Audience</th>
                    <th>Fee (INR)</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Comprehensive Foundation Batch</td>
                    <td>Detailed course covering all subjects</td>
                    <td>Beginners</td>
                    <td>₹21,000</td>
                    <td>90 weeks</td>
                  </tr>
                  <tr>
                    <td>Weekend Foundation Batch</td>
                    <td>Weekend classes for working professionals</td>
                    <td>Working Professionals</td>
                    <td>₹15,000</td>
                    <td>60 weeks</td>
                  </tr>
                  <tr>
                    <td>Political Science Optional Orientation Program</td>
                    <td>Specialized course for Political Science</td>
                    <td>Optional Subject Students</td>
                    <td>₹10,000</td>
                    <td>12 weeks</td>
                  </tr>
                  <tr>
                    <td>Prelims Test Series (Anushilan)</td>
                    <td>Mock tests for prelims preparation</td>
                    <td>All Aspirants</td>
                    <td>₹5,000</td>
                    <td>12 weeks</td>
                  </tr>
                  <tr>
                    <td>Mains Test Series (Manthan)</td>
                    <td>Mock tests for mains preparation</td>
                    <td>All Aspirants</td>
                    <td>₹7,000</td>
                    <td>12 weeks</td>
                  </tr>
                  <tr>
                    <td>Essay Writing Course on One-on-One Mentorship Basis</td>
                    <td>Personalized essay writing guidance</td>
                    <td>All Aspirants</td>
                    <td>₹3,000</td>
                    <td>12 weeks</td>
                  </tr>
                  <tr>
                    <td>Prelims Mentorship Batch</td>
                    <td>Guidance and mentorship for prelims</td>
                    <td>All Aspirants</td>
                    <td>₹8,000</td>
                    <td>12 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          reviwes
        </div>
      </div>
    </div>
  );
};

export default Program;

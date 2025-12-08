// src/components/pages/Education.js
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";

const Education = () => {
  // Fetch data from the Strapi 'educations' collection type, sorted by graduation date descending
  const {
    data: educationData,
    loading,
    error,
  } = useFetch("/educations?sort=graduationDate:desc");

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-danger container">Error loading education data.</p>
    );

  return (
    <section id="education" className="container my-5">
      <h2 className="text-center text-secondary">🎓 Education</h2>
      <div className="row justify-content-center">
        {educationData.map((item) => (
          <div key={item.id} className="col-md-8 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                {/* Data fields retrieved from Strapi attributes */}
                <h4 className="card-title font-weight-bold text-secondary">
                  {item.degree}
                </h4>
                <h5 className="card-subtitle mb-2 text-muted">
                  {item.institution}
                </h5>
                <p className="card-text">
                  <span className="font-weight-light">Major:</span> {item.major}
                </p>
                <p className="card-text small text-info">
                  Graduation Date: {item.graduationDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;

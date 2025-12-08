// src/components/pages/Experience.js (Bootstrap Cards)
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Experience = () => {
  const {
    data: experiences,
    loading,
    error,
  } = useFetch("/experiences?sort=startDate:desc");

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-danger container">Error loading experience data.</p>
    );

  return (
    <section
      id="experience"
      className="container bg-white shadow-sm p-4 rounded my-5"
    >
      <h2 className="text-center text-primary">💼 Work Experience</h2>
      <div className="row justify-content-center">
        {experiences.map((item) => (
          <div key={item?.id} className="col-md-10 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-info">{item.company}</h6>
                <p className="card-text small text-muted">
                  {item.startDate} - {item.endDate || "Present"}
                </p>
                <BlocksRenderer content={item.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;

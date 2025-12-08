// src/components/pages/About.js (Bootstrap Card and Utilities)
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
const About = () => {
  const { data: aboutData, loading, error } = useFetch("/about?populate=*");

  // 1. Check Loading State
  if (loading) return <Loading />;

  // 2. Check Error State
  if (error)
    return <p className="text-danger container">Error loading about data.</p>;

  // 3. VITAL CHECK: Ensure data exists before accessing properties (This fixes your crash)
  if (!aboutData)
    return (
      <p className="text-muted container">
        About Me content is not available or published in Strapi.
      </p>
    );

  const { bio, profilePicture, occupation, experience, company, resumeLink } =
    aboutData || {};
  const imgUrl = profilePicture
    ? `http://localhost:1337${profilePicture.url}`
    : "default-avatar.png";

  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="card shadow-lg  mb-4">
            <div className="card-body text-center">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={imgUrl}
                  alt="Profile"
                  className="rounded-circle border border-info mb-3"
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  {occupation} | {company} | {experience}
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 mb-1"
                    onClick={() => {
                      if (resumeLink) {
                        window.open(resumeLink, "_blank");
                      }
                    }}
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h2 className="display-5 mb-4">👋 Hello, I am Vikram</h2>
              <div className="d-flex flex-column align-items-center">
                <div className="w-100 mt-3">
                  {/* Render HTML content from Strapi Rich Text field */}
                  <BlocksRenderer content={bio} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

import React from "react";

const DetailsofReps = ({ repoInfo }) => {
  const { details, detailsLoading } = repoInfo;
  if (detailsLoading) {
    return <h6 className="loader">Loading...</h6>;
  }
  return (
    <div>
      {details ? (
        <div className="card mt-3" style={{ minWidth: "12rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {details?.name}</li>
            <li className="list-group-item">Language: {details?.language}</li>
            <li className="list-group-item">Time Of Creation: {details?.created_at}</li>
            <li className="list-group-item">
              Repo Link:{" "}
              <a href={details?.html_url} target="blank">
                Repository link
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DetailsofReps;

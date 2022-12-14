import React from "react";


const UserProfileinfo = ({ info }) => { 
  return (
    <div className="container  h-100 ">
      <div className="row  h-100 d-flex align-items-center">
        <div className="col-12 ">
          <div className="card bg-dark text-bg-dark rounded">
            <div className="card-body text-center">
              <div className="mt-3 mb-4">
                <img
                  src={info?.avatar_url}
                  className="rounded-circle img-fluid"
                  style={{ width: "100px" }}
                  alt="pp"
                />
              </div>
              <h4 className="mb-2">{info?.login}</h4>
              <p className="text-muted ">{info?.bio}</p>
              <p className="text-muted ">{info?.location}</p>

              <a
                href={info?.html_url}
                target="blank"
                className="btn btn-primary btn-rounded btn-lg"
              >
                Visit Profile
              </a>
              <div className="d-flex justify-content-between text-center mt-5 p-2">
                <div>
                  <p className="mb-2 h5">{info?.followers}</p>
                  <p className="text-muted mb-0">Followers</p>
                </div>
                <div className="">
                  <p className="mb-2 h5">{info?.following}</p>
                  <p className="text-muted mb-0">Following</p>
                </div>
                <div>
                  <p className="mb-2 h5">{info?.public_repos}</p>
                  <p className="text-muted mb-0">Repositories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileinfo;

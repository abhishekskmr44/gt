import axios from "axios";
import React, { useState } from "react";
import Paginating from "./Paginating";
import DetailsofReps from "./DetailsofReps";
import loadingGif from '../assets/loading.svg'

const PaginatingRepos = ({ pagiData }) => {
  const { loading, repos, repoUrl } = pagiData;
  const [reposPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [details, setDetails] = useState("");
  const [detailsLoading, setDetailsLoading] = useState(false);
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / reposPerPage);

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${repoUrl}/${repoName}`,
    }).then((res) => {
     
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center ">
          <img src={loadingGif} alt="loading..." /> 
        </div>
      ) : (
        <div className="row  d-flex justify-content-center flex-wrap" >
          <div className="col-sm-8 bg-light rounded " style={{minHeight:"32rem", }} >
            <h3 className="text-center" >Repositories</h3>
            <table className="table table-bordered" >
              <thead className="table-light">
                <tr>
                  <th scope="col">Sl no</th>
                  <th scope="col">Name of the Repository</th>
                  <th scope="col ">Details</th>
                </tr>
              </thead>
              {currentRepos?.map((repos, index) => (
                <tbody key={repos.id}>
                  <tr>
                    <th scope="row">{currentPage * 8 + index - 7}</th>
                    <td>{repos.name}</td>
                    <td className="text-center  " >
                      <p 
                        className="btn btn-primary  m-0"
                        onClick={() => getDetails(repos.name)}
                      >
                        Details
                      </p>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="d-flex justify-content-center mt-3 ">
              <Paginating pages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
          </div>
          <div className="col-sm-4 ">
            <DetailsofReps repoInfo={{details, detailsLoading}}  />
          </div>
        </div>
      )}
    </>
  );
};

export default PaginatingRepos;

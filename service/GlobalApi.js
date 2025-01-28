import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/", // JSON Server's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

const CreateNewResume = (data) => axiosClient.post("/resumes", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get("/resumes?userEmail=" + userEmail);

const UpdateResumeDetail = (id, data) =>
  axiosClient.put("/resumes/" + id, data);

const GetResumeById = (id) => axiosClient.get("/resumes/" + id);

const DeleteResumeById = (id) => axiosClient.delete("/resumes/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};

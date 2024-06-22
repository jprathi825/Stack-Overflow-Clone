import  axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000"})
const apI = axios.create({ baseURL: "http://localhost:5000"})

apI.interceptors.request.use((req) =>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
})

export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signup',authData);
export const sendEmail = (email) => API.post('/user/sendEmail',email);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/Get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id,value,userId) => API.patch(`/questions/vote/${id}`,{value,userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`,{answerId, noOfAnswers})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id,updateData) => apI.patch(`/user/update/${id}`,updateData)
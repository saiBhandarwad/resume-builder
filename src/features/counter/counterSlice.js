import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  middleName: '',
  lastName: '',
  city: '',
  state: '',
  country: '',
  phone:'',
  email:'',
  objective:'',
  template:'',
  achievements:[],
  experiences:[],
  skills:[],
  project:[],
  education:[],
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    firstName: (state,action) => {
      state.firstName=action.payload
    },
    middleName: (state,action) => {
      state.middleName=action.payload
    },
    lastName: (state,action) => {
      state.lastName=action.payload
    },
    city: (state,action) => {
      state.city=action.payload
    },
    state: (state,action) => {
      state.state=action.payload
    },
    country: (state,action) => {
      state.country=action.payload
    },
    phone: (state,action) => {
      state.phone=action.payload
    },
    email: (state,action) => {
      state.email=action.payload
    },
    objective: (state,action) => {
      state.objective=action.payload
    },
    template: (state,action) => {
      state.template=action.payload
    },
    achievement: (state,action) => {
      state.achievements.push({id:action.payload.id, title:action.payload.title, description:action.payload.description})
    },
    deleteAchievement:(state,action)=>{
      state.achievements.splice(action.payload,1)
    },
    experience: (state,action) => {
      state.experiences.push({id:action.payload.id, title:action.payload.title, description:action.payload.description})
    },
    deleteExperience:(state,action)=>{
      state.experiences.splice(action.payload,1)
    },
    skills: (state,action) => {
      state.skills.push(action.payload)
    },
    deleteSkill:(state,action)=>{
      state.skills.splice(action.payload,1)
    },
    project:(state,action)=>{
      state.project.push({id:action.payload.id, title:action.payload.title, description:action.payload.description})
    },
    deleteProject:(state,action)=>{
      state.project.splice(action.payload,1)
    },
    education:(state,action)=>{
      state.education.push({id:action.payload.id, university:action.payload.university, year:action.payload.year, degree:action.payload.degree, marks:action.payload.marks})
    },
    deleteEducation:(state,action)=>{
      state.education.splice(action.payload,1)
    },
  },
});

export const { firstName, middleName, lastName, city, state, country, phone, email, objective,skills ,deleteSkill,project,deleteProject,achievement,deleteAchievement,experience,deleteExperience,education,deleteEducation,template} = counterSlice.actions;
export default counterSlice.reducer;

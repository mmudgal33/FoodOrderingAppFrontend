// const production = {
//     url: 'https://mern-task-app-foodorderingfrontend.onrender.com',
//     api: 'https://mern-task-app-foodorderingfrontend-api.onrender.com'
//   };
//   const development = {
//     url: 'http://localhost:3000',
//     api: 'http://localhost:5000'
//   };
//   export const config = process.env.NODE_ENV === 'development' ? development : production;

const production = {
  api: 'https://mern-task-app-foodorderingfrontend-api.onrender.com'
};
const development = {
  api: 'http://localhost:5000'
};
export const config = process.env.NODE_ENV === 'development' ? development : production;
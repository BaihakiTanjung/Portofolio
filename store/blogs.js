const state = {
  projects: [
    {
      id: 1,
      name: "Project 1",
      description: "This is a project description",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
      github: "https://www.github.com",
      color: "#e34f26",
    },
  ],
};

const getters = {
  getProjects: (state) => {
    return state.projects;
  },
};

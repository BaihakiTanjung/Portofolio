export const state = () => ({
  skills: [
    {
      name: "Flutter",
      icon: "devicon-flutter-plain",
      experience: 2,
      experienceYear: "m",
    },
    {
      name: "VueJS",
      icon: "devicon-vuejs-plain",
      experience: 2.5,
      experienceYear: "y",
    },
    {
      name: "NuxtJS",
      icon: "devicon-nuxtjs-plain",
      experience: 2,
      experienceYear: "y",
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
      experience: 1,
      experienceYear: "y",
    },
    {
      name: "React",
      icon: "devicon-react-plain",
      experience: 3,
      experienceYear: "m",
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain",
      experience: 5,
      experienceYear: "m",
    },
    {
      name: "ExpressJS",
      icon: "devicon-express-original",
      experience: 1,
      experienceYear: "m",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      experience: 2,
      experienceYear: "m",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      experience: 2,
      experienceYear: "m",
    },
  ],
});

export const getters = {
  getSkills(state) {
    return state.skills;
  },
};

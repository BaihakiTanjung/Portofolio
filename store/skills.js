export const state = () => ({
  skills: [
    {
      name: "VueJS",
      icon: "devicon-vuejs-plain",
      experience: 3,
      experienceYear: "y",
    },

    {
      name: "NuxtJS",
      icon: "devicon-nuxtjs-plain",
      experience: 2.5,
      experienceYear: "y",
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
      experience: 3.3,
      experienceYear: "y",
    },
    {
      name: "Ionic",
      icon: "devicon-ionic-original",
      experience: 5,
      experienceYear: "m",
    },
    {
      name: "NextJS",
      icon: "devicon-nextjs-original",
      experience: 6,
      experienceYear: "m",
    },
    {
      name: "React",
      icon: "devicon-react-plain",
      experience: 1,
      experienceYear: "y",
    },
    {
      name: "Angular",
      icon: "devicon-angularjs-plain",
      experience: 6,
      experienceYear: "m",
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain",
      experience: 6,
      experienceYear: "m",
    },
    {
      name: "ExpressJS",
      icon: "devicon-express-original",
      experience: 6,
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
    {
      name: "Flutter",
      icon: "devicon-flutter-plain",
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

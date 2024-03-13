export const strict = false;

export const state = () => ({
  home: {
    name: "Baihaki Al Biruni",
    job: "Software Engineer",
    office: "Pusat Gadai Indonesia",
    address: "Indonesia",
    description:
      "Web Developer Enthusiast likes things related to technology 💻 and also loves the world of investment 💰.",
  },
});

export const getters = {
  getHome(state) {
    return state.home;
  },
};

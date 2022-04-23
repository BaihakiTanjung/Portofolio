export const strict = false;

export const state = () => ({
  home: {
    name: "Baihaki Al Biruni",
    job: "Frontend Engineer",
    office: "SIP",
    address: "Indonesia 🇲🇨",
    description:
      "Web Developer Enthusiast likes things related to technology 💻 and also loves the world of investment 💰.",
  },
});

export const getters = {
  getHome(state) {
    return state.home;
  },
};

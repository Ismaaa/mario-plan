import { CREATE_PROJECT } from "../types/projectTypes";

const INITIAL_STATE = {
  projects: [
    {
      id: 1,
      title: "Help me find peach",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis officia non expedita vel. Facilis vitae minus dolorem eos corporis.",
    },
    {
      id: 2,
      title: "Collect all the stars",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni facere, obcaecati consectetur omnis laboriosam maxime nesciunt ipsum laudantium incidunt saepe quibusdam assumenda autem!",
    },
    {
      id: 3,
      title: "Egg hunt with yoshi",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolorum ducimus sapiente.",
    },
  ],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log(action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;

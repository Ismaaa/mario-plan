const INITIAL_STATE = {
  projects: [
    {
      id: 1,
      title: "Help me find peach",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis officia non expedita vel. Facilis vitae minus dolorem eos corporis. Provident sit omnis sunt doloremque distinctio suscipit harum optio ipsum quidem.",
    },
    {
      id: 2,
      title: "Collect all the stars",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni facere, obcaecati consectetur omnis laboriosam maxime nesciunt ipsum laudantium incidunt saepe quibusdam assumenda autem! Fuga exercitationem repudiandae, autem impedit animi maxime.",
    },
    {
      id: 3,
      title: "Egg hunt with yoshi",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolorum ducimus sapiente. Enim esse sequi veniam assumenda perferendis ipsam, est aliquid facilis aspernatur illo odit quia cum ratione debitis nobis.",
    },
  ],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default projectReducer;

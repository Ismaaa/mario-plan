export const createProject = (project) => {
  return (dispatch, getState) => {
    console.log(project);
    // make async call to database
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};

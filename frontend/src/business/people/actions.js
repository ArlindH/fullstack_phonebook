const actions = {
    GET_PEOPLE_REQUEST: "GET_PEOPLE_REQUEST",
    GET_PEOPLE_SUCCESS: "GET_PEOPLE_SUCCESS",
    GET_PEOPLE_ERROR: "GET_PEOPLE_ERROR",

    ADD_PERSON_REQUEST: "ADD_PERSON_REQUEST",
    ADD_PERSON_SUCCESS: "ADD_PERSON_SUCCESS",
    ADD_PERSON_ERROR: "ADD_PERSON_ERROR",
  
    getPeople: (parameters) => ({
      type: actions.GET_PEOPLE_REQUEST,
      parameters
    }),
    addPerson: (data, clearForm) => ({
      type: actions.ADD_PERSON_REQUEST,
      data,
      clearForm
    })
  };
  
  export default actions;
  
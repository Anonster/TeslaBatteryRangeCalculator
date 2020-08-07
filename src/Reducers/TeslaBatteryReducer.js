const INITIAL_STATE = {
    carstats: [],
    config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 21
    }
}
const TeslaBatterReducer = (state = INITIAL_STATE,action) => {
    switch (action.Type){
        default:
            return state;
    }
}
export default TeslaBatterReducer;
// const Set_data = (data) => {
const Set_data = () => {
    return (dispatch) => {
        console.log("Running")
        dispatch({
            type: "SETDATA",
            payload: { name: "haider", email: "haider@yahoo.com" }
            // data : data
        })
    }
}
export { Set_data }
export default (data) => {
    const {street, city, state, zip} = data
    return `${street} ${city}, ${state}`
}
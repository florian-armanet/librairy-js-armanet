export default (device) => {
    const devices = {
        'sm': 575,
        'sm-down': 575,
        'lg': 1024,
        'lg-down': 1024,
        'xl': 1239,
        'xl-down': 1239,
    }

    if (!Object.keys(devices).includes(device)) return;

    const [key, value] = Object.entries(devices).find(([key, value]) => key === device)
    return value
}

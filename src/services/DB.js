const getSession = () => JSON.parse(localStorage.getItem("Session"));
const removeList = async (id) => {
    let currentSession = getSession()
    currentSession.listas = currentSession.listas.filter((lista) => lista.id !== id);
    saveUser(currentSession);
    saveSession(currentSession);
    return currentSession;
}

const saveUser = (session = getSession()) => localStorage.setItem("Login", JSON.stringify(session))
const saveSession = (session = getSession()) => localStorage.setItem("Session", JSON.stringify(session))

const DB = {
    getSession: getSession(),
    saveSession: saveUser,
    removeList: removeList,
}

export default DB
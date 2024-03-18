

//localStorage
const __LOCAL_STORAGE_KEY = 'quizzify_data_storage';


function initLocalStorage() {
    if (localStorage.getItem(__LOCAL_STORAGE_KEY) === null) {
        localStorage.setItem(__LOCAL_STORAGE_KEY, JSON.stringify({
            quizzes: [],
            labels: [],
        }));
    }
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem(__LOCAL_STORAGE_KEY));
}

function setLocalStorage(data) {
    localStorage.setItem(__LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function getQuizzes() {
    return getLocalStorage().quizzes;
}

function addQuiz(quizLabel, quiz) {
    const storage = getLocalStorage();
    storage.quizzes.push(quiz);
    storage.labels.push(quizLabel);
    setLocalStorage(storage);
}

initLocalStorage();
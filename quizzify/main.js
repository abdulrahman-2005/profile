

//localStorage
const __LOCAL_STORAGE_KEY = 'quizzify_data_storage';


function initLocalStorage() {
    if (localStorage.getItem(__LOCAL_STORAGE_KEY) === null) {
        localStorage.setItem(__LOCAL_STORAGE_KEY, JSON.stringify({
            quizzes: [],
            currentQuiz: null,
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

function getCurrentQuiz() {
    const storage = getLocalStorage();
    if (storage.currentQuiz === null) {
        return null;
    }
    return storage.quizzes[storage.currentQuiz];
}

function setCurrentQuiz(index) {
    const storage = getLocalStorage();
    storage.currentQuiz = index;
    setLocalStorage(storage);
}


function addQuiz(quiz) {
    const storage = getLocalStorage();
    storage.quizzes.push(quiz);
    setLocalStorage(storage);
}



initLocalStorage();
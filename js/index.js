const htmlEl = document.querySelector('html');
const headEl = document.querySelector('head');
const containerEl = document.getElementById('container');
const modeChangeButton = document.getElementById('modeChange');
const changeLanguageButton = document.getElementById('changeLanguage');
const messageTextarea = document.getElementById('message-textarea');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const englishJokeMessages = [
  'stop it',
  'you\'re annoying',
  'stop',
  'what did you think would happen?',
  'just don\'t',
  'can you stop clicking any button?',
  'why are you doing this?',
  'why are you doing this to me?',
  'was it worth it?',
  'you\'re a bad person',
  'heck no',
  'haha, stop it',
];
const arabicJokeMessages = [
  'بس خلاص',
  'كفاية بقى',
  'مش كل شوية',
  'يعم صل عالنبي',
  'بطل تدوس الزراير',
  'كان هيحصل ايه يعني 🤣🤣',
  'طبعا لازم البيه',
  'بس',
  'كفاية',
  'بطل تدوس زرايري',
];

class LocalStorageAccess {
  constructor(storageName) {
    this.storage = window.localStorage;
    this.storageName = storageName;
    try {
      this.storage.getItem(this.storageName);
    } catch (error) {
      this.storage.setItem(this.storageName, JSON.stringify({
        language: 'en',
        theme: 'dark',
      }));
    }
  }

  get() {
    return JSON.parse(this.storage.getItem(this.storageName));
  }

  set(value) {
    this.storage.setItem(this.storageName, JSON.stringify(value));
  }
}

const myWebsiteStorage = new LocalStorageAccess('AbdulrahmanAzmyWebsiteStorage');

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  modeChangeButton.innerHTML = theme === 'dark' ? '☀' : '🌙';
  modeChangeButton.setAttribute('data-tooltip', theme === 'dark' ? 'Light Mode' : 'Dark Mode');
  myWebsiteStorage.set({ ...myWebsiteStorage.get(), mode: theme });
}

function toggleTheme() {
  const theme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(theme);
}

function jokeMessage() {
  const language = myWebsiteStorage.get().language;
  const joke = language === 'en' ? englishJokeMessages[Math.floor(Math.random() * englishJokeMessages.length)] : arabicJokeMessages[Math.floor(Math.random() * arabicJokeMessages.length)];
  const old = containerEl.innerHTML;
  containerEl.innerHTML = `<article class="joke-message" style="border-radius: 40px;padding: 2vw; font-weight: bold;font-size: 1.2rem; background:var(--flash-border-color); color: white;">${joke}</article>`;
  setTimeout(() => {
    containerEl.innerHTML = old;
  }, 2000);
}

function changeLanguage() {
  const oldStorage = myWebsiteStorage.get();
  const language = oldStorage.language === 'en' ? 'ar' : 'en';
  myWebsiteStorage.set({ ...oldStorage, language });
  window.location.href = language === 'en' ? '../en' : '../ar';
}

function sendMessage(option = 'whatsapp') {
  let message = messageTextarea.value;
  message = message === '' ? defalutMessage[myWebsiteStorage.get().language.toLowerCase()] : message;
  if (option === 'whatsapp') {
    message = message.replace(/ /g, '-');
    window.open(`https://wa.me/201201590033?text=${message}`, '_blank');
  } else if (option === 'email') {
    message = message.replace(/ /g, '20%');
    window.open(`mailto:abuazmy.gg@gmail.com?subject=ContactFromWebsite&body=${message}`, '_blank');
  }
}

function createStyler(stylerName) {
  const styleEl = document.createElement('style');
  styleEl.id = stylerName;
  headEl.appendChild(styleEl);
  return styleEl;
}

const flashyBorderStyler = createStyler('flashyBorderStyler');
function flash() {
  flashyBorderStyler.innerHTML = `:root { --flash-border-color: ${colors[Math.floor(Math.random() * colors.length)]} !important; }`;
}

setInterval(flash, 1000);

document.addEventListener('DOMContentLoaded', () => {
  try {
    const { mode, language } = myWebsiteStorage.get();
    setTheme(mode || 'dark');
    myWebsiteStorage.set({ ...myWebsiteStorage.get(), language });
  } catch (error) {
    setTheme('dark');
    myWebsiteStorage.set({ ...myWebsiteStorage.get(), language: 'en' });
  }
  modeChangeButton.addEventListener('click', toggleTheme);
  changeLanguageButton.addEventListener('click', toggleLanguage);
  messageTextarea.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      sendMessage('whatsapp');
    }
  });
});
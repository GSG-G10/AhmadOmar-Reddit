const mainContainer = document.querySelector('.main-content .container');

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};
const popularSection = createElement('section', 'popular-posts', mainContainer);
const postCards = createElement('div', 'post-cards', popularSection);
fetch('/userPosts')
  .then((result) => result.json())
  .then((data) => {
    if (data.length === 0) {
      popularSection.textContent = 'hmm... you didn\'t post anything';
    } else {
      data.forEach((userdata) => {
        const postCard = createElement('div', 'post-card', postCards);
        const postVote = createElement('div', 'post-vote', postCard);

        createElement('button', 'up-vote', postVote);
        createElement('span', 'vote-count', postVote, userdata.votes);
        createElement('button', 'down-vote', postVote);

        const postContent = createElement('div', 'post-content', postCard);
        const postHeader = createElement('div', 'post-header', postContent);
        const postMeta = createElement('div', 'post-meta', postHeader);
        createElement('span', 'post-subreddit', postMeta, `r/${userdata.community}`);
        createElement('span', 'post-author', postMeta, `u/${userdata.username}`);
        createElement('span', 'post-date', postMeta, userdata.date_created);
        createElement('h2', 'post-title', postHeader, userdata.title);
        const postImageContainer = createElement('div', 'post-image', postContent);
        const postImg = createElement('img', 'post-img', postImageContainer);
        postImg.src = userdata.image;
        postImg.alt = userdata.title;
      });
    }
  });
// const parseJwt = (token) => {
//   const base64Url = token.split('.')[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

//   return JSON.parse(jsonPayload);
// };
// const tokenCookie = {};
// document.cookie.split(';').forEach((cookie) => {
//   if (cookie.includes('token')) {
//     tokenCookie.token = cookie.split('=')[1];
//   }
// });
// const { token } = tokenCookie;
// const userName = parseJwt(token).user;

const headerUserName = document.querySelector('.site-header .user-name');
const widgetUserName = document.querySelector('.user-widget .user-name');
const widgetEmail = document.querySelector('.user-widget .user-email');
// headerUserName.textContent = userName;
// widgetUserName.textContent = userName;
fetch('/userData')
  .then((response) => response.json())
  .then((userdata) => {
    userdata.forEach((user) => {
      document.title = `${user.username} Dashboard`;
      headerUserName.textContent = user.username;
      widgetUserName.textContent = user.username;
      widgetEmail.textContent = user.email_address;
    });
  });

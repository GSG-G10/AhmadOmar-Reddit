const communityName = document.querySelector('.community-name');

const urlParam = window.location.href.split('/')[window.location.href.split('/').length - 2];

const mainContainer = document.querySelector('.main-content .container');

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};
const postSection = createElement('section', 'popular-posts', mainContainer);

fetch(`/post/${urlParam}`)
  .then((result) => result.json())
  .then((data) => data.forEach((post) => {
    const postCard = createElement('a', 'post-card', postSection);
    const postVote = createElement('div', 'post-vote', postCard);
    postCard.setAttribute('id', post.id);
    createElement('button', 'up-vote', postVote);
    createElement('span', 'vote-count', postVote, post.votes);
    createElement('button', 'down-vote', postVote);

    const postContent = createElement('div', 'post-content', postCard);
    const postHeader = createElement('div', 'post-header', postContent);
    const postMeta = createElement('div', 'post-meta', postHeader);
    createElement('span', 'post-subreddit', postMeta, `r/${post.community}`);
    createElement('span', 'post-author', postMeta, `u/${post.username}`);
    createElement('span', 'post-date', postMeta, post.date_created);
    createElement('h2', 'post-title', postHeader, post.title);
    const postImageContainer = createElement('div', 'post-image', postContent);
    const postImg = createElement('img', 'post-img', postImageContainer);
    postImg.src = post.image;
    postImg.alt = post.title;
    communityName.textContent = `r/${post.community}`;
  }));

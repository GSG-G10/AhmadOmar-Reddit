const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 750) {
    backToTop.classList.remove('btt-hidden');
  } else {
    backToTop.classList.add('btt-hidden');
  }
});

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
fetch('/displayPosts')
  .then((result) => result.json())
  .then((resultt) => resultt[0].rows)
  .then((posts) => posts.forEach((post) => {
    const postCard = createElement('div', 'post-card', postCards);
    const postVote = createElement('div', 'post-vote', postCard);

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
    // const postFooter = createElement('div', 'post-footer', postContent);
    // const postComment = createElement('span', 'post-comments', postFooter, 'commentCount');
  }));

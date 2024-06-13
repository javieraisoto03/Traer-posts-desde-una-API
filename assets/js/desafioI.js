async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function loadPosts() {
  const postList = document.getElementById('post-list');

  // Limpiar la lista antes de cargar nuevos posts
  postList.innerHTML = '';

  const posts = await fetchPosts();
  if (posts) {
    posts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      postList.appendChild(li);
    });
  }
}

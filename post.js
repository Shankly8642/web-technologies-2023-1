const getPostDetails = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            const post = await res.json();
        return post;
    } catch (error) {
        console.error('Не удалось загрузить детали поста: ', error);
        throw error;
    }
};

const getPostComments = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            const comments = await res.json();
        return comments;
    } catch (error) {
        console.error('Не удалось загрузить комментарии: ', error);
        throw error;
    }
};

const renderPostDetails = async (postId) => {
    const postContent= document.querySelector('[data-post-content]');
    const postComments = document.querySelector('[data-post-comments]');
    postContent.innerHTML = '';
    postComments.innerHTML = '';

    try {
        const post = await getPostDetails(postId);
        const comments = await getPostComments(postId);

        postContent.innerHTML = `
            <h1>${post.title}</h1>
            <h3>${post.body} <br><br></h3>
        `;

        postComments.innerHTML = `
            <h2>Комментарии:</h2>
            ${comments.map(comment => `
                <div>
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                    <p>by ${comment.email}</p>
                </div>
            `).join('<br>')}
        `;
    } catch (error) {
        postContent.innerHTML = '<p>Не удалось загрузить детали поста.</p>';
        postComments.innerHTML = '<p>Не удалось загрузить комментарии.</p>';
    }
};

const init = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        renderPostDetails(postId);
    } else {
        const postContent = document.querySelector('[data-post-content]');
        postContent.innerHTML = '<p>ID поста не указан.</p>';
    }

    const backToCatalog = document.getElementById('back-to-catalog');
    backToCatalog.addEventListener('click', () => {
        window.location.href = 'catalog.html';
    });
};


init();
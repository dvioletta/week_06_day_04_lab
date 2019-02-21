document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleTitle = (event) => {
    console.dir(event);
    console.log('Title typed');
    const title = event.target.value;
    console.log(event.target.value);
    const resultParagraph = document.querySelector('#title-result');
    resultParagraph.textContent = `${title}`
  }

  const titleInput = document.querySelector('#title');
  titleInput.addEventListener('input', handleTitle);

  const handleAuthor = (event) => {
    console.dir(event);
    console.log('Author typed');
    const author = event.target.value;
    console.log(event.target.value);
    const resultParagraph = document.querySelector('#author-result');
    // resultParagraph.textContent = `${author}`
  }

  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', handleAuthor);

  const handleSelectChange = (event) => {
    console.log('Something has been selected!');
    const select = event.target.value;
    const resultParagraph = document.querySelector('#select-result');
    // resultParagraph.textContent = `${event.target.value}`;
  }

  const select = document.querySelector('#category');
  select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const resultParagraph = document.querySelector('#form-result');
  })

})

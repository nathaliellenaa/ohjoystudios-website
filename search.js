let searchable = [
  'Corporate events',
  'Family bonds',
  'Graduations',
  'Maternity & newborns',
  'Small weddings',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.search-container');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li data-search="${item}">${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;

  const resultItems = resultsWrapper.querySelectorAll('li'); // Select all result items

  resultItems.forEach((item) => {
    item.addEventListener('click', () => {
      const searchTerm = item.getAttribute('data-search');
      navigateToPage(searchTerm); // Call function to navigate
    });
  });
}

function navigateToPage(searchTerm) {
  console.log("Clicked:", searchTerm); // Debugging line
  const formattedTerm = searchTerm.replace(/\s+/g, '-').toLowerCase();
  window.location.href = `${formattedTerm}.html`; // Redirect to the corresponding page
}
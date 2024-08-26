import axios from 'axios';
import _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', _.debounce(searchBooks, 300)); 
    }
});

async function searchBooks() {
    const category = document.getElementById('categoryInput').value.trim();

    if (!category) {
        alert('Please insert a category to search for.');
        return;
    }

    try {
        const response = await axios.get(`https://openlibrary.org/subjects/${category}.json`);
        const data = response.data;
        const resultsDiv = document.getElementById('results');
        const descriptionDiv = document.getElementById('description');

        resultsDiv.innerHTML = '';
        descriptionDiv.innerHTML = '';

        if (_.isEmpty(data.works)) {
            resultsDiv.innerHTML = '<p>No results found for this category.</p>';
            return;
        }

        data.works.forEach(work => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book-item'); 

            const imgURL = work.cover_id 
                ? `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`
                : 'https://via.placeholder.com/100x150?text=No+Image';

            bookDiv.innerHTML = `
                <img src="${imgURL}" alt="${work.title}" style="width:100px; height:150px;">
                <div class="book-info">
                    <strong>${work.title}</strong> - ${work.authors.map(author => author.name).join(', ')}
                    <button data-key="${work.key}" class="descriptionButton">Show Description</button>
                </div>
            `;
            resultsDiv.appendChild(bookDiv);
        });

        const descriptionButtons = document.querySelectorAll('.descriptionButton');
        descriptionButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookKey = event.target.getAttribute('data-key');
                showDescription(bookKey);
            });
        });

    } catch (error) {
        console.error('Error fetching books:', error);
        alert('An error occurred while searching. Please try again.');
    }
}

async function showDescription(bookKey) {
    try {
        const response = await axios.get(`https://openlibrary.org${bookKey}.json`);
        const data = response.data;
        const descriptionDiv = document.getElementById('description');

        descriptionDiv.innerHTML = data.description 
            ? (typeof data.description === 'string' ? data.description : data.description.value)
            : 'Description unavailable';
    } catch (error) {
        console.error('Error fetching book description:', error);
        alert('An error occurred while fetching the description. Please try again.');
    }
}

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsWrapper = document.getElementById('results-wrapper');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
    resultsWrapper.innerHTML = '';

    await fetchShows(query);
});

async function fetchShows(query) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const allResults = await response.json();
        
        if (allResults.length > 0) {
            renderResults(allResults);
        } else {
            resultsWrapper.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Nenhum resultado encontrado.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar os shows:', error);
        resultsWrapper.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Ocorreu um erro ao buscar os shows. Por favor, tente novamente mais tarde.</p>';
    }
}

function renderResults(results) {
    results.forEach(item => {
        const show = item.show;
        const posterUrl = show.image
            ? show.image.original || show.image.medium
            : 'https://via.placeholder.com/600x900?text=Sem+Imagem';

        const summaryText = show.summary
            ? show.summary.replace(/(<([^>]+)>)/gi, "")
            : 'Sem descrição disponível.';
        const premiered = show.premiered ? show.premiered.split('-')[0] : 'N/A';

        const card = document.createElement('div');
        card.className = 'movie-card';

        card.innerHTML = `
            <img src="${posterUrl}" alt="${show.name}" class="movie-poster">
            <div class="movie-title-small" title="${show.name}">${show.name}</div>
            
            <div class="movie-overlay">
                <h3>${show.name}</h3>
                <p><strong>Ano:</strong> ${premiered}</p>
                <p><strong>Nota:</strong> ${show.rating && show.rating.average ? show.rating.average : '--'}/10</p>
                <p class="summary-text">${summaryText}</p>
            </div>
        `;
        
        resultsWrapper.appendChild(card);
    });
}
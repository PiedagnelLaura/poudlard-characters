const houseList = {
    /**
     * on pose des écouteurs sur tout les liens du site
     */
    addAllEventListeners: function () {
        const navLinks = document.querySelectorAll('.nav-link');
        for (const navLink of navLinks) {
            navLink.addEventListener('click', houseList.handleClickHouse);
        }
        const btnsElmt = document.querySelectorAll('#review .btn');
        for (const btnElmt of btnsElmt) {
            btnElmt.addEventListener('click', houseList.handleClickHouse);
        }
    },
    /**
     * 
     * on détermine l'action à réalisé après avoir cliqué sur un lien
     */
    handleClickHouse: function (evt) {
        evt.preventDefault();
        let house =evt.target.textContent;
        const reviewElmt = document.querySelector('#review');
        reviewElmt.textContent = "";
        if (house === "All") {
            let url ="";
            charactersList.findCharacters(url);
        }
        else {
            let url = '/house/' + house
            charactersList.findCharacters(url);
        }
    },
};
const houseList = {
    /**
     * on pose des écouteurs sur tout les liens du site
     */
    addAllEventListeners: function () {
        const navLinks = document.querySelectorAll('.nav-link');
        for (const navLink of navLinks) {
            navLink.addEventListener('click', houseList.handleClickHouse);
        }
        const btnsElmt = document.querySelectorAll('#home .btn');
        for (const btnElmt of btnsElmt) {
            btnElmt.addEventListener('click', houseList.handleClickHouse);
        }
        const homeElmt = document.querySelector('.homebtn');
        homeElmt.addEventListener('click', houseList.handleClickHome);
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
        document.querySelector('#home').classList.add('d-none');
        if (house === "All") {
            let url ="";
            charactersList.findCharacters(url);
        }
        else {
            let url = '/house/' + house
            charactersList.findCharacters(url);
        }
    },

    /**
     * 
     * on ramene sur la page d'accueil quand on clique sur 'Poudlard Characters'
     */
    handleClickHome: function (evt) {
        evt.preventDefault();
        document.querySelector('#home').classList.remove('d-none');
        document.querySelector('#review').textContent = "";
    }
};
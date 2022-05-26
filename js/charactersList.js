const charactersList = {
    /**
     * Permet de récupérer toutes les infos des personnages grâce à une API
     * 
     */
    findCharacters: function (url) {
        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
        fetch('http://hp-api.herokuapp.com/api/characters'+ url , fetchOptions)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (object) {const reviewElmt = document.querySelector('#review');
                reviewElmt.textContent = "";
                    for (const review of object) {
                        if (review.image.length > 0) {
                            charactersList.cardCreate(
                                review.name, 
                                review.actor, 
                                review.dateOfBirth, 
                                review.eyeColour, 
                                review.hairColour, 
                                review.image, 
                                review.patronus, 
                                review.wand.core, 
                                review.wand.length, 
                                review.wand.wood, 
                                review.house
                                )
                        }
                    }
                }
            );
    },

    /**
     * 
     * on créé une carte pour chaque perso avec toutes les infos récupérées avant
     */
    cardCreate: function (name, actor, dateOfBirth, eyeColour, hairColour, image, patronus, core, length, wood, house) {
        const reviewElmt = document.querySelector('#review');
        // on fait une copie du template
        const newReviewElmt = document.querySelector('#reviewTemplate').content.cloneNode(true);
        // on rajoute toutes les infos dans notre card
        newReviewElmt.querySelector('.name').textContent = name;
        newReviewElmt.querySelector('.actor').textContent = actor;
        newReviewElmt.querySelector('.birth').textContent = dateOfBirth;
        newReviewElmt.querySelector('.eye').textContent = eyeColour;
        newReviewElmt.querySelector('.hair').textContent = hairColour;
        newReviewElmt.querySelector('.picture').src = image;
        newReviewElmt.querySelector('.patronus').textContent = patronus;
        newReviewElmt.querySelector('.core').textContent = core;
        newReviewElmt.querySelector('.length').textContent = length;
        newReviewElmt.querySelector('.wood').textContent = wood;
        // on rajoute une classe pour mettre de la couleur suivant la maison
        if (house === "Gryffindor") {
            newReviewElmt.firstElementChild.classList.add('bg-danger');
        } else if (house === "Ravenclaw") {
            newReviewElmt.firstElementChild.classList.add('bg-primary');
        } else if (house === "Hufflepuff") {
            newReviewElmt.firstElementChild.classList.add('bg-warning');
        } else if (house === "Slytherin") {
            newReviewElmt.firstElementChild.classList.add('bg-success');
        } else {
            newReviewElmt.firstElementChild.classList.add('bg-secondary');
        }
        // on rajoute la card dans notre html
        reviewElmt.appendChild(newReviewElmt);
    }
};
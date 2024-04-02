
export function setDefaultCardImages(cards, defaultImage = 'cardPlaceholder.png') {
    return cards.map(card => {
        if (!card.image) {
            card.image = defaultImage;
        }
        return card;
    });
}
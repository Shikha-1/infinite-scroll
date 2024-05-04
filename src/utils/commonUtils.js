export function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function findRange(min, max) {
    if (min === null) {
        return max !== null ? `0-${max}` : 0;
    } else {
        return max !== null ? `${min}-${max}` : min;
    }
}

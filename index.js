const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}

function appendCat (name) {
    const catsCopy = [...cats, name];
    return catsCopy;
}

function prependCat (name) {
    const catsCopy = [name,...cats];
    return catsCopy;
}

function removeLastCat() {
    const catsCopy = cats.slice(0, cats.length - 1);
    return catsCopy;
}

function removeFirstCat() {
    const catsCopy = cats.slice(1);
    return catsCopy;
}
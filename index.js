let homescoreEl = document.getElementById("home-score")
let guestscoreEl = document.getElementById("guest-score")

function homep1() {
    let score = Number(homescoreEl.textContent)
    score += 1
    homescoreEl.textContent = score
}

function homep2() {
    let score = Number(homescoreEl.textContent)
    score += 2
    homescoreEl.textContent = score
}

function homep3() {
    let score = Number(homescoreEl.textContent)
    score += 3
    homescoreEl.textContent = score
}

function guestp1() {
    let score = Number(guestscoreEl.textContent)
    score += 1
    guestscoreEl.textContent = score
}

function guestp2() {
    let score = Number(guestscoreEl.textContent)
    score += 2
    guestscoreEl.textContent = score
}

function guestp3() {
    let score = Number(guestscoreEl.textContent)
    score += 3
    guestscoreEl.textContent = score
}
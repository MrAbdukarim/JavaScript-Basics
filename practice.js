// Created by MrAbdukarim on 11/22/2024

// Task 1
numberOfSeries = +prompt("Nechta serial ko'rding?", '')

// console.log(numberOfSeries)

// Task 2
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
}

// Task 3
const a = prompt("Oxirgi ko’rgan serialingiz?", '')
const b = +prompt("Nechi baxo berasiz?", '')

const c = prompt("Oxirgi ko’rgan serialingiz?", '')
const d = +prompt("Nechi baxo berasiz?", '')

seriesDB.series[a] = b
seriesDB.series[c] = d
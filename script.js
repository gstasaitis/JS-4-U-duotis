
var countryList = [
    {country: "Armenia", area: 29743, population: 3000756},
    {country: "Bhutan", area: 38394, population: 777486},
    {country: "Uganda", area: 236040, population: 41652938},
    {country: "Niue", area: 26146, population: 1937},
    {country: "Bangladesh", area: 148460, population: 170000000}
]

for(var i = 0; i < countryList.length; i++){

    averageArea(countryList[i].country, countryList[i].area, countryList[i].population)
}

function averageArea(country, area, population){
var average = area / population

console.log(`Šalis: ${country}. Plotas: ${area} km2. Populiacija: ${population} gyventojų.`)


console.log(`Vidutinis plotas gyventojui: ${average.toFixed(2)} km2.`)
console.log("====================================================")
}


 



 


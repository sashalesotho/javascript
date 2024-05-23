export const age = (planet, second) => {
const ageOnEarth = second / 31557600;
let ageOnPlanet;
if(planet === 'mercury') {
	ageOnPlanet = ageOnEarth / 0.2408467
} else
if(planet === 'venus') {
	ageOnPlanet = ageOnEarth / 0.61519726
} else
if(planet === 'mars') {
	ageOnPlanet = ageOnEarth / 1.8808158
} else
if(planet === 'jupiter') {
	ageOnPlanet = ageOnEarth / 11.862615
} else
if(planet === 'saturn') {
	ageOnPlanet = ageOnEarth / 29.447498
} else
if(planet === 'uranus') {
	ageOnPlanet = ageOnEarth / 84.016846
} else
if(planet === 'neptune') {
	ageOnPlanet = ageOnEarth / 164.79132
} else
if(planet === 'earth') {
	ageOnPlanet = ageOnEarth
}
return +ageOnPlanet.toFixed(2);
};
//'earth' 'mercury' 'venus' 'mars' 'jupiter' 'saturn' 'uranus' 'neptune'
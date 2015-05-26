var pets = ['cat', 'dog', 'rat'];
pets.forEach(function(pet, index, petsArray) {
	petsArray[index] = pet + 's';
});

console.log(pets);

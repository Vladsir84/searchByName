let searchByName = [{ name: 'Jonny Walker', birthDate: '1995-12-17' }, { name: 'Andrew', birthDate: '2001-10-29' }];

array = searchByName.map(function(elem) {
    return {
        name: elem.name
    };
});

console.log(array);
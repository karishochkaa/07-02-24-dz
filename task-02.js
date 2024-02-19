//Завдання 2. Напиши функцію slugify(string) яка отримує рядок та повертає
//URL-slug Рядок складається лише з букв та пробілів

function slugify(string){
    return string.toLowerCase().replace(/[^a-z\s]/g, '').split(' ').join('-');
}

//Для перевірки використовуйте
console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
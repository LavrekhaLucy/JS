'use strict';

// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.


let cartsDiv = document.getElementById('cartsDiv');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObj => {
        const {carts} = cartsObj;
        console.log(carts);

        for (const cart of carts) {
            let cartDiv = document.createElement('div');
            cartDiv.className = ('basket');

            let p = document.createElement('p');
            p.innerText = `'discountedTotal':${cart.discountedTotal},
            'id':${cart.id},
            'total':${cart.total},
            'totalProducts':${cart.totalProducts},
            'totalQuantity':${cart.totalQuantity},
            'userId':${cart.userId}
            `
            const ol = document.createElement('ol');
            for (const product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `'id':${product.id},
                 'title': ${product.title},
                 'price': ${product.price},
                 'quantity':${product.quantity},
                 'total': ${product.total},
                 'discountPercentage':${product.discountPercentage},
                 'discountedTotal':${product.discountedTotal}`

                const img = document.createElement('img');
                img.src = product.thumbnail;

                li.appendChild(img);
                ol.appendChild(li);
            }

            cartDiv.append(p, ol);
            cartsDiv.appendChild(cartDiv);

        }
    });
console.log(cartsDiv);



//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.

let recipesDiv = document.getElementById('recipesDiv');

     fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesInfo =>{
        const {recipes} = recipesInfo;
        console.log(recipes);
        for (const recipe of recipes) {

        let divInfo = document.createElement('div');
        divInfo.classList.add('allRecipes');
          for (const recipeKey in recipe){
          if (Array.isArray(recipe[recipeKey])){
             const titleDivArr = document.createElement('div');
             const h4 =document.createElement('h4')
             h4.innerText = `${recipeKey}`;
             const ol = document.createElement('ol');
             const array = recipe[recipeKey];
             for (const item of array) {
                const li = document.createElement('li');
                li.innerText = item;

                 ol.appendChild(li);}
                titleDivArr.append(h4, ol);
                divInfo.appendChild(titleDivArr);
          } else{
              if(recipeKey !== 'image'){
                  const titleDiv = document.createElement('div');
                  const h3 =document.createElement('h3')
                  h3.innerText = `${recipeKey}`;
              const keyDiv =document.createElement('div');
              keyDiv.innerText = `${recipeKey}: ${recipe[recipeKey]}`

              keyDiv.append(titleDiv,h3);
              divInfo.appendChild(keyDiv);

                }
          }
          }
              const img = document.createElement('img');
              img.src = recipe.image;
              divInfo.append (img);

            recipesDiv.appendChild(divInfo);
        }
    });
     console.log(recipesDiv);


"use strict";
const addButton = document.getElementById('dish-card-container');
const mealPlanList = document.getElementById('meal-plan-list');
const totalCostDisplay = document.getElementById('total-cost');
let totalCost = 0;

addButton.addEventListener('click', (event) => {
    const dishCard = event.target.parentElement;
    const dishName = dishCard.querySelector('.dish-name').textContent;
    const dishCostText = dishCard.querySelector('.dish-cost').textContent.replace('Cost: $', '');
    const dishCost = parseFloat(dishCostText);

    const mealItem = document.createElement('p');
    mealItem.textContent = `${dishName} - $${dishCost.toFixed(2)}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', () => {
        mealPlanList.removeChild(mealItem); 
        totalCost -= dishCost; 
        totalCostDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
    });

    mealPlanList.appendChild(mealItem);
    mealItem.appendChild(removeButton); 

    totalCost += dishCost;
    totalCostDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
});
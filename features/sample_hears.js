/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });
	controller.hears(['hello','hey','hi','bonjour','oi','aloha'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Hello my name is CaloBot. What meal could I recomend ?');
    });
    	controller.hears(['breakfast','low calorie breakfast'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I have found the current popular ideas for low calorie breakfast: https://www.goodto.com/food/breakfast-under-100-calories-39173');
    });
	controller.hears(['calorie intake'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'The average, moderately active woman between the ages of 26–50 needs to eat about 2,000 calories per day to maintain her weight and 1,500 calories per day to lose 1 pound (0.45 kg) of weight per week and moderately active man between the ages of 26–45 needs 2,600 calories per day to maintain his weight and 2,100 calories per day to lose 1 (0.45 kg) pound per week.');
    });
	controller.hears(['gluten-free dinner','no gluten dinner','gluten free dinner'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I have found a great website with a bunch of Gluten-Free dinner ideas: https://www.delish.com/cooking/g4203/gluten-free-dinner-ideas/');
    });
	controller.hears(['gluten-free breakfast','no gluten breakfast','gluten free breakfast'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I have found a great website with a bunch of Gluten-Free breakfast ideas: https://www.delish.com/cooking/nutrition/g770/gluten-free-breakfasts/');
    });
	controller.hears(['gluten-free lunch','no gluten lunch','gluten free lunch'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I have found a great website with a bunch of Gluten-Free lunch ideas: https://www.bbcgoodfood.com/recipes/collection/gluten-free-lunch-recipes');
    });
	controller.hears(['calorie calculator','calculate calories','calculate my calories'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Most accurate calorie calculator that I found is: https://www.calculator.net/calorie-calculator.html');
    });
	controller.hears(['low-calorie foods','low calorie foods','low-calorie food','low calorie food'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Oats, greek yoghurt, soup, berries, eggs, popcorn, chia seeds, fish, cottage cheese, potatoes. These foods range from great source of protein to efficiently reduce hunger and appetite between meals. Here is a website with even more information about filling low-calorie foods: https://www.healthline.com/nutrition/low-calorie-foods#TOC_TITLE_HDR_7');
    });
	controller.hears(['cant eat gluten','allergic to gluten','no gluten'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I can search for alternatives for your meals, let me know what meal are you searching! (e.g. gluten-free breakfast/lunch/dinner)');
    });
	controller.hears(['vegetarian'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Most recent website with great vegetarian recipes: https://cookieandkate.com/29-best-vegetarian-recipes/');
    });
	controller.hears(['vegan'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Based on popularity, this website has the best vegan recipes at the moment: https://www.loveandlemons.com/vegan-recipes/');
    });
	controller.hears(['low-calorie desserts','low calorie desserts'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Here is amazing low-calorie dessert list: https://www.delicious.com.au/recipes/collections/gallery/27-low-calorie-desserts-that-will-fool-them-all/2fsnqzyq');
    });
	controller.hears(['low-carb meals','low carb dishes','low-carb dishes','low carb meals','low-carb meal','low carb meal'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Low-Carb dishes that are tasty and easy to make: https://www.delish.com/cooking/recipe-ideas/g3593/low-carb-recipes/');
    });
	controller.hears(['low-carb breakfast','low carb breakfast'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Great Low-Carb breakfast ideas to make at home: https://www.healthline.com/nutrition/18-low-carb-breakfast-recipes');
    });
	controller.hears(['low-carb lunch','low carb lunch'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'Quick and easy Low-Carb lunch recipes list: https://www.healthline.com/nutrition/low-carb-lunch');
    });
	controller.hears(['low-carb','low carb'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I can search for alternatives for your meals, let me know what meal are you searching! (e.g. low-carb meals/breakfast/lunch/dinner)');
    });
	controller.hears(['low-calorie','low calorie'],['message'],async(bot, message) => {
    // do something!
      await bot.reply(message, 'I can search for alternatives for your meals, let me know what meal are you searching! (e.g. low-calorie breakfast/lunch/dinner)');
    });
    // use a regular expression to match the text of the message
    	controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    	controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

}
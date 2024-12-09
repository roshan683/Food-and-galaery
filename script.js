/*query selector All method returns the node list, which is an array like object. */
/*Each item has its index number and also the list itself has a length property. */
/*Okay, so we have to loop through these buttons and attach to each of them an event listener with the click event. */
/*In order to loop through the list, I'm going to use one of the array helper methods called for each. */
/*It takes one parameter, which is going to be the callback function and this function will be executed
for each list item. */
/*This callback function itself takes one parameter, which is going to be the current item from the list.
I mean the button.So let's insert your BTN. And next we need to attach an event listener to the button.*/
/*Let's specify here the type of the event which is going to be click.
And besides that event listener accepts the second parameter, which is the arrow function.
I mean the callback function, and it's going to be executed once we click the element. */

/*We will create a new class in CSS and we will define styles with this class and then we will add this
class name to the story and to the button itself.
We will do that using the toggle method because we need to display the story on the first click and
hide it on the next one. */
/*We will do that using the toggle method because we need to display the story on the first click and
hide it on the next one. */
/*called Class List.
It gives us all the classes that the element has and also it allows us to access the different methods
like toggle, add and remove.
So we need class list followed by the toggle method. */

document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

/*Actually, the story is the sibling of the button, so I'm going to use one of the properties called

Next Element Sibling.

We need BTN followed by the next element sibling.

Then again we need to use class list followed by the toggle method.

And as a class name we need to insert your change.

Okay, let's go to the CSS file and select story with change. */
/*jab mai click karunga to mera story or btn ka class change hona chiya use ke liya mai toggle method use karunga */
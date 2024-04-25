import {eventsStore} from './scr/data.js';
import {renderEvent} from './scr/render.js';
import {renderSecondPageEvent} from './scr/render.js'


eventsStore.forEach((event) => {
    const createEvent = renderEvent(event)
    document.querySelector('.list-of-events').append(createEvent)
})

function displayEvents(events) {
    const eventsList = document.querySelector('.list-of-events');
    eventsList.textContent = ''; 
    events.forEach((event) => {
        const createEvent = renderEvent(event)
        document.querySelector('.list-of-events').append(createEvent)
    })
}
displayEvents(eventsStore)




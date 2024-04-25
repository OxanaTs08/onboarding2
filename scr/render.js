import {createEl} from './utils.js'

export const renderEvent = (event) => {
    const container = createEl({ className: 'event' })
    
    const eventTop = createEl({ className: 'event-top' })
    const image = createEl({ tag: 'img', src: event.image})

    const eventBottom = createEl({ className: 'event-bottom' })
    const title = createEl({ tag: 'h3', text: event.title })
    const pline = createEl({tag: 'p',className: 'small', text: event.category + event.distance} )

    
    const timeline = createEl({ className: 'time' })
    const date = createEl({ tag: 'p', text: event.date })
    
    const textBox = createEl({ className: 'bottom-line' })
    const going = createEl({ tag: 'p', text:  event.attendees + 'going' })
    const free = createEl({ tag: 'p', text: 'Free' })
    
    
    container.append(eventTop, eventBottom)
    eventTop.append(image)

    eventBottom.append(title, pline, timeline, textBox)

    timeline.append(date)
    textBox.append(going, free)

    return container
}

export const renderSecondPageEvent = (event) => {
    const container = createEl({ className: 'event-second-page' })
    const photoBox = createEl({ className: 'event-top' })
    const image = createEl({ tag: 'img', src: event.image})
    const textBox = createEl({ className: 'event-bottom' })
    const date = createEl({ tag: 'h3', text: event.date })
    const title = createEl({ tag: 'h2', text: event.title })
    const thirdLine = createEl({ className: 'third-line' })
    const category = createEl({ tag: 'p', text: event.category })
    const distance = createEl({ tag: 'p', text: event.distance + '(km)' })
    const attendees = createEl({ tag: 'p', className:'attendees', text: event.attendees + ' attendees' })
    container.append(photoBox, textBox)
    photoBox.append(image)
    thirdLine.append(category, distance)
    textBox.append(date, title, thirdLine, attendees)
    return container
}

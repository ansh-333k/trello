var To_Do = JSON.parse(localStorage.getItem("To_Do")) || []
var Doing = JSON.parse(localStorage.getItem("Doing")) || []
var Done = JSON.parse(localStorage.getItem("Done")) || []
Vue.createApp({
	data() {
        return {
            To_Do,
            Doing,
            Done
        }
    },
    methods: {
        Add(List) {
            Title = prompt("Enter Card Title => ")
            if(Title != null) {
                Description = prompt("Enter Card Description => ")
                if(Title != null && Description != null) {
                    if(List == 'To_Do') {
                        To_Do.push({ Title: Title, Description: Description })
                        localStorage.setItem("To_Do", JSON.stringify(To_Do))
                    }
                    if(List == 'Doing') {
                        Doing.push({ Title: Title, Description: Description })
                        localStorage.setItem("Doing", JSON.stringify(Doing))
                    }
                    if(List == 'Done') {
                        Done.push({ Title: Title, Description: Description })
                        localStorage.setItem("Done", JSON.stringify(Done))
                    }
                    location.reload()
                }
            }
        },
        Edit(List, Title) {
            if(List == 'To_Do') {
                for(i = 0; i < To_Do.length; i++) {
                    if(To_Do[i].Title == Title) {
                        Title = prompt("Edit Card Title => ", To_Do[i].Title)
                        Description = prompt("Edit Card Description => ", To_Do[i].Description)
                        if(Title != null && Description != null) {
                            To_Do[i].Title = Title
                            To_Do[i].Description = Description
                            localStorage.setItem("To_Do", JSON.stringify(To_Do))
                        }
                    }
                }
            }
            if(List == 'Doing') {
                for(i = 0; i < Doing.length; i++) {
                    if(Doing[i].Title == Title) {
                        Title = prompt("Edit Card Title => ", Doing[i].Title)
                        Description = prompt("Edit Card Description => ", Doing[i].Description)
                        if(Title != null && Description != null) {
                            Doing[i].Title = Title
                            Doing[i].Description = Description
                            localStorage.setItem("Doing", JSON.stringify(Doing))
                        }
                    }
                }
            }
            if(List == 'Done') {
                for(i = 0; i < Done.length; i++) {
                    if(Done[i].Title == Title) {
                        Title = prompt("Edit Card Title => ", Done[i].Title)
                        Description = prompt("Edit Card Description => ", Done[i].Description)
                        if(Title != null && Description != null) {
                            Done[i].Title = Title
                            Done[i].Description = Description
                            localStorage.setItem("Done", JSON.stringify(Done))
                        }
                    }
                }
            }
            location.reload()
        },
        Next(List, Title) {
            if(List == 'To_Do') {
                for(i = 0; i < To_Do.length; i++) {
                    if(To_Do[i].Title == Title) {
                        Doing.push({ Title: To_Do[i].Title, Description: To_Do[i].Description })
                        delete To_Do[i]
                        To_Do = To_Do.filter(Card => { return (Card !== null) })
                        localStorage.setItem("To_Do", JSON.stringify(To_Do))
                        localStorage.setItem("Doing", JSON.stringify(Doing))
                    }
                }
            }
            if(List == 'Doing') {
                for(i = 0; i < Doing.length; i++) {
                    if(Doing[i].Title == Title) {
                        Done.push({ Title: Doing[i].Title, Description: Doing[i].Description })
                        delete Doing[i]
                        Doing = Doing.filter(Card => { return (Card !== null) })
                        localStorage.setItem("Doing", JSON.stringify(Doing))
                        localStorage.setItem("Done", JSON.stringify(Done))
                    }
                }
            }
            if(List == 'Done') {
                for(i = 0; i < Done.length; i++) {
                    if(Done[i].Title == Title) {
                        delete Done[i]
                        Done = Done.filter(Card => { return (Card !== null) })
                        localStorage.setItem("Done", JSON.stringify(Done))
                    }
                }
            }
            location.reload()
        }
    }
})
.mount('#app')
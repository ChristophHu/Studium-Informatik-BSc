class person {
    name: string = ""
    age: number = 0
}

const chris: person = { name: "chris", age: 34 }
const oskar: person = { name: "oskar", age: 22 }

const persons: person[] = []
const p2: person[] = []

persons.push(chris)
p2.push(oskar)

// merge
const newArray = [...persons, ...p2]

console.log(persons)

function firstLetterUppercase(persons: person[]): void {
    persons.map(person => {
        person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
    })

    console.log(persons)
}

firstLetterUppercase(newArray)

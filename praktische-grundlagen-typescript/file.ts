class person {
    name: string = ""
    age: number = 0
}
interface person {
    name: string
    age: number
}

const chris: person = { name: "chris", age: 34 }
const oskar: person = { name: "oskar", age: 22 }

let persons: person[] = []
const p2: person[] = []

persons.push(chris)
p2.push(oskar)

// merge
persons = [...persons, ...p2]

console.log(persons)

function firstLetterUppercase(persons: person[]): void {
    persons.map(person => {
        person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
    })

    console.log(persons)
}

firstLetterUppercase(persons)

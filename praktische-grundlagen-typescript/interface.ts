interface Person {
	name: string
	age: number
	
	greet(): string
}

const user: Person = {
	name: 'Max',
	age: 33,
	greet() {
		return 'Hello'
	}
}

console.log(user.greet())


interface kannLaufen {
    
    laeuft(): string
}

interface kannFliegen {

    fliegt(): string
}

interface kannSchwimmen {

    schwimmt(): string
}

interface kannTauchen {

    taucht(): string
}


class Vogel implements kannFliegen{
    gattung: string = ''
    fliegt(): string {
        return 'fliegt'
    }
    setGattung(gattung: string): void {
        this.gattung = gattung
    }
}

class Hund implements kannLaufen, kannSchwimmen{
    name: string
    
    constructor(name: string){
        this.name = name
    }

    laeuft(): string {
        return 'laeuft'
    }
    schwimmt(): string {
        return 'schwimmt'
    }
}

class Ente extends Vogel implements kannSchwimmen, kannTauchen{
    
    schwimmt(): string {
        return 'schwimmt'
    }
    taucht(): string {
        return 'taucht'
    }
}

const ente1 = new Ente
console.log(ente1.fliegt())
ente1.setGattung('Flugente')
console.log(ente1.gattung)

const bello = new Hund('ballo')
console.log(bello.name)

class Haustier extends Hund {
    halter: string
    constructor(name: string, halter: string) {
        super(name)
        this.halter = halter
    }
}

const fifi = new Haustier('fifi', 'Herrmann')
console.log(`Name: ${fifi.name}, Halter ${fifi.halter}`)
console.log('Name ' +fifi.name +'Halter ' +fifi.halter)
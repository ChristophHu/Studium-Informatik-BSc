export class Task {
	deadline: string
    title: string
    db: any
	constructor(deadline: string, title: string, db: any) {
		this.deadline = deadline
        this.title = title
        this.db = db
	}

    //Funktionen
    getTitle(): string{
        return this.title
    }

    save(): void{

    }
}

//Objekte erzeugen

const specTask = new Task("01.07.2021", "Specialtask", "")
console.log(specTask.getTitle())

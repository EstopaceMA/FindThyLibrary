
class Library {
    name: string;
    location: string;
    description: string;
    
    constructor(
        name: string,
        location: string,
        description: string
    ) {
        this.name = name;
        this.location = location;
        this.description = description;
    }
}

export default Library;
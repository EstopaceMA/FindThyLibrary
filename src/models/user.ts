
class User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoUrl: string | null;

    constructor (
        uid: string,
        displayName: string | null,
        email: string | null,
        photoUrl: string | null
    ) {
        this.uid = uid;
        this.displayName = displayName;
        this.email = email;
        this.photoUrl = photoUrl;
    }

    toJson() {
        return {
            uid: this.uid,
            displayName: this.displayName,
            email: this.email,
            photoURL: this.photoUrl
        };
    }
}

export default User;
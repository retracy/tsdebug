import { Observable, of } from 'rxjs';
import { tap, take } from 'rxjs/operators';

interface IChoices {
    [id: string] : string | {
        choices?: IChoices
    }
}

class Choices implements IChoices {
    [id: string]: string | { choices?: IChoices; };
}

let c: IChoices = {
    "en": "Hello",
    "fr": "no idea"
}

console.log(c)

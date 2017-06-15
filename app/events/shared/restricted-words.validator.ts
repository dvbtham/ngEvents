import { FormControl } from "@angular/forms";

export function restrictedWord(words) {
    return (formControl: FormControl): { [key: string]: any } => {
        if (!words) return null;
        var invalidwords = words.map(w => formControl.value.includes(w) ? w : null)
            .filter(w => w != null);
        return invalidwords && invalidwords.length > 0 ? { 'restrictedWord': invalidwords.join(', ') } : null;
    }
}
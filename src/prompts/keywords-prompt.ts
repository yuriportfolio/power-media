export default function (value: string) {
    return `
        Generate 5 keywords in Portuguese for a post about ${value}.
        Return each item separated by a comma, in lowercase, and without a line break and spaces.
    `;
}
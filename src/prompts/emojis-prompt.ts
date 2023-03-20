export default function (value: string) {
    return `
        Provide five examples of emojis that best represent the following phrase: "${value}".
        Return each item separated by a comma and without a line break.
    `;
}
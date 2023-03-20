export default function (value: string) {
    return `
        Provide five examples of creative slogans that best represent the following description: "${value}".
        Return a array of strings with where each example is an item in the array.
    `;
}
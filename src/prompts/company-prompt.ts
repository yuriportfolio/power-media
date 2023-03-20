export default function (value: string) {
    return `
        Provide five examples of creative company names that best represent the following description: "${value}".
        Return a json where each example is an item in the array.
    `;
}
export default function (value: string) {
    return `
        Provide five examples of creative titles for posts about the theme: "${value}".
        Return a array of strings with where each example is an item in the array.
    `;
}
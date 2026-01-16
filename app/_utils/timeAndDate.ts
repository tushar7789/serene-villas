export default function getTodaysDate() {
    const date = new Date();

    return date.toISOString().slice(0, 10);
}
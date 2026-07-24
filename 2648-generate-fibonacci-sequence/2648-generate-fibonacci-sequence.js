/**
 * @return {Generator<number>}
 */
function fibGenerator() {
    let prev = 0;
    let curr = 1;

    return {
        next() {
            const value = prev;
            const next = prev + curr;

            prev = curr;
            curr = next;

            return {
                value,
                done: false
            };
        }
    };
}
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
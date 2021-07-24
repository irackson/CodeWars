//! https://www.codewars.com/kata/580a4734d6df748060000045/typescript
//* https://www.codewars.com/kata/reviews/581354fb0b85568940000072/groups/60fb67b4198165000121de38

export function isSortedAndHow(array: number[]): string {
    let isAscending: boolean = array[0] < array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
        if (isAscending && array[i] <= array[i + 1]) {
            continue;
        } else if (!isAscending && array[i] >= array[i + 1]) {
            continue;
        } else {
            return 'no';
        }
    }
    return isAscending ? 'yes, ascending' : 'yes, descending';
}

//! https://www.codewars.com/kata/5616868c81a0f281e500005c/typescript
//* https://www.codewars.com/kata/reviews/587f88f8d4bcaf951b0000ac/groups/60fb7ecbaaa3d50001f6c41b

export class G964 {
    public static rank(st: string, we: number[], n: number) {
        if (st === '') {
            return 'No participants';
        }
        const at: string[] = st.split(',');
        if (n > at.length) {
            return 'Not enough participants';
        }

        const answer = at
            .map(
                (s, i) =>
                    (s
                        .toLowerCase()
                        .split('')
                        .map((l) => l.charCodeAt(0) - 96)
                        .reduce((a, b) => a + b) +
                        s.length) *
                    we[i]
            )
            .map((e, i) => [e, at[i]])
            .sort(
                (a, b) =>
                    (b[0] as number) - (a[0] as number) ||
                    (a[1] as string).localeCompare(b[1] as string)
            )[n - 1][1];

        return answer;
    }
}

# tsc-augment-overload

To reproduce
```bash
$ yarn
$ yarn start
tsc --noEmit --project tsconfig.json
app.d.ts:4:12 - error TS2383: Overload signatures must all be exported or non-exported.

4   function get(): string | null;
             ~~~


Found 1 error in app.d.ts:4
```

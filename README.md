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

Fixed on branch `fixed` by applying

```diff
diff --git a/library.d.ts b/library.d.ts
index fefc17e..b128058 100644
--- a/library.d.ts
+++ b/library.d.ts
@@ -1,4 +1,2 @@
-declare function get(): string;
-declare function set(value: string): void;
-
-export { get, set };
+export function get(): string;
+export function set(value: string): void;
```

However, it seems like TypeScript is enforcing a certain code style here.
Both versions of the code seem semantically equivalent to me.

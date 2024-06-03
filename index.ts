import { get, set } from "library";

// module augmentation did work
const value = get();
//    ^? string | null
// @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'string'.
set(value);

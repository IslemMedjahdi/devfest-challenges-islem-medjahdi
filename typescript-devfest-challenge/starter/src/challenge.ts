import { Equal, Expect } from "../helpers/type-utils";

/* _____________ Code goes here _____________ */
type AllValues<T extends Record<PropertyKey, PropertyKey>> = {
  [P in keyof T]: { key: P; value: T[P] };
}[keyof T];

type InvertString<T extends string> = T extends `${infer C}${infer T}`
  ? `${InvertString<T>}${C}`
  : "";

type ReverseObjectValues<T extends { [key: string]: string }> = {
  [P in AllValues<T>["key"]]: InvertString<
    Extract<AllValues<T>, { value: T[P] }>["value"]
  >;
};

/* _____________ Test Cases _____________ */
type Person = {
  firstName: "John";
  lastName: "Doe";
};

type Expected = {
  firstName: "nhoJ";
  lastName: "eoD";
};

const test: ReverseObjectValues<Person> = {
  firstName: "nhoJ",
  lastName: "eoD",
};

type InvalidPerson = { firstName: () => {} };

type cases = [
  Expect<Equal<ReverseObjectValues<Person>, Expected>>,
  Expect<Equal<ReverseObjectValues<Expected>, Person>>,
  ReverseObjectValues<InvalidPerson>
];

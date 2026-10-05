import { expect, test } from "vitest";
import { slug } from "./slug.js";

test("it should be able to create a new slug from text", () => {
  const newSlug = slug.createFromText("Example question title");

  expect(slug.value).toEqual("Example question title");
});

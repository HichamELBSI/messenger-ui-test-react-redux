import { canAccessMessage, cantAccessMessage } from "../helpers";

describe("helpers", () => {
  it("Should not give access to the message", () => {
    const message = "Heyy";
    const hasRights = false;
    const actual = canAccessMessage(hasRights, message);
    expect(actual).toBe(cantAccessMessage);
  });
  it("Should give access to the message", () => {
    const message = "Heyy";
    const hasRights = true;
    const actual = canAccessMessage(hasRights, message);
    expect(actual).toBe(message);
  });
});

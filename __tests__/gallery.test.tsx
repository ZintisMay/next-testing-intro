import { render, screen } from "@testing-library/react";
import Gallery from "@/app/gallery";
import { PersonData } from "@/app/TS_TYPES";

const TEXT_TO_FIND: string = "asdf";

const EMPTY_GALLERY: PersonData[] = [];
const TWO_GALLERY: PersonData[] = [
  {
    name: "Zintis",
    age: 44,
    description: "asdf",
  },
  {
    name: "Zintis",
    age: 44,
    description: "asdf",
  },
];

describe("Gallery", () => {
  // AAA pattern, arrange, action, assertion
  it("no contents?", async () => {
    render(<Gallery data={EMPTY_GALLERY} />); // Arrange
    const galleryItems = await screen.queryAllByText("asdf"); //action
    expect(galleryItems.length).toBe(EMPTY_GALLERY.length); //assertion
  });
  // AAA pattern, arrange, action, assertion
  it("should be two items", async () => {
    render(<Gallery data={TWO_GALLERY} />); // Arrange
    const galleryItems = await screen.queryAllByText("asdf"); //action
    expect(galleryItems.length).toBe(TWO_GALLERY.length); //assertion
  });
  // AAA pattern, arrange, action, assertion
  it("should have name, age, and description", async () => {
    render(<Gallery data={TWO_GALLERY} />); // Arrange
    const itemsWithAge = await screen.queryAllByText("44"); //action
    const itemsWithName = await screen.queryAllByText("Zintis"); //action
    const ItemsWithDescription = await screen.queryAllByText("asdf"); //action
    expect(itemsWithAge.length).toBe(TWO_GALLERY.length); //assertion
    expect(itemsWithName.length).toBe(TWO_GALLERY.length); //assertion
    expect(ItemsWithDescription.length).toBe(TWO_GALLERY.length); //assertion
  });
});

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Developer Keyboard",
    description:
      "A mechanical keyboard designed for developers with programmable keys and ergonomic layout.",
    price: 149.99,
    category: "Hardware",
    features: [
      "Cherry MX switches",
      "Programmable macros",
      "USB-C connection",
      "RGB backlighting",
    ],
  },
  {
    id: "prod-002",
    name: "Ultra-Wide Monitor",
    description:
      "34-inch curved ultra-wide monitor perfect for multi-pane coding setups.",
    price: 599.99,
    category: "Hardware",
    features: [
      "3440x1440 resolution",
      "100Hz refresh rate",
      "USB-C hub built-in",
      "Height adjustable stand",
    ],
  },
  {
    id: "prod-003",
    name: "Standing Desk Pro",
    description:
      "Electric standing desk with memory presets and cable management.",
    price: 799.99,
    category: "Furniture",
    features: [
      "4 memory presets",
      "Quiet motor",
      "Bamboo desktop",
      "Integrated cable tray",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

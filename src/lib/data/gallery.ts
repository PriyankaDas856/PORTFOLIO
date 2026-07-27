export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "square" | "landscape" | "portrait";
}

export const GALLERY: GalleryItem[] = [
  {
    id: "design-1",
    title: "MedPass Dashboard",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    aspect: "landscape",
  },
  {
    id: "design-2",
    title: "Skylark Analytics",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    aspect: "square",
  },
  {
    id: "design-3",
    title: "EcoLens Mapping",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "design-4",
    title: "CrowdMind Interface",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    aspect: "landscape",
  },
  {
    id: "design-5",
    title: "IIRIS Dashboard",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    aspect: "square",
  },
  {
    id: "design-6",
    title: "Portfolio Design System",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    aspect: "landscape",
  },
];

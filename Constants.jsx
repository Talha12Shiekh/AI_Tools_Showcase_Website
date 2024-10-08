import ImageCategoryImage from "/image_category.svg";
import IconCategoryImage from "/icon_category.svg";
import PdfCategoryImage from "/pdf_category.svg";
import VideoCategoryImage from "/video_category.svg";
import BackgroundCategoryImage from "/background_category.svg";
import BgRemovalCategoryImage from "/bgremoval_category.svg";
import TextCategoryImage from "/text_category.svg";
import ConvertApiIcon from "/ConvertApi.png";
import ConvertApiImage from "/Convert_Api_Image.png";
import RemoveBgIcon from "/remove-bg-icon.png";
import RemoveBgFront from "/Remove-bg-front.png";
import HuggingFaceIcon from "/hugging-face-icon.svg";
import HuggingFaceFront from "/hugging-face-front.png";
import OpenAIIcon from "/open-ai-icon.png";
import OpenAIFront from "/open-ai-front.png";
import RapidApiIcon from "/rapid-api-icon.png";
import RapidApiFront from "/rapid-api-front.png";
import MockupStudioIcon from "/mockup-studio-icon.png";
import MockupStudioFront from "/mockup-generator-front.png";
import IconGeneratorIcon from "/icon-generator-icon.png";
import IconGeneratorFront from "/icon-generator-front.png";
import generatedimg1 from "/generated-img-1.jpg";
import generatedimg2 from "/generated-img-2.jpg";
import generatedimg3 from "/generated-img-3.jpg";
import generatedimg4 from "/generated-img-4.jpg";
import generatedimg5 from "/generated-img-5.jpg";
import generatedimg6 from "/generated-img-6.jpg";
import defaulticon1 from "/default-icon-1.jpg";
import defaulticon2 from "/default-icon-2.jpg";
import defaulticon3 from "/default-icon-3.jpg";
import defaulticon4 from "/default-icon-4.jpg";
import defaulticon5 from "/default-icon-5.jpg";
import defaulticon6 from "/default-icon-6.jpg";
import defaulticon7 from "/default-icon-7.jpg";
import defaulticon8 from "/default-icon-8.jpg";

import {
  FacebookRounded,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

export const pages = ["Home", "Categories", "Tools"];

export const LINK_UNDERLINE_COLOR = "#625df5";
export const GREY_COLOR = "hsla(0,0%,100%,.7)";

export const IMAGE_SIZE = 100;

export const DEFAULT_ICONS = [
  {
    item:defaulticon1,
    key:1
  },
  {
    item:defaulticon2,
    key:2
  },
  {
    item:defaulticon3,
    key:3
  },
  {
    item:defaulticon4,
    key:4
  },
  {
    item:defaulticon5,
    key:5
  },
  {
    item:defaulticon6,
    key:6
  },
  {
    item:defaulticon7,
    key:7
  },
  {
    item:defaulticon8,
    key:8
  },
]

export const CATEGORIES = [
  {
    cname: "Image",
    cdescription:
      "Discover AI-powered image editing and enhancement tools designed to elevate your creativity. From filters to artistic transformations.",
    cicon: ImageCategoryImage,
    ckey: 1,
  },
  {
    cname: "Icon",
    cdescription:
      "Explore AI tools for icon creation and customization. Craft unique, scalable icons that bring clarity and style to any digital project with ease and precision.",
    cicon: IconCategoryImage,
    ckey: 2,
  },
  {
    cname: "PDF",
    cdescription:
      "Simplify your workflow with AI-driven PDF tools for editing, converting, and organizing documents. Handle all your PDF tasks efficiently in one place.",
    cicon: PdfCategoryImage,
    ckey: 3,
  },
  {
    cname: "Video",
    cdescription:
      "Unlock the potential of AI in video editing and creation. Automate cutting-edge video processing, from effects to enhancements, for professional-level results.",
    cicon: VideoCategoryImage,
    ckey: 4,
  },
  {
    cname: "Background",
    cdescription:
      "Seamlessly change or enhance backgrounds with AI tools tailored for stunning transformations. Create visually captivating environments with just a few clicks.",
    cicon: BackgroundCategoryImage,
    ckey: 5,
  },
  {
    cname: "Background Removal",
    cdescription:
      "Effortlessly remove backgrounds from images using AI technology. Achieve clean, sharp extractions to integrate your subjects into any project or design.",
    cicon: BgRemovalCategoryImage,
    ckey: 6,
  },
  {
    cname: "News",
    cdescription:
      "Stay ahead with AI-powered news analysis and aggregation tools. Get real-time insights, summaries, and trends tailored to your interests.",
    cicon: TextCategoryImage,
    ckey: 7,
  },
];

const iconStyles = { fontSize: 25, color: "white" };

export const SOCIAL_LINKS = [
  {
    Icon: <FacebookRounded sx={iconStyles} />,
    link: "",
    key: 1,
  },
  {
    Icon: <Twitter sx={iconStyles} />,
    link: "",
    key: 2,
  },
  {
    Icon: <Instagram sx={iconStyles} />,
    link: "https://www.instagram.com/hisky_tech?igsh=MzE1aG9rbDdpMWtp",
    key: 3,
  },
  {
    Icon: <YouTube sx={iconStyles} />,
    link: "",
    key: 4,
  },
  {
    Icon: <LinkedIn sx={iconStyles} />,
    link: "https://www.linkedin.com/company/hiskytech/posts/?feedView=all",
    key: 5,
  },
];

export const TOOLS = [
  {
    name: "HiSkyVisuals",
    description: "Image Generator",
    path: "/ImageGenerationScreen",
    key: 4,
    icon: OpenAIIcon,
    image: OpenAIFront,
  },
  {
    name: "HiSkyIcons",
    description: "Icons Generator",
    path: "/IconGenerationScreen",
    key: 7,
    icon: IconGeneratorIcon,
    image: IconGeneratorFront,
  },
  {
    name: "HiSkyPDF",
    description: "PDF Converter",
    path: "/ImageToPdfScreen",
    key: 1,
    icon: ConvertApiIcon,
    image: ConvertApiImage,
  },
  {
    name: "HiSkyVid",
    description: "Video Generation",
    path: "/VideoGenerationScreen",
    key: 5,
    icon: RapidApiIcon,
    image: RapidApiFront,
  },
  {
    name: "SkyGeneration",
    description: "Background Generation",
    path: "/BackgroundGeneratorScreen",
    key: 3,
    icon: HuggingFaceIcon,
    image: HuggingFaceFront,
  },
  {
    name: "HiSkyErase",
    description: "Background Remover",
    path: "/BackgroundRemoverScreen",
    key: 2,
    icon: RemoveBgIcon,
    image: RemoveBgFront,
  },

  {
    name: "HiSkyMock",
    description: "Mockups Generator",
    path: "/MockupGenerationScreen",
    key: 6,
    icon: MockupStudioIcon,
    image: MockupStudioFront,
  },
];

export const defaultImagesArray = [
  {
    item: generatedimg1,
    key: 1,
  },
  {
    item: generatedimg2,
    key: 2,
  },
  {
    item: generatedimg3,
    key: 3,
  },
  {
    item: generatedimg4,
    key: 4,
  },
  {
    item: generatedimg5,
    key: 5,
  },
  {
    item: generatedimg6,
    key: 6,
  },
];


export async function handleGeneration(n,seturls,prompt) {
  const url = "https://ai-image-generator3.p.rapidapi.com/generate";
  let count = 1;
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_SECRET_IMAGE_GENERATION_KEY,
      "x-rapidapi-host": "ai-image-generator3.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      page: 1,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const array = result.results.images.slice(0, n);
    let newArray = [];
    array.forEach((item) => {
      let object = {
        item,
        key: count++,
      };
      newArray.push(object);
      if (newArray.length === array.length) {
        seturls(newArray);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
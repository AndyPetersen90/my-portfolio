const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeCarouselImages() {
  const inputDir = "public/aboutMePhotos";
  const outputDir = "public/aboutMePhotos/optimized";

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".webp"));

    console.log("Optimizing carousel images...");

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      // Get file stats
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);

      console.log(`Processing ${file} (${originalSize}MB)...`);

      await sharp(inputPath)
        .resize(800, 600, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: 80,
          effort: 6,
        })
        .toFile(outputPath);

      // Get optimized file stats
      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
      const savings = (((stats.size - optimizedStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file}: ${originalSize}MB → ${optimizedSize}MB (${savings}% smaller)`);
    }

    console.log("\nOptimization complete!");
    console.log("To use optimized images, update the photo sources in About.tsx to point to the optimized folder.");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeCarouselImages();

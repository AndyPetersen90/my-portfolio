import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function resizeCarouselImages() {
  const inputDir = "public/aboutMePhotos";
  const outputDir = "public/aboutMePhotos/optimized";

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".webp"));

    console.log(`Found ${files.length} WebP images to optimize...`);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      console.log(`Processing: ${file}`);

      // Get original file size
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);

      await sharp(inputPath)
        .resize(1000, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .webp({
          quality: 85,
          effort: 6,
        })
        .toFile(outputPath);

      // Get optimized file size
      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

      console.log(`  ${file}: ${originalSize}MB → ${optimizedSize}MB (${reduction}% reduction)`);
    }

    console.log("\n✅ All images optimized!");
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    console.log("\nNext steps:");
    console.log("1. Review the optimized images");
    console.log("2. If they look good, replace the originals with the optimized versions");
    console.log("3. Delete the optimized folder");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

resizeCarouselImages();

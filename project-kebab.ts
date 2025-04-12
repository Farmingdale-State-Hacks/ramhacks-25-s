import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Filter strings based on a regex pattern
 */
const stringFilter = (strings: string | string[], regex: RegExp): string | string[] => {
  if (Array.isArray(strings)) {
    return strings.filter((string) => string.match(regex));
  }
  return strings.match(regex) ? strings : "";
};

/**
 * Convert a string to kebab-case
 */
const toKebab = (input: string): string => {
  // Handle file names with extensions separately
  const parts = input.split(".");

  if (parts.length > 1) {
    // For files with extensions
    const extension = parts.pop();
    const fileName = parts.join(".");

    // Convert to kebab case - replace capital letters with '-' + lowercase
    const kebabName = fileName
      .replace(/([A-Z])/g, "-$1") // Add dash before capitals
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/^-/, "") // Remove dash at start if present
      .toLowerCase(); // Convert everything to lowercase

    return `${kebabName}.${extension}`;
  } else {
    // For directories or files without extensions
    return input
      .replace(/([A-Z])/g, "-$1")
      .replace(/\s+/g, "-")
      .replace(/^-/, "")
      .toLowerCase();
  }
};

/**
 * Process all files in a directory to convert them to kebab-case
 */
const convertToKebabCase = (
  directoryPath: string,
  fileExtensions: string[] = [],
): void => {
  const items = fs.readdirSync(directoryPath);

  for (const item of items) {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Rename directory to kebab-case
      const kebabName = toKebab(item);
      if (kebabName !== item) {
        const newPath = path.join(directoryPath, kebabName);
        fs.renameSync(itemPath, newPath);
        // Continue processing in the renamed directory
        convertToKebabCase(newPath, fileExtensions);
      } else {
        // Continue processing in the directory
        convertToKebabCase(itemPath, fileExtensions);
      }
    } else if (stats.isFile()) {
      // Check if the file has one of the specified extensions
      const extension = path.extname(item).toLowerCase().substring(1);
      if (fileExtensions.length === 0 || fileExtensions.includes(extension)) {
        // Rename file to kebab-case
        const kebabName = toKebab(item);
        if (kebabName !== item) {
          const newPath = path.join(directoryPath, kebabName);
          fs.renameSync(itemPath, newPath);
        }
      }
    }
  }
};

(() => {
  try {
    const curr = process.cwd();

    // Get input directory from command line, or use current directory
    const inputDir = process.argv[2] || curr;

    // Get optional file extensions to include
    const extensions = process.argv.slice(3);

    console.log(`Converting files in ${inputDir} to kebab-case`);
    if (extensions.length > 0) {
      console.log(`Only processing files with extensions: ${extensions.join(", ")}`);
    } else {
      console.log("Processing all files");
    }

    convertToKebabCase(inputDir, extensions);

    console.log("Conversion complete!");
  } catch (error) {
    console.error("Error during conversion:", error);
  } finally {
    console.log("Process finished");
  }
})();

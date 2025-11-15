/**
 * Merges and deduplicates class names (Tailwind-free version)
 * Replicates clsx + twMerge behavior for Bootstrap
 */
export function cn(...inputs) {
  // Flatten and filter class lists
  const classes = inputs
    .flat()
    .filter(x => x !== null && x !== undefined && x !== false)
    .map(String);
    
  // Deduplicate classes (basic implementation)
  const uniqueClasses = [];
  const seen = new Set();
  
  for (const cls of classes) {
    const baseClass = cls.split('-')[0]; // Simple dedup by base class
    if (!seen.has(baseClass)) {
      seen.add(baseClass);
      uniqueClasses.push(cls);
    }
  }
  
  return uniqueClasses.join(' ');
}
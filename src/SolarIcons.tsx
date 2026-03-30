// Import the createIconSetFromFontello method
import createIconSetFromFontello from '@expo/vector-icons/createIconSetFromFontello';

// Import the config file
import fontelloConfig from '@/solar-icons/config.json';

// Both the font name and files exported from Fontello are most likely called "fontello".
// Ensure this is the `fontname.ttf` and not the file path.
const SolarIcons = createIconSetFromFontello(fontelloConfig, 'solar-icons', 'font/solar-icons.ttf');

export default SolarIcons;

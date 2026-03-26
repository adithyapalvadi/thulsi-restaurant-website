import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const text = fs.readFileSync(path.join(__dirname, 'menu_raw.txt'), 'utf8');

const defaultCategories = [
    'Platters', 'Meals', 'Soups', 'Salads', 'Starters', 'Main Course',
    'Breads', 'Rice and Biryani', 'South Indian', 'Dosa', 'Uttapam',
    'Fried Rice', 'Pasta', 'Sandwiches', 'Snacks', 'Accompaniments',
    'Desserts', 'Drinks (Beverages)'
];

let items = [];
let currentCategory = 'Combos';

const lines = text.split('\n').filter(line => line.trim() !== '');

for (let line of lines) {
    line = line.trim();

    let isCategory = false;
    for (const cat of defaultCategories) {
        // If line is exactly a category name, or it's a category header (doesn't contain price)
        if (line === cat || (line.startsWith(cat + ' - ') && !line.match(/₹[\d,]+\.\d{2}/))) {
            currentCategory = cat;
            isCategory = true;
            break;
        }
        // If line is a menu item prefixed with category name
        if (line.startsWith(cat + ' ') || line.startsWith(cat + '-')) {
            currentCategory = cat;
            line = line.substring(cat.length).trim();
            if (line.startsWith('- ')) {
                line = line.substring(2).trim();
            }
            break;
        }
    }

    if (isCategory) continue;

    const priceMatch = line.match(/₹[\d,]+\.\d{2}/);
    if (!priceMatch) {
        continue;
    }

    const price = priceMatch[0];
    let fullDesc = line.replace(price, '').trim();

    let isJain = false;
    let isSpecial = false;
    if (fullDesc.includes('[Jain Preparation]')) {
        isJain = true;
        fullDesc = fullDesc.replace('[Jain Preparation]', '').trim();
    }

    if (fullDesc.toLowerCase().includes('special')) {
        isSpecial = true;
    }

    let tag = '';
    if (isJain) tag = 'Jain Available';
    else if (isSpecial) tag = 'Chef Special';
    else tag = 'Regular';

    items.push({
        name: fullDesc,
        desc: '',
        price: price,
        tag: tag,
        cat: currentCategory
    });
}

fs.writeFileSync(path.join(__dirname, 'src/data/menuData.js'), 'export const fullMenu = ' + JSON.stringify(items, null, 2) + ';\n');
console.log(`Parsed ${items.length} items`);

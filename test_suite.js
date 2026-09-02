const fs = require('fs');
const path = require('path');

console.log('=== TEST 1: JSON DATA INTEGRITY ===');
['ielts_data.json', 'it_data.json', 'marketing_data.json'].forEach(f => {
    try {
        const fullPath = path.join(__dirname, f);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const d = JSON.parse(content);
            console.log(`  [PASS] ${f}: Valid JSON (${Array.isArray(d) ? d.length + ' items' : typeof d})`);
        } else {
            console.log(`  [MISSING] ${f} not found`);
        }
    } catch (e) {
        console.error(`  [FAIL] ${f}: ${e.message}`);
    }
});

console.log('\n=== TEST 2: DOM ELEMENT ID AUDIT ===');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'js/app.js'), 'utf8');

const htmlIds = new Set();
const idMatches = html.matchAll(/\bid=["']([^"']+)["']/g);
for (const m of idMatches) {
    htmlIds.add(m[1]);
}

const getElemMatches = appJs.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g);
const missingIds = new Set();
for (const m of getElemMatches) {
    const id = m[1];
    if (!htmlIds.has(id)) {
        missingIds.add(id);
    }
}

if (missingIds.size > 0) {
    console.warn(`  [WARN] Found ${missingIds.size} missing element IDs referenced in app.js:`);
    for (const id of missingIds) {
        console.warn(`    - ${id}`);
    }
} else {
    console.log('  [PASS] 100% of getElementById references match index.html elements!');
}

console.log('\n=== TEST 3: INLINE EVENT HANDLER AUDIT ===');
const inlineEventMatches = html.matchAll(/\bon[a-z]+="([^"]+)"/gi);
const calledFns = new Set();
for (const m of inlineEventMatches) {
    const expr = m[1].trim();
    const fnMatch = expr.match(/^([a-zA-Z0-9_$]+)\s*\(/);
    if (fnMatch) {
        calledFns.add(fnMatch[1]);
    }
}

let missingFnCount = 0;
for (const fn of calledFns) {
    const inApp = appJs.includes(`function ${fn}`) || appJs.includes(`${fn} =`) || appJs.includes(`window.${fn}`);
    const inHtml = html.includes(`function ${fn}`);
    if (!inApp && !inHtml) {
        console.warn(`  [FAIL] Missing handler function: ${fn}`);
        missingFnCount++;
    } else {
        console.log(`  [PASS] Handler found: ${fn}()`);
    }
}
if (missingFnCount === 0) {
    console.log('  [PASS] All inline event handlers are defined!');
}

console.log('\n=== TEST 4: VOCABULARY DATA LOAD CHECK ===');
const vocabDataFiles = [
    'vocab_data.js',
    'new_vocab_a1a2.js',
    'b1_vocab_data.js',
    'b2_vocab_data.js',
    'premium_vocab.js',
    'toeic_650_data.js'
];
for (const f of vocabDataFiles) {
    const p = path.join(__dirname, 'js', f);
    if (fs.existsSync(p)) {
        const stats = fs.statSync(p);
        console.log(`  [PASS] js/${f} exists (${Math.round(stats.size / 1024)} KB)`);
    } else {
        console.error(`  [FAIL] js/${f} NOT found!`);
    }
}

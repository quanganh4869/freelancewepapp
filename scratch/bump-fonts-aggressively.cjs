const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// 1. Inputs and textareas
// Currently text-lg, change to text-xl
html = html.replace(/class="([^"]*)text-lg([^"]*)"/g, 'class="$1text-xl$2"');

// 2. Labels for inputs
// Currently text-base, change to text-lg
html = html.replace(/<label class="block text-base font-bold/g, '<label class="block text-lg font-bold');

// 3. Option card titles
// Currently text-base, change to text-lg
html = html.replace(/<h3 class="font-bold text-base/g, '<h3 class="font-bold text-lg');
html = html.replace(/<span class="font-medium">/g, '<span class="font-bold text-lg">'); // Some radios like budget/timeline
html = html.replace(/<div class="border border-border-tone rounded-xl p-4 text-center bg-white font-medium/g, '<div class="border border-border-tone rounded-xl p-4 text-center bg-white font-bold text-lg');
html = html.replace(/<div class="border border-border-tone rounded-xl p-4 text-center bg-surface font-medium text-brand/g, '<div class="border border-border-tone rounded-xl p-4 text-center bg-surface font-bold text-lg text-brand');
html = html.replace(/<div class="border border-border-tone rounded-full px-5 py-2.5 bg-white font-medium/g, '<div class="border border-border-tone rounded-full px-5 py-2.5 bg-white font-bold text-lg');
html = html.replace(/<div class="border border-border-tone rounded-full px-5 py-2.5 bg-surface font-medium/g, '<div class="border border-border-tone rounded-full px-5 py-2.5 bg-surface font-bold text-lg');
html = html.replace(/<div class="border border-border-tone rounded-xl p-4 text-center transition-all bg-white hover:border-brand font-medium/g, '<div class="border border-border-tone rounded-xl p-4 text-center transition-all bg-white hover:border-brand font-bold text-lg');

// 4. Feature Option Card text
// Currently text-sm, change to text-lg
html = html.replace(/<p class="font-bold text-sm">/g, '<p class="font-bold text-lg">');

// 5. Descriptions / Helper texts
// Currently text-sm text-text-muted, change to text-base text-text-muted
html = html.replace(/class="text-sm text-text-muted([^"]*)"/g, 'class="text-base text-text-muted$1"');

// 6. Very small texts
// Currently text-xs text-text-muted, change to text-sm text-text-muted
html = html.replace(/class="text-xs text-text-muted([^"]*)"/g, 'class="text-sm text-text-muted$1"');

// 7. Step indicators and small uppercase
// Currently text-xs, change to text-sm
html = html.replace(/class="text-brand font-bold uppercase tracking-widest text-xs/g, 'class="text-brand font-bold uppercase tracking-widest text-sm');

// 8. Buttons
// Currently text-base, change to text-lg
html = html.replace(/class="px-8 py-4 bg-ink text-white font-bold rounded-xl hover:bg-brand transition-colors ml-auto flex items-center gap-2/g, 'class="px-8 py-4 text-lg bg-ink text-white font-bold rounded-xl hover:bg-brand transition-colors ml-auto flex items-center gap-2');
html = html.replace(/class="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-ink transition-colors shadow-lg shadow-brand\/20 flex items-center gap-2/g, 'class="px-8 py-4 text-lg bg-brand text-white font-bold rounded-xl hover:bg-ink transition-colors shadow-lg shadow-brand/20 flex items-center gap-2');
html = html.replace(/class="px-6 py-4 text-base font-bold text-text-muted/g, 'class="px-6 py-4 text-lg font-bold text-text-muted');


fs.writeFileSync('contact.html', html);
console.log('Successfully bumped fonts aggressively in contact.html');

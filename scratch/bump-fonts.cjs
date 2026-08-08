const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// Increase text sizes for inputs in step 5
html = html.replace(/<textarea name="message"([^>]*)class="([^"]*)"/g, (match, p1, p2) => {
    if (!p2.includes('text-lg')) {
        return `<textarea name="message"${p1}class="${p2} text-lg"`;
    }
    return match;
});

html = html.replace(/<input type="text" name="references"([^>]*)class="([^"]*)"/g, (match, p1, p2) => {
    if (!p2.includes('text-lg')) {
        return `<input type="text" name="references"${p1}class="${p2} text-lg"`;
    }
    return match;
});

// Increase label sizes from text-sm to text-base
html = html.replace(/<label class="block text-sm font-bold/g, '<label class="block text-base font-bold');

// Increase helper texts from text-xs to text-sm
html = html.replace(/<p class="text-xs text-text-muted/g, '<p class="text-sm text-text-muted');

// Some other text-sm in the options to text-base
html = html.replace(/<h3 class="font-bold text-sm/g, '<h3 class="font-bold text-base');
html = html.replace(/<span class="font-bold text-sm block">/g, '<span class="font-bold text-base block">');
html = html.replace(/<span class="font-bold text-sm">/g, '<span class="font-bold text-base">');

// For the options descriptions
html = html.replace(/<span class="text-xs text-text-muted">/g, '<span class="text-sm text-text-muted">');
html = html.replace(/<p class="text-\[11px\] text-text-muted">/g, '<p class="text-xs text-text-muted">');


fs.writeFileSync('contact.html', html);
console.log('Successfully updated contact.html');

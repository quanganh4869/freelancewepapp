const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace all toggleContactModal usages
html = html.replace(/onclick="toggleContactModal\(\)"/g, '');
html = html.replace(/href="javascript:void\(0\)"/g, 'href="contact.html"');
html = html.replace(/href="#" onclick="toggleContactModal\(\)"/g, 'href="contact.html"');

// Specifically handle buttons that were using onclick to navigate
html = html.replace(/<button([^>]*)class="bg-brand text-white px-10 py-5([^>]*)>/g, '<a href="contact.html"$1class="inline-block bg-brand text-white px-10 py-5$2>');
html = html.replace(/<\/button>\s*<!-- Process -->/g, '</a>\n    <!-- Process -->');

// Remove the entire modal and script
// The modal starts with <!-- Contact Modal --> and ends right before <!-- React and Agentation Mount Point -->
const modalStartIndex = html.indexOf('<!-- Contact Modal -->');
const mountPointIndex = html.indexOf('<!-- React and Agentation Mount Point -->');

if (modalStartIndex !== -1 && mountPointIndex !== -1) {
    const beforeModal = html.substring(0, modalStartIndex);
    const afterModal = html.substring(mountPointIndex);
    html = beforeModal + afterModal;
}

fs.writeFileSync('index.html', html);
console.log('Successfully updated index.html');

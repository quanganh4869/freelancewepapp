const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// 1. Fix "Liên hệ" in Portfolio (Step 2)
html = html.replace(/<label class="option-card"><input type="checkbox" name="typeDetailsCb" value="Liên hệ"[^>]*><div[^>]*>.*?<\/div> Liên hệ<\/div><\/label>/g, '');

// 2. Fix "Thông tin liên hệ" in Materials (Step 4)
html = html.replace(/value="Thông tin liên hệ"/g, 'value="Địa chỉ / SĐT cửa hàng"');
html = html.replace(/<\/div> Thông tin liên hệ<\/div>/g, '</div> Địa chỉ / SĐT cửa hàng</div>');

// 3. Add dynamic filtering logic to the features section
// Wrap the features grid with an ID
html = html.replace(/<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">/, '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" id="features-grid">');

// Add specific data-types to each feature
const featureMapping = {
    'Form liên hệ': 'Website cá nhân / Portfolio,Website giới thiệu,Landing page,Website bán hàng,Website đặt lịch / đặt dịch vụ,Website blog / tin tức,Web quản lý nhỏ',
    'Nút gọi điện / Zalo': 'Website cá nhân / Portfolio,Website giới thiệu,Landing page,Website bán hàng,Website đặt lịch / đặt dịch vụ',
    'Đặt lịch': 'Website đặt lịch / đặt dịch vụ',
    'Đăng ký / đăng nhập': 'Website bán hàng,Website blog / tin tức,Web quản lý nhỏ',
    'Bán hàng': 'Website bán hàng',
    'Thanh toán online': 'Website bán hàng,Website đặt lịch / đặt dịch vụ',
    'Tìm kiếm': 'Website giới thiệu,Website bán hàng,Website blog / tin tức,Web quản lý nhỏ',
    'Blog / bài viết': 'Website cá nhân / Portfolio,Website blog / tin tức',
    'Trang quản lý': 'Web quản lý nhỏ',
    'Bản đồ': 'Website giới thiệu,Website bán hàng',
    'Thư viện ảnh': 'Website cá nhân / Portfolio,Website giới thiệu,Website blog / tin tức',
    'Chat': 'Website giới thiệu,Landing page,Website bán hàng,Website đặt lịch / đặt dịch vụ',
    'Khác': 'Website cá nhân / Portfolio,Website giới thiệu,Landing page,Website bán hàng,Website đặt lịch / đặt dịch vụ,Website blog / tin tức,Web quản lý nhỏ',
    'Tôi chưa biết': 'Website cá nhân / Portfolio,Website giới thiệu,Landing page,Website bán hàng,Website đặt lịch / đặt dịch vụ,Website blog / tin tức,Web quản lý nhỏ'
};

for (const [val, types] of Object.entries(featureMapping)) {
    const regex = new RegExp(`(<label class="option-card[^"]*")>\\s*(<input type="checkbox" name="features"[^>]*value="${val}")`, 'g');
    html = html.replace(regex, `$1 data-types="${types}">\n                                    $2`);
}

// 4. Update the logic inside <script>
const scriptToInject = `
        // Conditional Logic Listeners
        document.querySelectorAll('input[name="type"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const val = e.target.value;
                document.getElementById('sub-questions').classList.remove('hidden');
                document.getElementById('sub-sales').classList.add('hidden');
                document.getElementById('sub-business').classList.add('hidden');
                document.getElementById('sub-portfolio').classList.add('hidden');
                
                if(val === 'Website bán hàng') {
                    document.getElementById('sub-sales').classList.remove('hidden');
                } else if(val === 'Website giới thiệu') {
                    document.getElementById('sub-business').classList.remove('hidden');
                } else if(val === 'Website cá nhân / Portfolio') {
                    document.getElementById('sub-portfolio').classList.remove('hidden');
                } else {
                    document.getElementById('sub-questions').classList.add('hidden');
                }

                // FEATURE FILTERING LOGIC
                const featuresGrid = document.getElementById('features-grid');
                if (!featuresGrid) return;

                if (val === 'Tôi chưa chắc, cần tư vấn' || val === 'Khác') {
                    // Hide checkboxes, uncheck everything
                    featuresGrid.classList.add('hidden');
                    document.querySelectorAll('input[name="features"]').forEach(cb => cb.checked = false);
                } else {
                    featuresGrid.classList.remove('hidden');
                    // Show only features relevant to the selected type
                    document.querySelectorAll('label[data-types]').forEach(label => {
                        const typesAttr = label.getAttribute('data-types');
                        if (typesAttr && typesAttr.includes(val)) {
                            label.classList.remove('hidden');
                        } else {
                            label.classList.add('hidden');
                            // uncheck if hidden
                            const cb = label.querySelector('input');
                            if (cb) cb.checked = false;
                        }
                    });
                }
            });
        });
`;

html = html.replace(/\/\/ Conditional Logic Listeners[\s\S]*?(?=\/\/ "Unsure" toggle for Features)/, scriptToInject + '\n        ');

fs.writeFileSync('contact.html', html);
console.log('Successfully injected branching logic into contact.html');

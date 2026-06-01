const CONFIG = {
    spreadsheetId: "1YHQOEa6GdjCeGHmV3HL418irLFGw6rNxbBAVZODeYMk",
    serviceAccountEmail: "test-gia-ason@api-test-sheet-161.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3NN84hLTkQPZd
Lj7niXZTICq7nHsuTn3J6r2Paq12m70/lYSmrwh1i0EStr9bO19QM8cevGlslwGr
WSVOLJlc6+w1HGPKvRXtA41kYV9MYIvpzIPQtkFE7Hxq71QyBARcv39Lfzze6Ioj
3G8VBvAKFLAnCUr97GHRv+KbCTFxPZupd3PEB+xS5ZUlzdBCEZvDid3iXaaEJJ+l
Td1apAGQHjtnDTLOkiTa8zf7X5ebALwnI9MziOdN8VyprHXGhkachPbKyrG0QwEs
2jtiI6Y5ULsBPjNefoavH8MKU5DEAT9h0fZ7KfsKYVMDuXqmEKBs0D3B4Z6aDZQW
wT2dDRZDAgMBAAECggEAEIuVoSzZVuFhaz1GI9ji0IacjvO50cIq7M8Zrj4/F756
Ew6PIhKENafAb7U4INm2AnzUMO8CqL9Jpxs85qUM3W4JysSByqLUiRW2184amIyb
j7jCXfLBTQn8AbHgrUepl5d/vBmFYMgon/mqjbNiGDb4FZgEQSkie5o6fi/dWp5d
NahbZl+WTOB/znhAfKh/zferHNxldR/ERmwOubZUerkqysWiBigc3ovpLSUof9ur
z3hNPPp0CKQjF40xuQc6FYTHUHMLuMvp78PXuc/mYqQmZ8VOGhU+faGtZ4m+QJly
dF5dS8U5cwKEF+ptuAUiWSahn6INb9yKn3+FcsW0UQKBgQDb8N4eWFvbgpRo/vxo
wBN2u2TWubj6clcrq/1a+VR0njC28Can0ogJHhrFhPxVs5D/rugs3HlbyAXJFptY
V0DZPCwBxGU5P5RbGjXWWEUXjp4ISKQD8WKfVlXNr79TqLdOg2NZBYQAi06Cpo/T
PV9l7LSG2Tj/9WdvD7W2wvrpaQKBgQDVPjpJN6xh7+sHtSU0mjKvrqigpHbuSQ/o
XpUaWSIpJffm5QpFPAOcTT5mHZCyllicJQIrfPSY+sH8n+sF03CUqVkV4Q2UqfOf
pFaLDB4P6SQ8iesZyF4VKFrj/cAvRJmp0e5W/DRnFkoEp+8c+nrru2+Dzm9kb7Uq
0CiltqYAywKBgBtcfrV1to+7Ue0x84KwintV2rifyDRX7yI+tjkQFYKgf1zyyUxN
c6D2vsvdvGqI+TvlrXqPPwW8/4NBrbeyux2LT8o0fYc+sp0WyKXOu2Gv21caelUH
PYam/eultn6Y2Z0J2V0kw4Qx0GWOhQv5cZnDdb3k3iNxixmU8b03ynEpAoGBAKEA
7O0fNe50QRZ+tOq0ihSPYQ55XrqnO3WNBDLynZJH8pbI1CpWF7vJrpVXOUs9rQWo
A61mGR/wJMtiywaJEHWOL48PbzuR3jno0NcHfSMyOoPi9jlvSWncIFQH4TVPLF5F
/Rh8L+ytrZE6YpWUoX6e9KGmGgDRPw5mQGpuL4RlAoGADe9n080SXlsUk4nHVjUz
Efv7EBoBkgOpqb9T1foRfJl46NxmmTOYV3iGIhjwcDskEg284k4iq/gH6EEFyEBc
Vz13jzB1nBgjfezFesVQz7bA/+Wik6HZtxAxVg38BKMt+Q1tYw9wOjbGPqOn++VC
sR2Sh8e3h3Knd6j1tceRIFU=
-----END PRIVATE KEY-----`,
    tokenUrl: "https://oauth2.googleapis.com/token",
    tabs: {
        'THONG_TIN': {
            range: 'THONG_TIN!A2:K',
            headers: ['id', 'truong', 'ten', 'ten_dang_nhap', 'mk', 'mail', 'ghi_chu', 'noi_dung', 'link', 'link_2', 'anh'],
            priceCols: [],
            imgCol: 10
        },
        'DON_HANG': {
            range: 'DON_HANG!A2:V',
            headers: ['gian_hang', 'ngay', 'ngay_h', 'mdh', 'mvd', 'tong_tien', 'Phí cố định', 'Phí Dịch Vụ', 'Phí xử lý giao dịch', 'phí thuế', 'phí piship', 'tien_thu_đc', 'phí khác', 'tien_sp', 'loi_nhuan', 'tinh_trang', 'trang_thai', 'SKU phân loại hàng', 'id_sp', 'slg', 'don_gia', 'thanh_tien'],
            displayHeaders: ['gian_hang', 'ngay', 'ngay_h', 'mdh', 'mvd', 'tong_tien', 'Phí cố định', 'Phí Dịch Vụ', 'Phí xử lý giao dịch', 'phí thuế', 'phí piship', 'tien_thu_đc', 'phí khác', 'tien_sp', 'loi_nhuan', 'tinh_trang', 'trang_thai'],
            priceCols: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 21]
        }
    }
};

const XNK_TT_TAB_STORAGE_KEY = 'xnkTtActiveTab';

let currentTab = 'THONG_TIN', allData = [], accessToken = null, tokenExpiry = 0;
let currentPage = 1, rowsPerPage = 150, filteredData = [];
let sheetTitleToIdCache = null;
let thongTinStoreNames = [];
let editingDonHangRows = [];

const TAB_LABELS = {
    THONG_TIN: 'THÔNG TIN',
    DON_HANG: 'ĐƠN HÀNG'
};

const ID_PREFIXES = {
    THONG_TIN: 'TT'
};

const DON_HANG_HEADERS = CONFIG.tabs.DON_HANG.headers;
const DON_HANG_INDEX = Object.fromEntries(DON_HANG_HEADERS.map((header, index) => [header, index]));
const DON_HANG_NUMERIC_HEADERS = new Set(['tong_tien', 'Phí cố định', 'Phí Dịch Vụ', 'Phí xử lý giao dịch', 'phí thuế', 'phí piship', 'tien_thu_đc', 'phí khác', 'tien_sp', 'loi_nhuan', 'slg', 'don_gia', 'thanh_tien']);

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiry - 300000) return accessToken;
    const header = { alg: "RS256", typ: "JWT" }, now = Math.floor(Date.now() / 1000),
        payload = { iss: CONFIG.serviceAccountEmail, scope: "https://www.googleapis.com/auth/spreadsheets", aud: CONFIG.tokenUrl, exp: now + 3600, iat: now };
    const sJWT = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), CONFIG.privateKey);
    const res = await fetch(CONFIG.tokenUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${sJWT}` });
    const data = await res.json();
    accessToken = data.access_token; tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
}

async function switchTab(tabName) {
    currentTab = CONFIG.tabs[tabName] ? tabName : 'THONG_TIN';
    try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { /* ignore */ }
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === currentTab);
    });
    document.getElementById('tableWrapper').style.display = 'block';
    document.getElementById('pagination').style.display = 'flex';
    document.getElementById('headerActions').style.display = 'flex';
    document.getElementById('pageTitle').innerText = 'Hệ thống';
    const uploadBtn = document.getElementById('uploadBtn');
    const addBtn = document.getElementById('addBtn');
    const truongFilter = document.getElementById('truongFilter');
    const storeFilter = document.getElementById('storeFilter');
    const orderFilters = document.getElementById('orderFilters');
    const isThongTinModule = currentTab === 'THONG_TIN';
    const isDonHangModule = currentTab === 'DON_HANG';
    if (uploadBtn) {
        uploadBtn.innerHTML = `<i data-lucide="upload" style="width:18px;"></i> ${isDonHangModule ? 'Thêm từ Excel' : `Tải ${currentTab} Lên`}`;
        uploadBtn.style.display = 'flex';
        lucide.createIcons();
    }
    if (addBtn) addBtn.style.display = 'flex';
    if (truongFilter) {
        truongFilter.style.display = isThongTinModule ? 'block' : 'none';
        lucide.createIcons();
    }
    if (storeFilter) {
        storeFilter.style.display = isDonHangModule ? 'block' : 'none';
    }
    if (orderFilters) {
        orderFilters.style.display = isDonHangModule ? 'flex' : 'none';
    }
    document.getElementById('searchInput').value = '';
    resetFilters();
    currentPage = 1;
    if (isDonHangModule) await fetchThongTinStoreNames();
    await fetchData();
}

function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    const icon = document.querySelector('.sidebar-toggle i');
    if (icon) {
        icon.setAttribute('data-lucide', document.body.classList.contains('sidebar-collapsed') ? 'panel-left-open' : 'panel-left-close');
        lucide.createIcons();
    }
}

async function reloadCurrentTab() {
    currentPage = 1;
    await fetchData();
    filterTable();
}

async function fetchData() {
    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang tải dữ liệu ${currentTab}...`;
    try {
        const token = await getAccessToken();
        const tabConfig = CONFIG.tabs[currentTab];
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${tabConfig.range}`, { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        const rawRows = data.values || [];
        allData = rawRows.map((row, i) => {
            const arr = Array.isArray(row) ? row.slice() : [];
            arr._sheetRow = i + 2;
            return arr;
        });
        filteredData = currentTab === 'DON_HANG' ? getDonHangSummaryRows() : [...allData];
        if (currentTab === 'DON_HANG') {
            filteredData.sort((a, b) => parseDonHangDateTime(b[DON_HANG_INDEX.ngay_h]) - parseDonHangDateTime(a[DON_HANG_INDEX.ngay_h]));
            updateDonHangSummary();
        }
        populateFilters();
        renderHeaders();
        renderTable();
    } catch (e) {
        console.error("Lỗi khi tải dữ liệu:", e);
        alert("Không thể tải dữ liệu. Vui lòng kiểm tra lại sheet '" + currentTab + "' có tồn tại không.");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function renderHeaders() {
    const head = document.getElementById('tableHead');
    const tabConfig = CONFIG.tabs[currentTab];
    head.innerHTML = `<tr>${getDisplayHeaders().map(h => `<th>${h.toUpperCase()}</th>`).join('')}</tr>`;
}

function normalizeRow(row) {
    const source = Array.isArray(row) ? row : [];
    return getStorageHeaders().map((_, idx) => String(source[idx] ?? '').trim());
}

function getStorageHeaders(tabName = currentTab) {
    const tabConfig = CONFIG.tabs[tabName];
    return tabConfig.headers;
}

function getDisplayHeaders(tabName = currentTab) {
    const tabConfig = CONFIG.tabs[tabName];
    return tabConfig.displayHeaders || tabConfig.headers;
}

function getDonHangSummaryRows(rows = allData) {
    const summaries = new Map();
    rows.forEach(row => {
        const orderId = getRowId(row, 'DON_HANG');
        if (!orderId) return;
        if (!summaries.has(orderId)) summaries.set(orderId, row);
    });
    return [...summaries.values()];
}

function colName(index) {
    let name = '';
    let num = index + 1;
    while (num > 0) {
        const rem = (num - 1) % 26;
        name = String.fromCharCode(65 + rem) + name;
        num = Math.floor((num - 1) / 26);
    }
    return name;
}

function getRowId(row, tabName = currentTab) {
    if (tabName === 'DON_HANG') {
        return String(row?.[DON_HANG_INDEX.mdh] || '').trim();
    }
    return String((row && row[0]) || '').trim();
}

function getRowById(id) {
    const key = String(id || '').trim();
    if (!key) return null;
    return allData.find(row => getRowId(row) === key) || null;
}

function generateNextId(extraIds = []) {
    const ids = [...allData.map(getRowId), ...extraIds].filter(Boolean);
    const numericIds = ids.map(id => Number(id)).filter(n => Number.isFinite(n));
    if (numericIds.length === ids.length && numericIds.length) {
        return String(Math.max(...numericIds) + 1);
    }
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0'),
        String(now.getHours()).padStart(2, '0'),
        String(now.getMinutes()).padStart(2, '0'),
        String(now.getSeconds()).padStart(2, '0')
    ].join('');
    let candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}`;
    let suffix = 1;
    while (ids.includes(candidate)) {
        suffix += 1;
        candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}-${suffix}`;
    }
    return candidate;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeJsString(value) {
    return String(value ?? '')
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\r/g, '\\r')
        .replace(/\n/g, '\\n');
}

function setDatalistOptions(id, values) {
    const datalist = document.getElementById(id);
    if (!datalist) return;
    const counts = new Map();
    values.filter(Boolean).forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
    const uniqueValues = [...counts.keys()].sort();
    datalist.innerHTML = uniqueValues
        .map(value => `<option value="${escapeHtml(value)}" label="${escapeHtml(value)} (${counts.get(value)})"></option>`)
        .join('');
}

function setStoreFilterOptions(values) {
    const select = document.getElementById('storeFilter');
    if (!select) return;
    const currentValue = select.value;
    const uniqueValues = [...new Set(values.filter(Boolean))].sort();
    select.innerHTML = `<option value="">Chọn gian hàng...</option>${uniqueValues
        .map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
        .join('')}`;
    if (uniqueValues.includes(currentValue)) select.value = currentValue;
}

function populateFilters() {
    // Thu thập các giá trị của cột 'truong' (index 1) để đưa vào datalist Lọc theo Trường
    const truongValues = allData.map(row => String(row[1] || '').trim()).filter(Boolean);
    setDatalistOptions('truongOptions', truongValues);
    setStoreFilterOptions(currentTab === 'DON_HANG'
        ? [...thongTinStoreNames, ...allData.map(row => String(row[DON_HANG_INDEX.gian_hang] || '').trim())]
        : thongTinStoreNames);
}

function resetFilters() {
    ['truongFilter', 'storeFilter', 'orderDateFrom', 'orderDateTo', 'orderMdhFilter', 'orderMvdFilter', 'orderTinhTrangFilter', 'orderTrangThaiFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

async function fetchThongTinStoreNames() {
    try {
        const token = await getAccessToken();
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/THONG_TIN!C2:C`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Không đọc được danh sách gian hàng.');
        const data = await res.json();
        thongTinStoreNames = [...new Set((data.values || []).map(row => String(row[0] || '').trim()).filter(Boolean))].sort();
        setStoreFilterOptions(thongTinStoreNames);
    } catch (err) {
        console.error('Lỗi khi tải danh sách gian hàng:', err);
        thongTinStoreNames = [];
    }
}

function getDataSheetRow(row) {
    if (row && typeof row._sheetRow === 'number' && row._sheetRow >= 2) return row._sheetRow;
    const idx = allData.indexOf(row);
    return idx >= 0 ? idx + 2 : 0;
}

async function writeRecordRow(row, sheetRow) {
    const token = await getAccessToken();
    const cleanRow = normalizeRow(row);
    const rowNum = Number(sheetRow);
    if (!rowNum || rowNum < 2) throw new Error('Không xác định được dòng cần cập nhật.');
    const endCol = colName(getStorageHeaders().length - 1);

    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A${rowNum}:${endCol}${rowNum}?valueInputOption=RAW`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [cleanRow] })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || 'Cập nhật dòng thất bại.');
    }
}

async function appendRecordRows(rows) {
    if (!rows.length) return;
    const token = await getAccessToken();
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: rows.map(normalizeRow) })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || 'Thêm dòng thất bại.');
    }
}

async function upsertRecordRows(rows) {
    let cleanRows = rows.map(normalizeRow).filter(row => row.some(cell => String(cell || '').trim()));
    if (currentTab === 'DON_HANG') {
        const existingOrderIds = new Set(allData.map(row => getRowId(row)).filter(Boolean));
        let skipped = 0;
        cleanRows = cleanRows.filter(row => {
            const orderId = getRowId(row);
            if (!orderId || existingOrderIds.has(orderId)) {
                skipped += 1;
                return false;
            }
            return true;
        });
        recalculateDonHangRows(cleanRows);
        await appendRecordRows(cleanRows);
        return { updated: 0, inserted: cleanRows.length, skipped };
    }
    let skipped = 0;
    const generatedIds = [];
    cleanRows.forEach(row => {
        if (currentTab === 'DON_HANG') return;
        if (!row[0]) {
            const id = generateNextId(generatedIds);
            row[0] = id;
            generatedIds.push(id);
        }
    });
    if (!cleanRows.length) throw new Error('Không có dòng dữ liệu hợp lệ.');

    const existingById = new Map(allData.map(row => [getRowId(row), row]).filter(([id]) => id));
    const updates = [];
    const appends = [];
    for (const row of cleanRows) {
        const id = getRowId(row);
        const existing = existingById.get(id);
        if (existing) {
            if (currentTab === 'DON_HANG') {
                skipped += 1;
            } else {
                updates.push({ row, sheetRow: getDataSheetRow(existing) });
            }
        } else {
            appends.push(row);
            existingById.set(id, row);
        }
    }

    for (const item of updates) {
        await writeRecordRow(item.row, item.sheetRow);
    }
    await appendRecordRows(appends);
    return { updated: updates.length, inserted: appends.length, skipped };
}

function getFormRowValue(row, header, idx) {
    if (!row) {
        if (currentTab === 'DON_HANG' && header === 'gian_hang') {
            return String(document.getElementById('storeFilter')?.value || '').trim();
        }
        return '';
    }
    return row[idx] || '';
}

function parseMoney(value) {
    if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
    const raw = String(value ?? '').trim();
    if (!raw) return 0;
    const normalized = raw.replace(/\s/g, '').replace(/[^\d,.-]/g, '');
    if (!normalized) return 0;
    if (normalized.includes(',') && normalized.includes('.')) {
        return Number(normalized.lastIndexOf(',') > normalized.lastIndexOf('.')
            ? normalized.replace(/\./g, '').replace(',', '.')
            : normalized.replace(/,/g, '')) || 0;
    }
    if (/^-?\d{1,3}([.,]\d{3})+$/.test(normalized)) return Number(normalized.replace(/[.,]/g, '')) || 0;
    return Number(normalized.replace(',', '.')) || 0;
}

function roundMoney(value) {
    return Math.round((Number(value) || 0) * 100) / 100;
}

function formatDisplayNumber(value) {
    const raw = String(value ?? '').trim();
    if (!raw) return '';
    const number = parseMoney(raw);
    return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 }).format(number);
}

function getDonHangOrderKey(row) {
    return [
        row[DON_HANG_INDEX.gian_hang],
        row[DON_HANG_INDEX.mdh]
    ].map(value => String(value || '').trim()).join('::');
}

function recalculateDonHangRows(rows) {
    const itemTotalsByOrder = new Map();
    rows.forEach(row => {
        const quantity = parseMoney(row[DON_HANG_INDEX.slg]);
        const unitPrice = parseMoney(row[DON_HANG_INDEX.don_gia]);
        const itemTotal = unitPrice && quantity ? roundMoney(unitPrice * quantity) : parseMoney(row[DON_HANG_INDEX.thanh_tien]);
        row[DON_HANG_INDEX.thanh_tien] = itemTotal || '';
        const key = getDonHangOrderKey(row);
        itemTotalsByOrder.set(key, roundMoney((itemTotalsByOrder.get(key) || 0) + itemTotal));
    });
    rows.forEach(row => {
        const total = parseMoney(row[DON_HANG_INDEX.tong_tien]);
        const fixedFee = parseMoney(row[DON_HANG_INDEX['Phí cố định']]);
        const serviceFee = parseMoney(row[DON_HANG_INDEX['Phí Dịch Vụ']]);
        const transactionFee = parseMoney(row[DON_HANG_INDEX['Phí xử lý giao dịch']]);
        const taxFee = roundMoney(total * 0.015);
        const pishipFee = 2700;
        const otherFee = parseMoney(row[DON_HANG_INDEX['phí khác']]);
        const productTotal = itemTotalsByOrder.get(getDonHangOrderKey(row)) || 0;
        const received = roundMoney(total - fixedFee - serviceFee - transactionFee - taxFee - pishipFee);
        row[DON_HANG_INDEX['phí thuế']] = taxFee;
        row[DON_HANG_INDEX['phí piship']] = pishipFee;
        row[DON_HANG_INDEX['tien_thu_đc']] = received;
        row[DON_HANG_INDEX.tien_sp] = productTotal || '';
        row[DON_HANG_INDEX.loi_nhuan] = roundMoney(received - otherFee - productTotal);
    });
    return rows;
}

function getDonHangFieldOptions(header) {
    if (header === 'gian_hang') return thongTinStoreNames;
    if (header === 'tinh_trang') return ['HỦY', 'HOÀN TRẢ', 'HOÀN THÀNH'];
    if (header === 'trang_thai') return ['HỦY', 'HOÀN THÀNH'];
    return null;
}

function recalculateDonHangForm() {
    if (currentTab !== 'DON_HANG') return;
    const row = DON_HANG_HEADERS.map((_, idx) => document.getElementById(`formField_${idx}`)?.value.trim() || '');
    row[DON_HANG_INDEX.ngay] = getDateOnly(row[DON_HANG_INDEX.ngay_h]);
    row[DON_HANG_INDEX.id_sp] = String(row[DON_HANG_INDEX['SKU phân loại hàng']] || '').slice(0, 4);
    recalculateDonHangRows([row]);
    ['ngay', 'phí thuế', 'phí piship', 'tien_thu_đc', 'tien_sp', 'loi_nhuan', 'id_sp', 'thanh_tien'].forEach(header => {
        const input = document.getElementById(`formField_${DON_HANG_INDEX[header]}`);
        if (input) input.value = row[DON_HANG_INDEX[header]];
    });
}

function renderFormFields(row = null) {
    const container = document.getElementById('formFields');
    const headers = getStorageHeaders();
    container.innerHTML = headers.map((header, idx) => {
        const rawValue = getFormRowValue(row, header, idx);
        const value = escapeHtml(rawValue);
        
        if (header === 'id') {
            const idValue = row ? rawValue : generateNextId();
            return `<input id="formField_${idx}" data-field="${header}" type="hidden" value="${escapeHtml(idValue)}">`;
        }

        if (header === 'ghi_chu' || header === 'noi_dung') {
            return `<label><span>${header.toUpperCase()}</span><textarea id="formField_${idx}" data-field="${header}" rows="4">${value}</textarea></label>`;
        }

        if (header === 'truong') {
            return `<label><span>TRƯỜNG</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" list="truongOptions" autocomplete="off"></label>`;
        }

        if (header === 'mail') {
            return `<label><span>EMAIL</span><input id="formField_${idx}" data-field="${header}" type="email" value="${value}"></label>`;
        }

        if (currentTab === 'DON_HANG') {
            const options = getDonHangFieldOptions(header);
            if (options) {
                return `<label><span>${header.toUpperCase()}</span><select id="formField_${idx}" data-field="${header}"><option value=""></option>${options.map(option => `<option value="${escapeHtml(option)}" ${String(rawValue) === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select></label>`;
            }
            if (['ngay', 'phí thuế', 'phí piship', 'tien_thu_đc', 'tien_sp', 'loi_nhuan', 'id_sp', 'thanh_tien'].includes(header)) {
                return `<label><span>${header.toUpperCase()}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" readonly></label>`;
            }
        }

        return `<label><span>${header.toUpperCase()}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}"></label>`;
    }).join('');
}

async function openRecordForm(rowIndex = null) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('productModalTitle');
    const row = rowIndex === null ? null : filteredData[rowIndex];
    
    document.getElementById('editingSheetRow').value = row ? getDataSheetRow(row) : '';
    renderFormFields(row);
    if (currentTab === 'DON_HANG') {
        document.getElementById('formFields').oninput = recalculateDonHangForm;
        recalculateDonHangForm();
    } else {
        document.getElementById('formFields').oninput = null;
    }
    title.innerText = row ? `Sửa ${TAB_LABELS[currentTab] || currentTab}` : `Thêm mới ${TAB_LABELS[currentTab] || currentTab}`;
    modal.classList.add('active');
    document.getElementById('formField_1')?.focus();
    lucide.createIcons();
}

function closeProductForm() {
    document.getElementById('productModal').classList.remove('active');
}

function openDonHangDetail(orderId) {
    const rows = allData.filter(row => getRowId(row, 'DON_HANG') === String(orderId || '').trim());
    if (!rows.length) return;

    const generalHeaders = ['gian_hang', 'ngay', 'ngay_h', 'mdh', 'mvd', 'tinh_trang', 'trang_thai'];
    const financeHeaders = ['tong_tien', 'Phí cố định', 'Phí Dịch Vụ', 'Phí xử lý giao dịch', 'phí thuế', 'phí piship', 'tien_thu_đc', 'phí khác', 'tien_sp', 'loi_nhuan'];
    const itemHeaders = ['SKU phân loại hàng', 'id_sp', 'slg', 'don_gia', 'thanh_tien'];
    const firstRow = rows[0];
    editingDonHangRows = rows;
    document.getElementById('orderDetailTitle').innerText = `Chi tiết đơn hàng ${orderId}`;
    const renderDetailInput = (header, value, extraAttributes = '') => {
        const options = getDonHangFieldOptions(header);
        if (options) {
            return `<select data-order-header="${escapeHtml(header)}">${options
                .map(option => `<option value="${escapeHtml(option)}" ${String(value) === option ? 'selected' : ''}>${escapeHtml(option)}</option>`)
                .join('')}</select>`;
        }
        const displayValue = DON_HANG_NUMERIC_HEADERS.has(header) ? formatDisplayNumber(value) : value;
        return `<input data-order-header="${escapeHtml(header)}" ${extraAttributes} type="text" value="${escapeHtml(displayValue)}">`;
    };
    const renderFieldsTable = (title, headers) => `<section class="order-detail-section">
        <h3>${escapeHtml(title)}</h3>
        <div class="order-detail-table-wrapper">
            <table class="order-detail-edit-table">
                <tbody>${headers.map(header => {
        const value = firstRow[DON_HANG_INDEX[header]] || '';
        return `<tr><th>${escapeHtml(header.toUpperCase())}</th><td>${renderDetailInput(header, value)}</td></tr>`;
    }).join('')}</tbody>
            </table>
        </div>
    </section>`;
    document.getElementById('orderDetailFields').innerHTML =
        renderFieldsTable('THÔNG TIN ĐƠN HÀNG', generalHeaders)
        + renderFieldsTable('THÔNG TIN TÀI CHÍNH', financeHeaders);
    document.getElementById('orderDetailFields').oninput = recalculateDonHangDetail;
    document.getElementById('orderDetailHead').innerHTML = `<tr>${itemHeaders.map(header => `<th>${escapeHtml(header.toUpperCase())}</th>`).join('')}</tr>`;
    document.getElementById('orderDetailBody').innerHTML = rows.map((row, rowIndex) => `<tr>${itemHeaders
        .map(header => `<td><input data-order-item-row="${rowIndex}" data-order-item-header="${escapeHtml(header)}" type="text" value="${escapeHtml(DON_HANG_NUMERIC_HEADERS.has(header) ? formatDisplayNumber(row[DON_HANG_INDEX[header]]) : (row[DON_HANG_INDEX[header]] || ''))}"></td>`)
        .join('')}</tr>`).join('');
    document.getElementById('orderDetailBody').oninput = recalculateDonHangDetail;
    document.getElementById('orderDetailModal').onfocusout = formatDonHangDetailNumbers;
    document.getElementById('orderDetailModal').classList.add('active');
    recalculateDonHangDetail();
    lucide.createIcons();
}

function closeDonHangDetail() {
    document.getElementById('orderDetailModal').classList.remove('active');
    editingDonHangRows = [];
}

function formatDonHangDetailNumbers() {
    DON_HANG_NUMERIC_HEADERS.forEach(header => {
        document.querySelectorAll(`[data-order-header="${CSS.escape(header)}"], [data-order-item-header="${CSS.escape(header)}"]`).forEach(input => {
            input.value = formatDisplayNumber(input.value);
        });
    });
}

function recalculateDonHangDetail() {
    if (!editingDonHangRows.length) return;
    let productTotal = 0;
    editingDonHangRows.forEach((_, rowIndex) => {
        const quantityInput = document.querySelector(`[data-order-item-row="${rowIndex}"][data-order-item-header="slg"]`);
        const unitPriceInput = document.querySelector(`[data-order-item-row="${rowIndex}"][data-order-item-header="don_gia"]`);
        const lineTotalInput = document.querySelector(`[data-order-item-row="${rowIndex}"][data-order-item-header="thanh_tien"]`);
        const lineTotal = roundMoney(parseMoney(quantityInput?.value) * parseMoney(unitPriceInput?.value));
        if (lineTotalInput) lineTotalInput.value = formatDisplayNumber(lineTotal);
        productTotal = roundMoney(productTotal + lineTotal);
    });
    const productTotalInput = document.querySelector(`[data-order-header="tien_sp"]`);
    if (productTotalInput) productTotalInput.value = formatDisplayNumber(productTotal);
    const receivedInput = document.querySelector(`[data-order-header="tien_thu_đc"]`);
    const otherFeeInput = document.querySelector(`[data-order-header="phí khác"]`);
    const profitInput = document.querySelector(`[data-order-header="loi_nhuan"]`);
    if (profitInput) {
        profitInput.value = formatDisplayNumber(parseMoney(receivedInput?.value) - parseMoney(otherFeeInput?.value) - productTotal);
    }
}

function addDonHangItem() {
    if (!editingDonHangRows.length) return;
    const firstRow = normalizeRow(editingDonHangRows[0]);
    const newRow = [...firstRow];
    ['SKU phân loại hàng', 'id_sp', 'slg', 'don_gia', 'thanh_tien'].forEach(header => {
        newRow[DON_HANG_INDEX[header]] = '';
    });
    editingDonHangRows.push(newRow);
    const rowIndex = editingDonHangRows.length - 1;
    const itemHeaders = ['SKU phân loại hàng', 'id_sp', 'slg', 'don_gia', 'thanh_tien'];
    document.getElementById('orderDetailBody').insertAdjacentHTML('beforeend', `<tr>${itemHeaders
        .map(header => `<td><input data-order-item-row="${rowIndex}" data-order-item-header="${escapeHtml(header)}" type="text" value=""></td>`)
        .join('')}</tr>`);
    lucide.createIcons();
}

async function saveDonHangDetail() {
    if (!editingDonHangRows.length) return;
    recalculateDonHangDetail();
    const detailHeaders = getDisplayHeaders('DON_HANG');
    const itemHeaders = ['SKU phân loại hàng', 'id_sp', 'slg', 'don_gia', 'thanh_tien'];
    const commonValues = Object.fromEntries(detailHeaders.map(header => [
        header,
        document.querySelector(`[data-order-header="${CSS.escape(header)}"]`)?.value.trim() || ''
    ]));
    const updatedRows = editingDonHangRows.map((sourceRow, rowIndex) => {
        const row = normalizeRow(sourceRow);
        detailHeaders.forEach(header => {
            row[DON_HANG_INDEX[header]] = DON_HANG_NUMERIC_HEADERS.has(header) ? parseMoney(commonValues[header]) : commonValues[header];
        });
        itemHeaders.forEach(header => {
            const value = document.querySelector(`[data-order-item-row="${rowIndex}"][data-order-item-header="${CSS.escape(header)}"]`)?.value.trim() || '';
            row[DON_HANG_INDEX[header]] = DON_HANG_NUMERIC_HEADERS.has(header) ? parseMoney(value) : value;
        });
        return row;
    });

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = 'Đang lưu chi tiết đơn hàng...';
    try {
        const newRows = [];
        for (let index = 0; index < updatedRows.length; index += 1) {
            const sheetRow = getDataSheetRow(editingDonHangRows[index]);
            if (sheetRow) {
                await writeRecordRow(updatedRows[index], sheetRow);
            } else {
                newRows.push(updatedRows[index]);
            }
        }
        await appendRecordRows(newRows);
        closeDonHangDetail();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert('Không lưu được chi tiết đơn hàng: ' + err.message);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function saveRecordFromForm(event) {
    event.preventDefault();
    const headers = getStorageHeaders();
    let row = headers.map((_, idx) => document.getElementById(`formField_${idx}`)?.value.trim() || '');
    if (currentTab === 'DON_HANG') {
        row[DON_HANG_INDEX.ngay] = getDateOnly(row[DON_HANG_INDEX.ngay_h]);
        row[DON_HANG_INDEX.id_sp] = String(row[DON_HANG_INDEX['SKU phân loại hàng']] || '').slice(0, 4);
        row = recalculateDonHangRows([row])[0];
    }
    if (currentTab !== 'DON_HANG' && !row[0]) {
        row[0] = generateNextId();
    }

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang lưu dữ liệu...`;
    try {
        const editingSheetRow = Number(document.getElementById('editingSheetRow').value);
        const existing = currentTab === 'DON_HANG'
            ? allData.find(item => getRowId(item) === getRowId(row))
            : getRowById(row[0]);
        if (currentTab === 'DON_HANG' && !editingSheetRow && existing) {
            throw new Error(`Mã đơn hàng '${getRowId(row)}' đã tồn tại. Mỗi mã đơn hàng chỉ được thêm một lần.`);
        }
        const targetSheetRow = editingSheetRow || (existing ? getDataSheetRow(existing) : 0);
        if (targetSheetRow) {
            await writeRecordRow(row, targetSheetRow);
        } else {
            await appendRecordRows([row]);
        }
        closeProductForm();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert(`Không lưu được dữ liệu: ` + err.message);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function initDragAndDrop() {
    const overlay = document.getElementById('dropOverlay');

    window.addEventListener('dragover', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
    });

    window.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null) overlay.classList.remove('active');
    });

    window.addEventListener('drop', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        if (e.dataTransfer.files.length > 0) {
            processFiles(Array.from(e.dataTransfer.files));
        }
    });
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const tabConfig = CONFIG.tabs[currentTab];
    const displayHeaders = getDisplayHeaders();
    const storageHeaders = getStorageHeaders();

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    tbody.innerHTML = pageData.map((row, rowIndex) => {
        const cells = displayHeaders.map(header => {
            const idx = storageHeaders.indexOf(header);
            const cell = row[idx] || '';
            if (idx === tabConfig.imgCol && cell) {
                const firstImg = cell.split(',')[0].trim();
                return `<td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <img src="${firstImg}" class="table-img" onerror="this.style.display='none'">
                        <a href="${cell.split(',')[0].trim()}" target="_blank" style="color: var(--primary); text-decoration: none; font-size: 11px; font-weight: 600;">Xem</a>
                    </div>
                </td>`;
            }
            const cellStr = String(cell || '').trim();
            if (cellStr.startsWith('http://') || cellStr.startsWith('https://')) {
                const parts = cellStr.split(',');
                const linksHtml = parts.map((l, i) => `<a href="${l.trim()}" target="_blank" style="color: var(--primary); font-weight: 600; text-decoration: none;">Link ${parts.length > 1 ? i + 1 : ''}</a>`.trim());
                return `<td>${linksHtml.join(', ')}</td>`;
            }
            const displayCell = currentTab === 'DON_HANG' && DON_HANG_NUMERIC_HEADERS.has(header)
                ? formatDisplayNumber(cell)
                : cell;
            return `<td>${escapeHtml(displayCell || '')}</td>`;
        }).join('');

        const editAction = currentTab === 'DON_HANG'
            ? ` ondblclick="openDonHangDetail('${escapeHtml(escapeJsString(getRowId(row)))}')"`
            : ` ondblclick="openRecordForm(${start + rowIndex})"`;
        return `<tr${editAction}>${cells}</tr>`;
    }).join('');

    renderPagination();
}

function renderPagination() {
    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const pagination = document.getElementById('pagination');

    if (totalRows <= rowsPerPage) {
        pagination.innerHTML = '';
        return;
    }

    pagination.innerHTML = `
        <button class="pagination-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
        </button>
        <div class="page-info">Trang ${currentPage} / ${totalPages} (${totalRows} dòng)</div>
        <button class="pagination-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
        </button>
    `;
    lucide.createIcons();
}

function changePage(delta) {
    currentPage += delta;
    renderTable();
    document.querySelector('.table-wrapper').scrollTop = 0;
}

function filterTable() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const truong = (document.getElementById('truongFilter')?.value || '').toLowerCase();
    const store = (document.getElementById('storeFilter')?.value || '').toLowerCase();
    const dateFrom = document.getElementById('orderDateFrom')?.value || '';
    const dateTo = document.getElementById('orderDateTo')?.value || '';
    const mdh = (document.getElementById('orderMdhFilter')?.value || '').toLowerCase();
    const mvd = (document.getElementById('orderMvdFilter')?.value || '').toLowerCase();
    const tinhTrang = (document.getElementById('orderTinhTrangFilter')?.value || '').toLowerCase();
    const trangThai = (document.getElementById('orderTrangThaiFilter')?.value || '').toLowerCase();
    const dateFromTime = dateFrom ? new Date(`${dateFrom}T00:00:00`).getTime() : 0;
    const dateToTime = dateTo ? new Date(`${dateTo}T23:59:59`).getTime() : 0;
    const sourceData = currentTab === 'DON_HANG' ? getDonHangSummaryRows() : allData;
    filteredData = sourceData.filter(row => {
        const matchesSearch = currentTab === 'DON_HANG'
            ? allData.some(item => getRowId(item, 'DON_HANG') === getRowId(row, 'DON_HANG')
                && item.some(cell => String(cell).toLowerCase().includes(term)))
            : row.some(cell => String(cell).toLowerCase().includes(term));
        const matchesTruong = !truong || String(row[1] || '').toLowerCase().includes(truong);
        const matchesStore = currentTab !== 'DON_HANG' || !store || String(row[DON_HANG_INDEX.gian_hang] || '').toLowerCase().includes(store);
        if (currentTab !== 'DON_HANG') return matchesSearch && matchesTruong && matchesStore;
        const orderTime = parseDonHangDateTime(row[DON_HANG_INDEX.ngay_h]);
        const matchesDateFrom = !dateFromTime || orderTime >= dateFromTime;
        const matchesDateTo = !dateToTime || orderTime <= dateToTime;
        const matchesMdh = !mdh || String(row[DON_HANG_INDEX.mdh] || '').toLowerCase().includes(mdh);
        const matchesMvd = !mvd || String(row[DON_HANG_INDEX.mvd] || '').toLowerCase().includes(mvd);
        const matchesTinhTrang = !tinhTrang || String(row[DON_HANG_INDEX.tinh_trang] || '').toLowerCase() === tinhTrang;
        const matchesTrangThai = !trangThai || String(row[DON_HANG_INDEX.trang_thai] || '').toLowerCase() === trangThai;
        return matchesSearch && matchesStore && matchesDateFrom && matchesDateTo && matchesMdh && matchesMvd && matchesTinhTrang && matchesTrangThai;
    });
    if (currentTab === 'DON_HANG') {
        filteredData.sort((a, b) => parseDonHangDateTime(b[DON_HANG_INDEX.ngay_h]) - parseDonHangDateTime(a[DON_HANG_INDEX.ngay_h]));
        updateDonHangSummary();
    }
    currentPage = 1;
    renderTable();
}

function updateDonHangSummary() {
    const receivedTotal = filteredData.reduce((sum, row) => sum + parseMoney(row[DON_HANG_INDEX['tien_thu_đc']]), 0);
    const profitTotal = filteredData.reduce((sum, row) => sum + parseMoney(row[DON_HANG_INDEX.loi_nhuan]), 0);
    const receivedEl = document.getElementById('orderReceivedTotal');
    const profitEl = document.getElementById('orderProfitTotal');
    if (receivedEl) receivedEl.innerText = formatDisplayNumber(receivedTotal);
    if (profitEl) profitEl.innerText = formatDisplayNumber(profitTotal);
}

async function handleFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    await processFiles(files);
    event.target.value = '';
}

function readExcelRows(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                let rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (rows[0] && rows[0][0] && String(rows[0][0]).toUpperCase().includes("ID")) {
                    rows = rows.slice(1);
                }
                resolve(rows);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
        reader.readAsArrayBuffer(file);
    });
}

function normalizeExcelHeader(value) {
    return String(value ?? '').replace(/^\uFEFF/, '').replace(/\s+/g, ' ').trim().toLocaleLowerCase('vi');
}

function getExcelCell(row, header) {
    return row[normalizeExcelHeader(header)] ?? '';
}

function formatExcelDateTime(value) {
    if (typeof value === 'number' && Number.isFinite(value)) {
        return XLSX.SSF.format('dd/mm/yyyy hh:mm', value);
    }
    const raw = String(value ?? '').trim();
    if (!raw) return '';
    const match = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
    if (match) {
        const [, day, month, year, hour = '00', minute = '00'] = match;
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year} ${hour.padStart(2, '0')}:${minute}`;
    }
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return raw;
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function getDateOnly(dateTime) {
    return String(dateTime || '').slice(0, 10);
}

function parseDonHangDateTime(value) {
    const raw = String(value || '').trim();
    const match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
    if (!match) return 0;
    const [, day, month, year, hour = '0', minute = '0'] = match;
    return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute)).getTime();
}

function normalizeOrderStatus(orderStatus, returnStatus) {
    const value = `${orderStatus || ''} ${returnStatus || ''}`.toLocaleUpperCase('vi');
    if (value.includes('HỦY') || value.includes('HUỶ')) return 'HỦY';
    if (value.includes('TRẢ') || value.includes('HOÀN TIỀN')) return 'HOÀN TRẢ';
    return 'HOÀN THÀNH';
}

function buildDonHangRows(rows) {
    const selectedStore = String(document.getElementById('storeFilter')?.value || '').trim();
    if (!selectedStore) throw new Error('Vui lòng chọn gian hàng trước khi thêm Excel.');

    const mappedRows = rows.map(source => {
        const row = Array(DON_HANG_HEADERS.length).fill('');
        const sku = String(getExcelCell(source, 'SKU phân loại hàng') || '').trim();
        const status = normalizeOrderStatus(
            getExcelCell(source, 'Trạng Thái Đơn Hàng'),
            getExcelCell(source, 'Trạng thái Trả hàng/Hoàn tiền')
        );
        row[DON_HANG_INDEX.gian_hang] = selectedStore;
        row[DON_HANG_INDEX.ngay_h] = formatExcelDateTime(getExcelCell(source, 'Ngày đặt hàng'));
        row[DON_HANG_INDEX.ngay] = getDateOnly(row[DON_HANG_INDEX.ngay_h]);
        row[DON_HANG_INDEX.mdh] = String(getExcelCell(source, 'Mã đơn hàng') || '').trim();
        row[DON_HANG_INDEX.mvd] = String(getExcelCell(source, 'Mã vận đơn') || '').trim();
        row[DON_HANG_INDEX.tong_tien] = parseMoney(getExcelCell(source, 'Tổng số tiền Người mua thanh toán'));
        row[DON_HANG_INDEX['Phí cố định']] = parseMoney(getExcelCell(source, 'Phí cố định'));
        row[DON_HANG_INDEX['Phí Dịch Vụ']] = parseMoney(getExcelCell(source, 'Phí Dịch Vụ'));
        row[DON_HANG_INDEX['Phí xử lý giao dịch']] = parseMoney(getExcelCell(source, 'Phí xử lý giao dịch'));
        row[DON_HANG_INDEX['phí khác']] = '';
        row[DON_HANG_INDEX.tinh_trang] = status;
        row[DON_HANG_INDEX.trang_thai] = status === 'HỦY' ? 'HỦY' : 'HOÀN THÀNH';
        row[DON_HANG_INDEX['SKU phân loại hàng']] = sku;
        row[DON_HANG_INDEX.id_sp] = sku.slice(0, 4);
        row[DON_HANG_INDEX.slg] = parseMoney(getExcelCell(source, 'Số lượng'));
        return row;
    }).filter(row => row[DON_HANG_INDEX.mdh]);

    return recalculateDonHangRows(mappedRows);
}

function readDonHangExcelRows(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const workbook = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const matrix = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
                const headers = (matrix[0] || []).map(normalizeExcelHeader);
                const requiredHeaders = ['Mã đơn hàng', 'SKU phân loại hàng'];
                const missingHeaders = requiredHeaders.filter(header => !headers.includes(normalizeExcelHeader(header)));
                if (missingHeaders.length) {
                    throw new Error(`File ${file.name} thiếu cột bắt buộc: ${missingHeaders.join(', ')}`);
                }
                const rows = matrix.slice(1).map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])));
                resolve(buildDonHangRows(rows));
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
        reader.readAsArrayBuffer(file);
    });
}

function truncateExcelNumericCellsInRow(row) {
    if (!Array.isArray(row)) return row;
    return row.map(cell => {
        if (typeof cell === 'number' && Number.isFinite(cell)) return Math.trunc(cell);
        return cell;
    });
}

async function processFiles(files) {
    const excelFiles = files.filter(f => /\.(xlsx|xls|csv)$/i.test(f.name));
    if (!excelFiles.length) {
        alert("Vui lòng tải lên file Excel hoặc CSV.");
        return;
    }

    const fileNames = excelFiles.map(f => f.name).join(", ");
    if (currentTab === 'DON_HANG' && !String(document.getElementById('storeFilter')?.value || '').trim()) {
        alert('Vui lòng chọn gian hàng trước khi thêm Excel.');
        return;
    }
    const confirmMessage = currentTab === 'DON_HANG'
        ? `Dữ liệu từ ${excelFiles.length} file (${fileNames}) sẽ được đọc theo tên cột và cập nhật sheet '${currentTab}'. Tiếp tục?`
        : `Dữ liệu từ ${excelFiles.length} file (${fileNames}) sẽ cập nhật sheet '${currentTab}' theo id. Id đã có sẽ cập nhật, id mới sẽ thêm dòng. Tiếp tục?`;
    if (!confirm(confirmMessage)) return;

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang xử lý ${excelFiles.length} file và cập nhật Google Sheets...`;

    try {
        const rowsFromFiles = await Promise.all(excelFiles.map(currentTab === 'DON_HANG' ? readDonHangExcelRows : readExcelRows));
        const allRowsToUpload = rowsFromFiles
            .flat()
            .filter(r => Array.isArray(r) && r.some(c => String(c || '').trim() !== ''))
            .map(truncateExcelNumericCellsInRow);

        if (!allRowsToUpload.length) {
            throw new Error("Không có dòng dữ liệu hợp lệ để tải lên.");
        }

        const result = await upsertRecordRows(allRowsToUpload);
        alert(currentTab === 'DON_HANG'
            ? `Đã thêm mới ${result.inserted} đơn hàng vào sheet '${currentTab}'. Bỏ qua ${result.skipped} dòng có mã đơn hàng trùng.`
            : `Đã cập nhật ${result.updated} dòng và thêm mới ${result.inserted} dòng vào sheet '${currentTab}'.`);
        try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { }
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert("Lỗi khi tải dữ liệu: " + err.message);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function init() {
    lucide.createIcons();
    document.getElementById('pageTitle').innerText = 'Hệ thống';
    initDragAndDrop();
    let saved = '';
    try { saved = sessionStorage.getItem(XNK_TT_TAB_STORAGE_KEY) || ''; } catch (_) { }
    await switchTab(CONFIG.tabs[saved] ? saved : 'THONG_TIN');
}

init();
